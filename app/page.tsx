"use client"

import { useState } from "react"
import Banner from "@/components/banner"
import { Button } from "@/components/ui/button"
import { CanvaModal } from "@/components/canva-modal"
import { VideoModal } from "@/components/video-modal"
import type { LucideIcon } from "lucide-react"
import {
  Image as ImageIcon,
  Video as VideoIcon,
  Smartphone,
  UserPlus,
  UserCheck,
  Wallet,
  HandCoins,
  CreditCard,
  ShoppingCart,
  Gift,
  ClipboardList,
  Share2,
  Users,
  Medal,
  MapPin,
  KeyRound,
  LifeBuoy,
  Building2,
  RefreshCcw,
  Package,
  TicketPercent,
  Megaphone,
} from "lucide-react"

type QuickActionChild = {
  label: string
  href?: string | null
  icon: LucideIcon
}

type QuickAction = {
  label: string
  href: string | null
  children?: QuickActionChild[]
}

const quickActions = [
  {
    label: "KHỞI ĐỘNG ỨNG DỤNG",
    href: null,
    children: [
      { label: "TÌM VÀ CÀI ĐẶT ỨNG DỤNG (ANDROID / IOS)", href: "/tai-ung-dung", icon: Smartphone },
      { label: "ĐĂNG KÝ TÀI KHOẢN – ĐĂNG NHẬP", href: "/dang-ky-dang-nhap/dang-ky-dang-nhap", icon: UserPlus },
      { label: "XÁC THỰC & HOÀN THIỆN HỒ SƠ CÁ NHÂN", href: "/tai-khoan/xac-thuc-ho-so", icon: UserCheck },
    ],
  },
  {
    label: "QUẢN LÝ TÀI CHÍNH",
    href: null,
    children: [
      { label: "NỘP TIỀN", href: "/nop-rut-tien/nop-tien", icon: Wallet },
      { label: "RÚT TIỀN", href: "/nop-rut-tien/rut-tien", icon: HandCoins },
      { label: "THANH TOÁN", href: "/nop-rut-tien/thanh-toan", icon: CreditCard },
    ],
  },
  {
    label: "MUA SẮM & DỊCH VỤ",
    href: null,
    children: [
      { label: "MUA HÀNG / ĐẶT DỊCH VỤ TRÊN HỆ THỐNG", href: "/dat-hang/dat-hang-dich-vu", icon: ShoppingCart },
      { label: "THANH TOÁN VÀ NHẬN ƯU ĐÃI", href: "/dat-hang/uu-dai", icon: Gift },
      { label: "THEO DÕI ĐƠN HÀNG / LỊCH SỬ GIAO DỊCH", href: "/dat-hang/lich-su-giao-dich", icon: ClipboardList },
    ],
  },
  {
    label: "ĐỊA ĐIỂM KINH DOANH",
    href: null,
    children: [
      { label: "ĐĂNG KÝ CỬA HÀNG", href: "/dia-diem/dang-ky-cua-hang-title", icon: Building2 },
      { label: "CẬP NHẬT VÀ TỔNG QUAN CỬA HÀNG", href: "/dia-diem/cap-nhat-tong-quan", icon: RefreshCcw },
      { label: "SẢN PHẨM", href: "/dia-diem/them-san-pham", icon: Package },
      { label: "TẠO VOUCHER", href: "/dia-diem/tao-voucher", icon: TicketPercent },
      { label: "THAM GIA CHƯƠNG TRÌNH KHUYẾN MÃI", href: "/dia-diem/tham-gia-khuyen-mai", icon: Megaphone },
    ],
  },
  {
    label: "GIỚI THIỆU & LIÊN KẾT THÀNH VIÊN",
    href: null,
    children: [
      { label: "CHIA SẺ MÃ GIỚI THIỆU", href: "/tai-khoan/ma-gioi-thieu", icon: Share2 },
      { label: "THEO DÕI THÀNH VIÊN GIỚI THIỆU VÀ HOA HỒNG", href: "/tai-khoan/hoa-hong", icon: Users },
      { label: "XEM CẤP BẬC & QUYỀN LỢI TRONG HỆ THỐNG", href: "/tai-khoan/cap-bac", icon: Medal },
    ],
  },
  {
    label: "TIỆN ÍCH KHÁC",
    href: null,
    children: [
      { label: "TÌM KIẾM ĐỊA ĐIỂM – ĐẠI LÝ – ĐỐI TÁC GẦN NHẤT", href: "/dia-diem/tim-kiem", icon: MapPin },
      { label: "KÍCH HOẠT THẺ QUYỀN NĂNG / THẺ ƯU ĐÃI", href: "/tai-khoan/kich-hoat-the", icon: KeyRound },
      { label: "LIÊN HỆ TRUNG TÂM HỖ TRỢ & CHĂM SÓC KHÁCH HÀNG", href: "/tai-khoan/tinh-nang-ho-tro", icon: LifeBuoy },
    ],
  },
] as const satisfies readonly QuickAction[]

