import { createOpenRouter } from '@openrouter/ai-sdk-provider'
import { createOpenAI } from '@ai-sdk/openai'

// import { openai } from '@ai-sdk/openai'
import { generateText, streamText, UIMessage } from 'ai'

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const openrouter = createOpenRouter({
    apiKey: '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',
  })

  // const openrouter = createOpenRouter({
  //   baseURL: 'https://api.openrouter.ai/v1',  
  //   apiKey: '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',
  // })

  const result = streamText({
    model: openrouter.chat('deepseek/deepseek-chat-v3-0324:free'),
    messages: messages,
  })

  return result.toDataStreamResponse()
}
