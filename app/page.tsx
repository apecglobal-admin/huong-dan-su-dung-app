import Banner from "@/components/banner"
import { Hero } from "@/components/hero"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <main className="flex-1">
        <Banner />
        <Hero />
      </main>
    </div>
  )
}
