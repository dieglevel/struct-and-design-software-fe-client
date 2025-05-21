'use client'
/* eslint-disable react-hooks/exhaustive-deps */
import SiteHeader from '@/components/layout/site-header'
import SiteFooter from '@/components/layout/site-footer'
import type React from 'react'
import useAuth from '@/hooks/api/useAuth'
import { useEffect } from 'react'
import { ChatBubble } from '@/components/layout/chat-bubble'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { handleGetMe } = useAuth()
  useEffect(() => {
    handleGetMe()
    return () => {
      handleGetMe()
    }
  }, [])
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <ChatBubble />
      <SiteFooter />
    </div>
  )
}
