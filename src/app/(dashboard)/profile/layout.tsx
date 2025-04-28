'use client'
import { SideBar } from '@/containers/profile'

export default function LayoutUserProfile({ children }: { children: React.ReactNode }) {
  return (
    <div className="container flex">
      <SideBar />
      <main className="mt-2 w-full">{children}</main>
    </div>
  )
}
