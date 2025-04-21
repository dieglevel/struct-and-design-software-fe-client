import { Result } from 'postcss'
import { createOpenAI } from '@ai-sdk/openai'

// import { openai } from '@ai-sdk/openai'
import { CoreSystemMessage, generateText, streamText, UIMessage } from 'ai'

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const openrouter = createOpenAI({
    baseURL: 'https://openrouter.ai/api/v1',
    apiKey: '',
    name: 'openrouter',
  })

  const result = streamText({
    model: openrouter('deepseek/deepseek-r1:free'),
    messages: messages,
  })

  return result.toDataStreamResponse()
}
