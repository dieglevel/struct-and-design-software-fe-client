'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar } from '@/components/ui/avatar'
import { SendIcon, BotIcon, UserIcon } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { ChatRequestDTO } from '@/models/request/chat.request.dto'
import { IChat } from '@/models/response/chat'
import useChat from '@/hooks/api/useChat'
import useAuth from '@/hooks/api/useAuth'

export function Chatbot() {
  const [input, setInput] = useState('')
  const { sendChat, messages, loading, error } = useChat()
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { me, handleGetMe } = useAuth()

  useEffect(() => {
    handleGetMe()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const payload: ChatRequestDTO = {
      question: input,
      user_id: me?.userId || "",
      thread_id: me?.userId || "",
    }

    await sendChat(payload)
    setInput('')
  }

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.length === 0 ? (
          <div className="flex h-full items-center justify-center text-center text-muted-foreground">
            <div>
              <BotIcon className="mx-auto mb-4 h-12 w-12 opacity-50" />
              <p>How can I help you today?</p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((msg: IChat, index: number) => {
                console.log("msg", msg)
              const isUser = msg.role === 'user'
              return (
                <div key={index} className={`flex items-start ${isUser ? 'justify-end' : 'justify-start'} gap-2`}>
                  {!isUser && (
                    <Avatar>
                      <BotIcon />
                    </Avatar>
                  )}

                  <div
                    className={`max-w-[70%] rounded-lg p-3 text-sm ${
                      isUser ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <ReactMarkdown>{msg.messages?.[0].content || msg.question || ''}</ReactMarkdown>
                  </div>

                  {isUser && (
                    <Avatar>
                      <UserIcon />
                    </Avatar>
                  )}
                </div>
              )
            })}

            {loading && (
              <div className="flex items-center space-x-2">
                <Avatar>
                  <BotIcon />
                </Avatar>
                <div className="flex items-center space-x-1 rounded-lg bg-gray-100 p-3 text-gray-800">
                  <div className="h-2 w-2 animate-bounce rounded-full bg-gray-500 [animation-delay:0s]" />
                  <div className="h-2 w-2 animate-bounce rounded-full bg-gray-500 [animation-delay:0.2s]" />
                  <div className="h-2 w-2 animate-bounce rounded-full bg-gray-500 [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      <div className="border-t p-4">
        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
          <Input
            id="message-input"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1"
            disabled={loading}
            aria-label="Message input"
          />
          <Button type="submit" size="icon" disabled={loading || !input.trim()}>
            <SendIcon className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </form>
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      </div>
    </div>
  )
}
