"use client"

import { X } from "lucide-react"
import CanvaEmbedInline from "@/components/CanvaEmbed"

interface CanvaModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CanvaModal({ open, onOpenChange }: CanvaModalProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-[70] bg-black">
      <button
        onClick={() => onOpenChange(false)}
        className="absolute top-6 right-6 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition hover:bg-white/20"
        aria-label="Close"
      >
        <X className="h-6 w-6" />
      </button>

      <div className="h-full w-full overflow-auto scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <CanvaEmbedInline />
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}
