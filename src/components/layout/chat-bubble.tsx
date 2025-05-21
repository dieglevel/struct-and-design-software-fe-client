'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { MessageCircleIcon, XIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Chatbot } from './chatbot'

export function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="absolute bottom-16 right-0 min-w-[400px] max-w-[450px] md:max-w-[500px]"
          >
            <div className="overflow-hidden rounded-lg border bg-background shadow-xl">
              <div className="flex items-center justify-between border-b p-4">
                <h2 className="font-semibold">Chat with AI Assistant</h2>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Close chat">
                  <XIcon className="h-4 w-4" />
                </Button>
              </div>
              <div className="h-[500px] max-h-[70vh]">
                <Chatbot />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className="h-14 w-14 rounded-full bg-[#F27052] shadow-lg"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        <MessageCircleIcon className="h-6 w-6" />
      </Button>
    </div>
  )
}
