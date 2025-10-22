"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { FileText, Play, Sparkles, ArrowRight } from "lucide-react"

interface ModulePageProps {
  title: string
  description: string
  canvaLink: string
  youtubeLink: string
  children?: React.ReactNode
}

export function ModulePage({ title, description, canvaLink, youtubeLink, children }: ModulePageProps) {
  return (
    <main className="flex-1 min-h-screen bg-gradient-to-b from-background via-background to-secondary/10">
      {/* Hero Section - Mobile First */}
      <section className="relative overflow-hidden pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-40 h-40 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 md:w-96 md:h-96 bg-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 bg-primary/10 rounded-full border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold text-primary">Hướng dẫn chi tiết</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-balance leading-tight text-foreground">{title}</h1>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground mb-8 text-balance leading-relaxed max-w-2xl">
            {description}
          </p>

          {/* CTA Buttons - Stack on mobile, side-by-side on desktop */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <a href={canvaLink} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                <FileText className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Xem bằng hình ảnh
                <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </a>

            <a href={youtubeLink} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-primary/30 text-primary hover:bg-primary/5 shadow-md hover:shadow-lg transition-all duration-200 group bg-transparent"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Xem bằng video
                <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </a>
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
    </main>
  )
}
