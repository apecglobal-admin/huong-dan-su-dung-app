"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ImageCarouselModal } from "@/components/image-carousel-modal"
import { VideoModal } from "@/components/video-modal"
import { ArrowRight, Image as ImageIcon, Video as VideoIcon } from "lucide-react"

const quickActions = [
  { label: "Hướng dẫn sử dụng", href: "/" },
  { label: "Tải ứng dụng iOS", href: "/tai-ung-dung/ios" },
  { label: "Tải ứng dụng Android", href: "/tai-ung-dung/android" },
  { label: "Đăng ký/đăng nhập", href: "/dang-ky-dang-nhap/dang-ky-dang-nhap" },
  { label: "Quên mật khẩu", href: "/dang-ky-dang-nhap/quen-mat-khau" },
  { label: "Giới thiệu Trang chủ", href: "/dang-ky-dang-nhap/gioi-thieu-trang-chu" },
  { label: "Nộp tiền", href: "/nop-rut-tien/nop-tien" },
  { label: "Rút tiền", href: "/nop-rut-tien/rut-tien" },
  { label: "Đăng ký cửa hàng", href: "/dia-diem/dang-ky-cua-hang-title" },
  { label: "Cập nhật cửa hàng", href: "/dia-diem/cap-nhat-tong-quan" },
  { label: "Thêm sản phẩm", href: "/dia-diem/them-san-pham" },
  { label: "Tạo Voucher", href: "/dia-diem/tao-voucher" },
  { label: "Tham gia khuyến mãi", href: "/dia-diem/tham-gia-khuyen-mai" },
  { label: "Đặt hàng", href: "/dat-hang/dat-hang-dich-vu" },
  { label: "Yêu cầu hỗ trợ", href: "/tai-khoan/tinh-nang-ho-tro" },
]

const DEFAULT_VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ"

export function Hero() {
  const [expandedMode, setExpandedMode] = useState<'image' | 'video' | null>(null)
  const [isCarouselOpen, setIsCarouselOpen] = useState(false)
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [selectedPage, setSelectedPage] = useState<string>("/")
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string>(DEFAULT_VIDEO_URL)

  const toggleMode = (mode: 'image' | 'video') => {
    setExpandedMode((prev) => {
      const next = prev === mode ? null : mode
      setIsCarouselOpen(false)
      setIsVideoOpen(false)
      if (next === 'image') {
        setSelectedPage("/")
      }
      if (next === 'video') {
        setSelectedVideoUrl(DEFAULT_VIDEO_URL)
      }
      return next
    })
  }

  const handleActionClick = (href: string) => {
    if (expandedMode === 'image') {
      setSelectedPage(href)
      setIsCarouselOpen(true)
    }
    if (expandedMode === 'video') {
      setSelectedVideoUrl(DEFAULT_VIDEO_URL)
      setIsVideoOpen(true)
    }
  }

  const activeActions = expandedMode ? quickActions : []
  const isImageActive = expandedMode === 'image'
  const isVideoActive = expandedMode === 'video'

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center gap-10 bg-[#050316] px-6 py-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1b0a4d] via-[#0a0424] to-[#02000f]" />
        <div className="absolute left-[-15%] top-[-20%] h-[420px] w-[420px] rounded-full bg-fuchsia-500/30 blur-[140px]" />
        <div className="absolute bottom-[-25%] right-[-10%] h-[420px] w-[420px] rounded-full bg-sky-500/25 blur-[140px]" />
      </div>

      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-5 text-center text-white">
        <h1 className="text-3xl font-bold sm:text-4xl">TRUY CẬP HƯỚNG DẪN NHANH CHÓNG</h1>
        <p className="text-base text-white/70 sm:text-lg">
          Chọn kiểu hiển thị phù hợp để xem hướng dẫn sử dụng ApecSpace.
        </p>
      </div>

      <div className="relative z-10 flex w-full max-w-4xl flex-col gap-6">
        <div className="grid grid-cols-2 gap-4">
          <Button
            onClick={() => {
              toggleMode('image')
            }}
            className={`group flex min-h-[112px] w-full flex-col items-center justify-center gap-3 rounded-3xl bg-gradient-to-r from-[#f43f5e] via-[#ec4899] to-[#f97316] px-6 py-6 text-base sm:min-h-[140px] sm:px-8 sm:py-8 sm:text-lg lg:min-h-[168px] lg:px-10 lg:py-10 lg:text-xl font-medium text-white shadow-lg shadow-[#f43f5e]/40 transition-all duration-500 ease-out hover:scale-[1.02] whitespace-normal ${expandedMode === 'video' ? 'opacity-65 blur-[0.3px]' : 'opacity-100'} ${isImageActive ? 'translate-y-[-6px] scale-[1.02] shadow-[0_30px_60px_-25px_rgba(244,63,94,0.55)] ring-2 ring-white/60' : 'translate-y-0 scale-100 ring-0'}`}
          >
            <ImageIcon className="size-14 sm:size-16 lg:size-20" strokeWidth={1} />
            <span className="w-full text-center leading-tight break-words font-medium uppercase text-base sm:text-lg md:text-xl lg:text-2xl max-[360px]:text-xs">XEM BẰNG HÌNH ẢNH</span>
          </Button>

          <Button
            onClick={() => {
              toggleMode('video')
            }}
            className={`group flex min-h-[112px] w-full flex-col items-center justify-center gap-3 rounded-3xl bg-gradient-to-r from-[#0ea5e9] via-[#6366f1] to-[#8b5cf6] px-6 py-6 text-base sm:min-h-[140px] sm:px-8 sm:py-8 sm:text-lg lg:min-h-[168px] lg:px-10 lg:py-10 lg:text-xl font-medium text-white shadow-lg shadow-[#0ea5e9]/40 transition-all duration-500 ease-out hover:scale-[1.02] whitespace-normal ${expandedMode === 'image' ? 'opacity-65 blur-[0.3px]' : 'opacity-100'} ${isVideoActive ? 'translate-y-[-6px] scale-[1.02] shadow-[0_30px_60px_-25px_rgba(14,165,233,0.55)] ring-2 ring-white/60' : 'translate-y-0 scale-100 ring-0'}`}
          >
            <VideoIcon className="size-14 sm:size-16 lg:size-20" strokeWidth={1} />
            <span className="w-full text-center leading-tight break-words font-medium uppercase text-base sm:text-lg md:text-xl lg:text-2xl max-[360px]:text-xs">XEM BẰNG VIDEO</span>
          </Button>
        </div>

        {expandedMode && (
          <div key={expandedMode} className="grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-5 text-white/90 backdrop-blur animate-in fade-in slide-in-from-top-2">
            <div className="grid gap-3 grid-cols-2 max-[360px]:grid-cols-1">
              {activeActions.map((action, index) => (
                <button
                  key={`${expandedMode}-${action.href}`}
                  onClick={() => handleActionClick(action.href)}
                  className="group flex items-center justify-between gap-3 rounded-2xl bg-white/10 px-4 py-3 text-left text-sm font-medium transition hover:bg-white/20 animate-in fade-in slide-in-from-bottom-2"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <span className="flex-1 whitespace-normal break-words text-left leading-snug">{action.label}</span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-white/60 transition group-hover:translate-x-1 group-hover:text-white" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <ImageCarouselModal open={isCarouselOpen} onOpenChange={setIsCarouselOpen} page={selectedPage} />
      <VideoModal open={isVideoOpen} onOpenChange={setIsVideoOpen} videoUrl={selectedVideoUrl} />
    </section>
  )
}
