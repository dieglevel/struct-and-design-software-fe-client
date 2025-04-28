import { createOpenAI } from '@ai-sdk/openai'

import { streamText, UIMessage } from 'ai'

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
