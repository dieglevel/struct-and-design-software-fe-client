// 'use client'

// import { useChat } from '@ai-sdk/react'

// import { useRef, useEffect } from 'react'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Avatar } from '@/components/ui/avatar'
// import { SendIcon, BotIcon, UserIcon } from 'lucide-react'
// import ReactMarkdown from 'react-markdown'

// export function Chatbot() {
//   const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
//     api: '/api/chat',
//     onResponse: (response) => {
//       console.log('Received response:', response)
//     },
//     onFinish: (message) => {
//       console.log('Chat finished with message:', message)
//     },
//     onError: (error) => {
//       console.error('Chat error:', error)
//     },
//   })
//   const messagesEndRef = useRef<HTMLDivElement>(null)

//   // Auto-scroll to bottom when new messages arrive
//   useEffect(() => {
//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
//     }
//   }, [messages])

//   return (
//     <div className="flex h-full flex-col">
//       <div className="flex-1 overflow-y-auto p-4">
//         {messages.length === 0 ? (
//           <div className="flex h-full items-center justify-center text-center text-muted-foreground">
//             <div>
//               <BotIcon className="mx-auto mb-4 h-12 w-12 opacity-50" />
//               <p>How can I help you today?</p>
//             </div>
//           </div>
//         ) : (
//           <div className="space-y-4">
//             {messages.map((message) => (
//               <div key={message.id} className={`flex items-start ${message.role === 'user' ? 'justify-end' : ''}`}>
//                 {message.role === 'assistant' ? (
//                   <div className="flex items-center space-x-2">
//                     <Avatar>
//                       <BotIcon />
//                     </Avatar>
//                     <div className="max-w-[70%] rounded-lg bg-gray-100 p-2 text-gray-800">
//                       {message.toolInvocations && message.toolInvocations[0]?.result ? (
//                         message.toolInvocations[0].result.map((item, index) => (
//                           <ReactMarkdown key={index}>{item.formattedText}</ReactMarkdown>
//                         ))
//                       ) : message.content === '' ? (
//                         <div className="flex items-center space-x-2">
//                           <div className="h-2 w-2 animate-bounce rounded-full bg-gray-500 [animation-delay:0s]" />
//                           <div className="h-2 w-2 animate-bounce rounded-full bg-gray-500 [animation-delay:0.2s]" />
//                           <div className="h-2 w-2 animate-bounce rounded-full bg-gray-500 [animation-delay:0.4s]" />
//                         </div>
//                       ) : (
//                         <ReactMarkdown>{message.content}</ReactMarkdown>
//                       )}
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="flex items-center space-x-2">
//                     <Avatar>
//                       <UserIcon />
//                     </Avatar>
//                     <div className="max-w-[70%] rounded-lg bg-blue-500 p-2 text-white">{message.content}</div>
//                   </div>
//                 )}
//               </div>
//             ))}
//             <div ref={messagesEndRef} />
//           </div>
//         )}
//       </div>
//       <div className="border-t p-4">
//         <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
//           <Input
//             id="message-input"
//             placeholder="Type your message..."
//             value={input}
//             onChange={handleInputChange}
//             className="flex-1"
//             disabled={isLoading}
//             aria-label="Type your message"
//           />
//           <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
//             <SendIcon className="h-4 w-4" />
//             <span className="sr-only">Send message</span>
//           </Button>
//         </form>
//       </div>
//     </div>
//   )
// }
