'use client'
import { SideBar } from '@/containers/profile'

export default function LayoutUserProfile({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto flex">
      <SideBar />
      <main className="">{children}</main>
    </div>
  )
}
