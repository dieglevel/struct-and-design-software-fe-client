export interface IChat {
  question: string
  messages: any[]
  language: string
  next_state: string
  thread_id: string
  user_id: string
  role: 'user' | 'assistant'
}