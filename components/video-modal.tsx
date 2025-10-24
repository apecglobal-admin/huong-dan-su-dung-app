"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

interface VideoModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  videoSrc?: string
  videoUrl?: string
  title?: string
}

export function VideoModal({
  open,
  onOpenChange,
  videoSrc,
  videoUrl,
  title,
}: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const source = videoSrc || videoUrl

  const handlePlayPause = useCallback(() => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  const handleMute = useCallback(() => {
    if (!videoRef.current) return
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }, [isMuted])

  const handleTimeUpdate = useCallback(() => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }, [])

  const handleLoadedMetadata = useCallback(() => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }, [])

  const handleProgressChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value)
    if (videoRef.current) {
      videoRef.current.currentTime = time
      setCurrentTime(time)
    }
  }, [])

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen && videoRef.current) {
      videoRef.current.pause()
      setIsPlaying(false)
    }
    onOpenChange(newOpen)
  }

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return "0:00"
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className="fixed left-1/2 top-1/2 z-[60] flex w-screen max-w-[96vw] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden border border-white/10 bg-[#07051a] px-0 pb-10 pt-16 shadow-[0_45px_120px_-45px_rgba(7,5,26,0.9)] sm:w-full sm:max-w-5xl sm:rounded-[32px] sm:px-12 sm:pb-12 sm:pt-14 [&>button]:top-4 [&>button]:right-4 [&>button]:flex [&>button]:h-10 [&>button]:w-10 [&>button]:items-center [&>button]:justify-center [&>button]:rounded-full [&>button]:border [&>button]:border-white/30 [&>button]:bg-white/10 [&>button]:text-white [&>button]:hover:bg-white/20"
        showCloseButton={true}
      >
        <div className="pointer-events-none absolute inset-x-[-30%] top-[-40%] h-[420px] w-[420px] rounded-full bg-violet-500/20 blur-[160px]" />
        <div className="pointer-events-none absolute inset-x-[-20%] bottom-[-45%] h-[420px] w-[420px] rounded-full bg-sky-500/15 blur-[180px]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/10 via-transparent to-transparent" />

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center min-h-0 w-full px-0">
          <div className="relative w-full flex items-center justify-center">
            <div className="group relative flex h-full w-full max-w-[min(560px,85vw)] mx-auto items-center justify-center">
              <div className="absolute inset-0 -z-10 rounded-[36px] bg-gradient-to-br from-white/10 via-purple-500/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="relative flex h-full w-full items-center justify-center rounded-[32px] border border-white/15 bg-white/5 p-3 shadow-[0_40px_120px_-45px_rgba(9,9,45,0.85)] backdrop-blur">
                <div className="relative w-full overflow-hidden rounded-[24px] bg-black/90" style={{ aspectRatio: "16 / 9" }}>
                  <video
                    ref={videoRef}
                    src={source}
                    className="h-full w-full object-contain"
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                  />
                  
                  {/* Center play button */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-opacity duration-300 group-hover:bg-black/20">
                    <button
                      onClick={handlePlayPause}
                      className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur shadow-[0_10px_30px_rgba(79,70,229,0.35)] transition hover:bg-white/20 hover:border-white/50"
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? (
                        <Pause className="h-7 w-7 fill-white" />
                      ) : (
                        <Play className="h-7 w-7 fill-white" />
                      )}
                    </button>
                  </div>

                  {/* Bottom controls */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <input
                      type="range"
                      min="0"
                      max={duration || 0}
                      value={currentTime}
                      onChange={handleProgressChange}
                      className="mb-3 h-1 w-full cursor-pointer appearance-none rounded-full bg-white/20 outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:cursor-pointer"
                    />
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={handlePlayPause}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
                          aria-label={isPlaying ? "Pause" : "Play"}
                        >
                          {isPlaying ? (
                            <Pause className="h-4 w-4 fill-white" />
                          ) : (
                            <Play className="h-4 w-4 fill-white" />
                          )}
                        </button>
                        <button
                          onClick={handleMute}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
                          aria-label={isMuted ? "Unmute" : "Mute"}
                        >
                          {isMuted ? (
                            <VolumeX className="h-4 w-4" />
                          ) : (
                            <Volume2 className="h-4 w-4" />
                          )}
                        </button>
                        <span className="text-xs text-white/80">
                          {formatTime(currentTime)} / {formatTime(duration)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {title && (
            <div className="mt-4 sm:mt-8 flex items-center justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white/80">
                {title}
              </span>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
