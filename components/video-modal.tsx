"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"

interface VideoModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  videoUrl?: string
}

export function VideoModal({
  open,
  onOpenChange,
  videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
}: VideoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="w-screen sm:w-full max-w-none sm:max-w-4xl flex flex-col p-0 sm:p-6 left-0 sm:left-1/2 right-0 sm:right-auto translate-x-0 sm:translate-x-[-50%] rounded-none sm:rounded-lg [&>button]:top-6 [&>button]:right-6 [&>button]:h-10 [&>button]:w-10 [&>button]:sm:h-auto [&>button]:sm:w-auto"
        showCloseButton={true}
      >
        <div className="flex-1 flex flex-col items-center justify-center min-h-0 px-0 sm:px-8 pt-12 sm:pt-0 w-full">
          <div className="relative w-full aspect-video">
            <iframe
              src={videoUrl}
              title="Video hướng dẫn"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}