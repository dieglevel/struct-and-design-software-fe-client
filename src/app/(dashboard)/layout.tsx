import SiteHeader from '@/components/layout/site-header'
import SiteFooter from '@/components/layout/site-footer'
import type React from 'react'
import { ChatBubble } from '@/components/layout/chat-bubble'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <ChatBubble />
      <SiteFooter />
    </div>
  )
}
