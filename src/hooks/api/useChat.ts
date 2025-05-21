import { useState } from 'react'
import { ChatRequestDTO } from '@/models/request/chat.request.dto'
import { IChat } from '@/models/response/chat'
import chatService from '@/services/Chat.service'

const useChat = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [messages, setMessages] = useState<IChat[]>([])

  const sendChat = async (payload: ChatRequestDTO) => {
    setLoading(true)
    setError(null)
    const userMessage: IChat = {
      ...payload,
      messages: [{ content: payload.question }],
      language: '',
      next_state: '',
      role: 'user',
    }
    setMessages((prev) => [...prev, userMessage])
    try {
      const res = await chatService.chat(payload)
      console.log(res)
      if(res.status === 200) {
        setMessages((prev) => [...prev, {role: 'assistant', ...res.data}])
      }else{
        setMessages((prev) => [
                          ...prev,
                          {
                            thread_id: '',
                            user_id: '',
                            language: '',
                            next_state: '',
                            role: 'assistant',
                            messages: [{ content: 'Có lỗi xảy ra khi gửi chat.', role: 'assistant' }],
                            question: '',
                          },
                        ])
      }
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Có lỗi xảy ra khi gửi chat.')
    } finally {
      setLoading(false)
    }
  }

  return {
    sendChat,
    loading,
    error,
    messages,
  }
}

export default useChat
