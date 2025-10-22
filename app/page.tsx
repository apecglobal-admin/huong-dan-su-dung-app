import { Sidebar } from "@/components/sidebar"
import { Hero } from "@/components/hero"
import { Resources } from "@/components/resources"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <main className="flex-1">
        <Hero />
        <Resources />
      </main>
    </div>
  )
}
