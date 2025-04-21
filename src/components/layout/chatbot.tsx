'use client'

import { useChat } from '@ai-sdk/react'

import { useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar } from '@/components/ui/avatar'
import { SendIcon, BotIcon, UserIcon } from 'lucide-react'

export function Chatbot() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
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
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className="flex max-w-[80%] items-start gap-2">
                  {message.role !== 'user' && (
                    <Avatar className="h-8 w-8 bg-primary/10">
                      <BotIcon className="h-4 w-4" />
                    </Avatar>
                  )}
                  <div
                    className={`rounded-lg px-3 py-2 ${
                      message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  </div>
                  {message.role === 'user' && (
                    <Avatar className="h-8 w-8 bg-primary">
                      <UserIcon className="h-4 w-4" />
                    </Avatar>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>
      <div className="border-t p-4">
        <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
          <Input
            id="message-input"
            placeholder="Type your message..."
            value={input}
            onChange={handleInputChange}
            className="flex-1"
            disabled={isLoading}
            aria-label="Type your message"
          />
          <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
            <SendIcon className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </form>
      </div>
    </div>
  )
}