const DEFAULT_VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ"

export default function HomeV2() {
  const [expandedMode, setExpandedMode] = useState<'image' | 'video' | null>(null)
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string>(DEFAULT_VIDEO_URL)
  const [showCanva, setShowCanva] = useState(false)

  const toggleMode = (mode: 'image' | 'video') => {
    setExpandedMode((prev) => {
      const next = prev === mode ? null : mode
      setIsVideoOpen(false)
      setShowCanva(false)
      if (next === 'video') {
        setSelectedVideoUrl(DEFAULT_VIDEO_URL)
      }
      return next
    })
  }

  const handleActionClick = (_href?: string) => {
    if (expandedMode === 'image') {
      setShowCanva(true)
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
    <>
      <Banner />

      <section className="relative flex min-h-screen flex-col items-center justify-center gap-10 bg-[#050316] px-6 py-16">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1b0a4d] via-[#0a0424] to-[#02000f]" />
          <div className="absolute left-[-15%] top-[-20%] h-[420px] w-[420px] rounded-full bg-fuchsia-500/30 blur-[140px] max-[365px]:top-[-15%]" />
          <div className="absolute bottom-[-25%] right-[-10%] h-[420px] w-[420px] rounded-full bg-sky-500/25 blur-[140px] max-[365px]:bottom-[-20%]" />
        </div>

        <div className="relative z-10 flex max-w-3xl flex-col items-center gap-5 text-center text-white">
          <h1 className="text-3xl font-bold sm:text-4xl max-[520px]:text-2xl max-[410px]:text-xl max-[360px]:text-lg max-[320px]:text-base">TRUY CẬP HƯỚNG DẪN NHANH CHÓNG</h1>
          <p className="text-base text-white/70 sm:text-lg max-[520px]:text-sm max-[410px]:text-xs max-[360px]:text-[11px] max-[320px]:text-[10px]">
            Chọn kiểu hiển thị phù hợp để xem hướng dẫn sử dụng ApecSpace.
          </p>
        </div>

        <div className="relative z-10 flex w-full max-w-4xl flex-col gap-6">
          <div className="grid grid-cols-2 gap-4">
            <Button
              onClick={() => toggleMode('image')}
              className={`group flex min-h-[112px] w-full flex-col items-center justify-center gap-3 rounded-3xl bg-gradient-to-r from-[#f43f5e] via-[#ec4899] to-[#f97316] px-6 py-6 text-base sm:min-h-[140px] sm:px-8 sm:py-8 sm:text-lg lg:min-h-[168px] lg:px-10 lg:py-10 lg:text-xl font-medium text-white shadow-lg shadow-[#f43f5e]/40 transition-all duration-500 ease-out hover:scale-[1.02] whitespace-normal ${expandedMode === 'video' ? 'opacity-65 blur-[0.3px]' : 'opacity-100'} ${isImageActive ? 'translate-y-[-6px] scale-[1.02] shadow-[0_30px_60px_-25px_rgba(244,63,94,0.55)] ring-2 ring-white/60' : 'translate-y-0 scale-100 ring-0'}`}
            >
              <ImageIcon className="size-14 sm:size-16 lg:size-20 max-[365px]:size-12 max-[344px]:size-11 max-[322px]:size-10 max-[300px]:size-9" strokeWidth={1} />
              <span className="w-full text-center leading-tight break-words font-medium uppercase text-base sm:text-lg md:text-xl lg:text-2xl max-[410px]:text-xs max-[365px]:text-[11px] max-[344px]:text-[10px] max-[322px]:text-[9px] max-[300px]:text-[8px]">XEM BẰNG HÌNH ẢNH</span>
            </Button>

            <Button
              onClick={() => toggleMode('video')}
              className={`group flex min-h-[112px] w-full flex-col items-center justify-center gap-3 rounded-3xl bg-gradient-to-r from-[#0ea5e9] via-[#6366f1] to-[#8b5cf6] px-6 py-6 text-base sm:min-h-[140px] sm:px-8 sm:py-8 sm:text-lg lg:min-h-[168px] lg:px-10 lg:py-10 lg:text-xl font-medium text-white shadow-lg shadow-[#0ea5e9]/40 transition-all duration-500 ease-out hover:scale-[1.02] whitespace-normal ${expandedMode === 'image' ? 'opacity-65 blur-[0.3px]' : 'opacity-100'} ${isVideoActive ? 'translate-y-[-6px] scale-[1.02] shadow-[0_30px_60px_-25px_rgba(14,165,233,0.55)] ring-2 ring-white/60' : 'translate-y-0 scale-100 ring-0'}`}
            >
              <VideoIcon className="size-14 sm:size-16 lg:size-20 max-[365px]:size-12 max-[344px]:size-11 max-[322px]:size-10 max-[300px]:size-9" strokeWidth={1} />
              <span className="w-full text-center leading-tight break-words font-medium uppercase text-base sm:text-lg md:text-xl lg:text-2xl max-[410px]:text-xs max-[365px]:text-[11px] max-[344px]:text-[10px] max-[322px]:text-[9px] max-[300px]:text-[8px]">XEM BẰNG VIDEO</span>
            </Button>
          </div>

          {expandedMode && (
            <div className="grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-5 text-white/90 backdrop-blur animate-in fade-in slide-in-from-top-2">
              <div className="grid gap-3 grid-cols-2 max-[500px]:grid-cols-1">
                {activeActions.map((action, index) => (
                  <div
                    key={`${expandedMode}-${action.href ?? `group-${index}`}`}
                    className="group flex h-full flex-col gap-2 rounded-2xl bg-white/10 px-4 py-4 text-left text-sm font-semibold uppercase transition hover:bg-white/20 animate-in fade-in slide-in-from-bottom-2"
                    style={{ animationDelay: `${index * 60}ms` }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-base font-bold">{index + 1}</span>
                      <button
                        onClick={() => handleActionClick(action.href ?? undefined)}
                        className="flex-1 whitespace-normal break-words text-left leading-snug uppercase text-white transition hover:text-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        {action.label}
                      </button>
                    </div>
                    {action.children && (
                      <div className="flex flex-col gap-5 pl-12 pt-1 max-sm:pl-0 max-sm:gap-4">
                        {action.children.map((child, childIndex) => {
                          const ChildIcon = child.icon
                          return (
                            <button
                              key={`${child.href ?? `child-${childIndex}`}`}
                              onClick={() => handleActionClick(child.href ?? undefined)}
                              className="group/child flex w-full items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-left text-xs font-semibold uppercase text-white/80 transition hover:border-white/40 hover:bg-white/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white max-sm:px-4"
                            >
                              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-white/90 transition group-hover/child:bg-white/30 group-hover/child:text-white">
                                <ChildIcon className="h-4 w-4" strokeWidth={1.5} />
                              </span>
                              <span className="flex-1 whitespace-normal break-words leading-snug">{child.label}</span>
                            </button>
                          )
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        <CanvaModal open={showCanva} onOpenChange={setShowCanva} />
        <VideoModal open={isVideoOpen} onOpenChange={setIsVideoOpen} videoUrl={selectedVideoUrl} />
      </section>
    </>
  )
}
