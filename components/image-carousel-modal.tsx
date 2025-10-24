"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel"

interface ImageCarouselModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  images?: number[] // Array of image numbers (1-52)
  page?: string // Page href to filter images
}

// Mapping of pages to their image sequences (title + steps)
const pageImageMapping: Record<string, number[]> = {
  // Home - all slides
  '/': Array.from({ length: 52 }, (_, i) => i + 1), // HƯỚNG DẪN SỬ DỤNG - all 52 slides

  // Existing pages
  '/tai-ung-dung/ios': [3], // iOS installation
  '/tai-ung-dung/android': [3], // Android installation
  '/nop-rut-tien/nop-tien': [37, 38, 39, 40, 41, 42, 43, 44], // Nộp tiền
  '/nop-rut-tien/rut-tien': [45, 46, 47, 48, 49], // Rút tiền

  // Title images + step-by-step images
  '/dang-ky-dang-nhap/dang-ky-dang-nhap': [4, 5, 6], // ĐĂNG KÝ/ĐĂNG NHẬP (title + steps)
  '/dang-ky-dang-nhap/quen-mat-khau': [7, 8, 9, 10, 11, 12], // QUÊN MẬT KHẨU (title + steps)
  '/dang-ky-dang-nhap/gioi-thieu-trang-chu': [13, 14, 15], // Giới thiệu Trang chủ & Tài khoản của tôi (title + steps)
  '/dat-hang/dat-hang-dich-vu': [16, 17, 18, 19, 20], // ĐẶT HÀNG/DỊCH VỤ (title + steps)
  '/dia-diem/dang-ky-cua-hang-title': [21, 22, 23], // ĐĂNG KÝ CỬA HÀNG (title + steps)
  '/dia-diem/cap-nhat-tong-quan': [24, 25, 26, 27, 28, 29, 30], // CẬP NHẬT VÀ TỔNG QUAN CỬA HÀNG (title + steps)
  '/dia-diem/them-san-pham': [31, 32, 33, 34], // THÊM SẢN PHẨM TRONG CỬA HÀNG (title + steps)
  '/dia-diem/tao-voucher': [35, 36], // TẠO VOUCHER (title + steps)
  '/dia-diem/tham-gia-khuyen-mai': [], // THAM GIA CHƯƠNG TRÌNH KHUYẾN MÃI (title + steps)
  '/tai-khoan/tinh-nang-ho-tro': [50, 51, 52], // SỬ DỤNG TÍNH NĂNG HỖ TRỢ TRÊN APECSPACE (title + steps)
}

export function ImageCarouselModal({
  open,
  onOpenChange,
  images,
  page,
}: ImageCarouselModalProps) {
  // Determine which images to show
  const displayImages = images || (page ? pageImageMapping[page] || [] : Array.from({ length: 52 }, (_, i) => i + 1))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()

  const handleCarouselSelect = useCallback(() => {
    if (!carouselApi) return
    setCurrentIndex(carouselApi.selectedScrollSnap())
  }, [carouselApi])

  useEffect(() => {
    if (!carouselApi) return
    
    handleCarouselSelect()
    carouselApi.on("select", handleCarouselSelect)
    
    return () => {
      carouselApi.off("select", handleCarouselSelect)
    }
  }, [carouselApi, handleCarouselSelect])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="fixed left-1/2 top-1/2 z-[60] flex w-screen max-w-[96vw] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden border border-white/10 bg-[#07051a] px-0 pb-10 pt-16 shadow-[0_45px_120px_-45px_rgba(7,5,26,0.9)] sm:w-full sm:max-w-5xl sm:rounded-[32px] sm:px-12 sm:pb-12 sm:pt-14 [&>button]:top-4 [&>button]:right-4 [&>button]:flex [&>button]:h-10 [&>button]:w-10 [&>button]:items-center [&>button]:justify-center [&>button]:rounded-full [&>button]:border [&>button]:border-white/30 [&>button]:bg-white/10 [&>button]:text-white [&>button]:hover:bg-white/20"
        showCloseButton={true}
      >
        <div className="pointer-events-none absolute inset-x-[-30%] top-[-40%] h-[420px] w-[420px] rounded-full bg-violet-500/20 blur-[160px]" />
        <div className="pointer-events-none absolute inset-x-[-20%] bottom-[-45%] h-[420px] w-[420px] rounded-full bg-sky-500/15 blur-[180px]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/10 via-transparent to-transparent" />

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center min-h-0 w-full px-0">
          <div className="relative w-full flex items-center justify-center">
            <Carousel
              setApi={setCarouselApi}
              className="relative mx-auto w-full max-w-[min(620px,92vw)]"
              opts={{
                align: "center",
                loop: true,
                dragFree: false,
                containScroll: "trimSnaps",
              }}
            >
              <CarouselContent className="h-[60vh] sm:h-[62vh] md:h-[64vh] lg:h-[520px] xl:h-[560px] 2xl:h-[600px] -ml-4 sm:-ml-6">
                {displayImages.map((imageNum) => (
                  <CarouselItem key={imageNum} className="pl-4 sm:pl-6 flex items-center justify-center">
                    <div className="group relative flex h-full w-full max-w-[min(560px,85vw)] items-center justify-center">
                      <div className="absolute inset-0 -z-10 rounded-[36px] bg-gradient-to-br from-white/10 via-purple-500/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                      <div className="relative flex h-full w-full items-center justify-center rounded-[32px] border border-white/15 bg-white/5 p-3 shadow-[0_40px_120px_-45px_rgba(9,9,45,0.85)] backdrop-blur">
                        <div className="relative h-full w-full overflow-hidden rounded-[24px] bg-black/90" style={{ aspectRatio: "9 / 16" }}>
                          <Image
                            src={`/HDSD/${imageNum}.jpg`}
                            alt={`Hướng dẫn bước ${imageNum}`}
                            width={0}
                            height={0}
                            className="h-full w-full object-contain select-none"
                            sizes="100vw"
                            priority={imageNum <= 3}
                          />
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 sm:-left-16 top-1/2 z-10 h-12 w-12 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 text-white shadow-[0_10px_30px_rgba(79,70,229,0.35)] backdrop-blur transition hover:bg-white/20" />
              <CarouselNext className="right-0 sm:-right-16 top-1/2 z-10 h-12 w-12 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 text-white shadow-[0_10px_30px_rgba(79,70,229,0.35)] backdrop-blur transition hover:bg-white/20" />
            </Carousel>
          </div>
          <div className="mt-4 sm:mt-8 flex items-center justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white/80">
              {currentIndex + 1} / {displayImages.length}
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}