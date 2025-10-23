"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import type { NavItem } from "@/components/sidebar"
import { navItems } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { ImageCarouselModal } from "@/components/image-carousel-modal"
import { Play, FileText, ArrowLeft } from "lucide-react"

const quickActions = navItems
  .flatMap((item) => (item.children?.length ? item.children : [item]))
  .filter((item): item is NavItem & { href: string } => Boolean(item.href))

export function Hero() {
  const router = useRouter()
  const [isCarouselOpen, setIsCarouselOpen] = useState(false)

  return (
    <section className="bg-gradient-to-br from-indigo-950 via-purple-900 to-purple-950 text-foreground py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          Quay lại
        </button>
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance text-white">Hướng dẫn sử dụng APEC SPACE App</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl text-balance">
            Tìm hiểu cách sử dụng ứng dụng của chúng tôi thông qua các hướng dẫn chi tiết, video hướng dẫn, và tài liệu thiết kế.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-6">
          <div className="grid grid-cols-2 [@media(max-width:300px)]:grid-cols-1 lg:flex lg:flex-row gap-3 md:gap-4">
            <div className="lg:flex-1">
              <Button
                onClick={() => setIsCarouselOpen(true)}
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all [@media(max-width:390px)]:flex-col [@media(max-width:390px)]:gap-1 [@media(max-width:390px)]:h-14"
              >
                <FileText className="w-5 h-5 mr-2 [@media(max-width:390px)]:mr-0 [@media(max-width:390px)]:mb-1" />
                <span className="[@media(max-width:300px)]:hidden">Xem bằng hình ảnh</span>
              </Button>
            </div>

            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="lg:flex-1">
              <Button
                size="lg"
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-lg hover:shadow-xl transition-all [@media(max-width:390px)]:flex-col [@media(max-width:390px)]:gap-1 [@media(max-width:390px)]:h-14"
              >
                <Play className="w-5 h-5 mr-2" />
                <span className="[@media(max-width:300px)]:hidden">Xem bằng video</span>
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-2 [@media(max-width:300px)]:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
            {quickActions.map((action) => (
              <Link key={action.href} href={action.href}>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full h-12 px-3 sm:px-4 rounded-lg bg-background border-primary/30 text-foreground hover:bg-primary/10 hover:border-white transition-colors whitespace-normal text-xs sm:text-sm"
                >
                  {action.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <ImageCarouselModal open={isCarouselOpen} onOpenChange={setIsCarouselOpen} />
    </section>
  )
}
