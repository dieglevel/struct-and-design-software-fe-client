import { SideBar } from "./components"

export default function LayoutUserProfile({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto flex">
      <SideBar />
      <main className="">
        {children}
      </main>
      
    </div>
  )
}

