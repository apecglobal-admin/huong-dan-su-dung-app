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
        className="w-screen sm:w-full max-w-none sm:max-w-4xl flex flex-col p-0 sm:p-6 left-0 sm:left-1/2 right-0 sm:right-auto translate-x-0 sm:translate-x-[-50%] rounded-none sm:rounded-lg"
        showCloseButton={true}
      >
        <div className="flex-1 flex flex-col items-center justify-center min-h-0 px-0 sm:px-8 pt-12 sm:pt-0 w-full">
          <div className="relative w-full flex items-center justify-center">
            <Carousel 
              setApi={setCarouselApi} 
              className="w-full"
              opts={{
                align: "center",
                loop: true,
              }}
            >
              <CarouselContent className="h-[60vh] sm:h-[500px] lg:h-[600px] -ml-2 sm:-ml-4">
                {displayImages.map((imageNum) => (
                  <CarouselItem key={imageNum} className="pl-2 sm:pl-4 flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={`/HDSD/${imageNum}.jpg`}
                        alt={`Hướng dẫn bước ${imageNum}`}
                        width={0}
                        height={0}
                        className="w-full h-full"
                        sizes="100vw"
                        priority={imageNum <= 3}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="h-8 w-8 sm:h-10 sm:w-10 left-2 sm:left-0 sm:-left-12 top-1/2" />
              <CarouselNext className="h-8 w-8 sm:h-10 sm:w-10 right-2 sm:right-0 sm:-right-12 top-1/2" />
            </Carousel>
          </div>
          <div className="flex items-center justify-center gap-2 mt-3 sm:mt-6">
            <span className="text-xs sm:text-sm font-medium text-foreground">
              {currentIndex + 1} / {displayImages.length}
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}