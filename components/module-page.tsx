"use client"

import type React from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useState } from "react"
import type { NavItem } from "@/components/sidebar"
import { navItems } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { FileText, Play, ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { getNavigationInfo } from "@/lib/navigation"
import { ImageCarouselModal } from "@/components/image-carousel-modal"

interface ModulePageProps {
  title: string
  description: string
  canvaLink: string
  youtubeLink: string
  children?: React.ReactNode
}

const quickActions = navItems
  .flatMap((item) => (item.children?.length ? item.children : [item]))
  .filter((item): item is NavItem & { href: string } => Boolean(item.href))

export function ModulePage({ title, description, canvaLink, youtubeLink, children }: ModulePageProps) {
  const router = useRouter()
  const pathname = usePathname()
  const navInfo = getNavigationInfo(pathname)
  const [isCarouselOpen, setIsCarouselOpen] = useState(false)

  // Current page href for image mapping
  const currentPage = pathname

  return (
    <main className="flex-1 min-h-screen">
      {/* Hero Section */}
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance text-white">{title}</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl text-balance">
              {description}
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
      </section>

      {/* Content Section */}
      {children && (
        <section className="py-12 md:py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-xl border border-border p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="prose prose-sm md:prose-base max-w-none dark:prose-invert">
                {/* Prose styling for better readability */}
                <style>{`
                  .prose {
                    --tw-prose-body: var(--foreground);
                    --tw-prose-headings: var(--foreground);
                    --tw-prose-lead: var(--muted-foreground);
                    --tw-prose-links: var(--primary);
                    --tw-prose-bold: var(--foreground);
                    --tw-prose-counters: var(--muted-foreground);
                    --tw-prose-bullets: var(--primary);
                    --tw-prose-hr: var(--border);
                    --tw-prose-quotes: var(--muted-foreground);
                    --tw-prose-quote-borders: var(--primary);
                    --tw-prose-captions: var(--muted-foreground);
                    --tw-prose-code: var(--primary);
                    --tw-prose-pre-code: var(--primary-foreground);
                    --tw-prose-pre-bg: var(--primary);
                    --tw-prose-th-borders: var(--border);
                    --tw-prose-td-borders: var(--border);
                  }
                  
                  .prose h2 {
                    @apply text-2xl md:text-3xl font-bold mt-8 mb-4 text-foreground;
                  }
                  
                  .prose h3 {
                    @apply text-xl md:text-2xl font-semibold mt-6 mb-3 text-foreground;
                  }
                  
                  .prose p {
                    @apply text-base md:text-lg leading-relaxed mb-4 text-muted-foreground;
                  }
                  
                  .prose ul, .prose ol {
                    @apply mb-4 pl-6 md:pl-8;
                  }
                  
                  .prose li {
                    @apply mb-2 text-muted-foreground;
                  }
                  
                  .prose code {
                    @apply bg-secondary/50 px-2 py-1 rounded text-sm font-mono;
                  }
                  
                  .prose pre {
                    @apply bg-secondary/80 p-4 rounded-lg overflow-x-auto mb-4;
                  }
                `}</style>
                {children}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Pagination Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 border-t border-border/30">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between gap-4">
            {navInfo.previous ? (
              <Link href={navInfo.previous.href}>
                <Button
                  variant="outline"
                  className="gap-2 border-primary bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">{navInfo.previous.label}</span>
                  <span className="sm:hidden">Trước</span>
                </Button>
              </Link>
            ) : (
              <div />
            )}

            {navInfo.next ? (
              <Link href={navInfo.next.href}>
                <Button
                  variant="outline"
                  className="gap-2 border-primary bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary transition-colors"
                >
                  <span className="hidden sm:inline">{navInfo.next.label}</span>
                  <span className="sm:hidden">Tiếp</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      <ImageCarouselModal
        open={isCarouselOpen}
        onOpenChange={setIsCarouselOpen}
        page={currentPage}
      />
    </main>
  )
}
