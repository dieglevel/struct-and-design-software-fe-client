import { Result } from '@/libs/type/types'
import { createOpenAI } from '@ai-sdk/openai'
import { sql } from '@vercel/postgres'

// import { openai } from '@ai-sdk/openai'
import { generateText, streamText, UIMessage } from 'ai'

const openai = createOpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENAI_API_KEY,
  name: 'openrouter',
})

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const query = await generateQuery(messages[0].content)

  console.log('Generated SQL Query:', query)
  // const result = streamText({
  //   model: openai('deepseek/deepseek-r1:free'),
  //   messages: messages,
  // })

  const result = streamText({
    model: openai('mistralai/mistral-small-3.1-24b-instruct:free'),
    messages: messages,
  })

  return result;
}

export const generateQuery = async (input: string) => {
  'use server'
  try {
    const result = await generateText({
      model: openai('deepseek/deepseek-r1:free'),
      system: `You are a SQL (PostgreSQL) and data visualization expert specializing in tourism data. Your job is to generate precise SQL queries based on user requests. The database schema includes:

tour_destinations (
  category_id   nvarchar(255) PRIMARY KEY,
  name          nvarchar(255),
  description   nvarchar(255),
  image_url     varchar(255)
);

tours (
  tour_id       nvarchar(255) PRIMARY KEY,
  name          nvarchar(255),
  description   nvarchar(255),
  price         double,
  thumbnail     varchar(255),
  duration      string,
  category_id   nvarchar(255)  -- FK → tour_destination.category_id
);

tour_schedules (
  tour_schedule_id  nvarchar(255) PRIMARY KEY,
  tour_id          nvarchar(255), -- FK → tour.tour_id
  name             varchar(255),
  description      nvarchar(255),
  start_date        date,
  available_slot   int,
  end_date          date,
  adult_price       double,
  child_price       double,
  baby_price        double
);

Guidelines for query generation:
1. Only retrieval queries (SELECT) are allowed.
2. For text searches (names, descriptions, etc.), use the ILIKE operator with LOWER() function on both sides. Example: LOWER(tour.name) ILIKE LOWER('%search_term%')
3. When joining tables, use appropriate join syntax with aliases for readability.
4. Always return quantitative data that can be visualized (at least two columns).
5. If user asks for a single value, include a count or related metric.
6. For date ranges, format dates properly using PostgreSQL date functions.
7. For price calculations, use proper numeric functions.
8. Always include proper sorting (ORDER BY) where appropriate.
9. Limit results when needed for readability (LIMIT clause).
10. When calculating rates or percentages, return as decimal values.

RETURN ONLY THE SQL QUERY WITHOUT ANY EXPLANATION, COMMENTS, OR MARKDOWN FORMATTING.`, // SYSTEM PROMPT AS ABOVE - OMITTED FOR BREVITY
      prompt: `Generate the query necessary to retrieve the data the user wants: ${input}`,
    })


    const resultQuery =  runGenerateSQLQuery(result.text)
    return resultQuery
  } catch (e) {
    console.error(e)
    throw new Error('Failed to generate query')
  }
}

export const runGenerateSQLQuery = async (query: string) => {
  'use server'
  // Check if the query is a SELECT statement
  if (
    !query.trim().toLowerCase().startsWith('select') ||
    query.trim().toLowerCase().includes('drop') ||
    query.trim().toLowerCase().includes('delete') ||
    query.trim().toLowerCase().includes('insert') ||
    query.trim().toLowerCase().includes('update') ||
    query.trim().toLowerCase().includes('alter') ||
    query.trim().toLowerCase().includes('truncate') ||
    query.trim().toLowerCase().includes('create') ||
    query.trim().toLowerCase().includes('grant') ||
    query.trim().toLowerCase().includes('revoke')
  ) {
    throw new Error('Only SELECT queries are allowed')
  }

  let data: any
  try {
    data = await sql.query(query)
  } catch (e: any) {
    if (e.message.includes('relation "unicorns" does not exist')) {
      console.log('Table does not exist, creating and seeding it with dummy data now...')
      // throw error
      throw Error('Table does not exist')
    } else {
      throw e
    }
  }

  return data.rows as Result[]
}