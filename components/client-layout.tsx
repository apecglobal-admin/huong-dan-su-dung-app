import type React from "react"
import { Sidebar } from "@/components/sidebar"
import { MobileSidebar } from "@/components/mobile-sidebar"

export function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Desktop Layout - hidden on mobile, visible on md and up */}
      <div className="hidden md:flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-y-auto w-full">{children}</div>
      </div>

      {/* Mobile Layout - visible on mobile, hidden on md and up */}
      <div className="md:hidden flex flex-col h-screen overflow-hidden">
        <MobileSidebar />
        <div className="flex-1 overflow-y-auto w-full pt-14">{children}</div>
      </div>
    </>
  )
}