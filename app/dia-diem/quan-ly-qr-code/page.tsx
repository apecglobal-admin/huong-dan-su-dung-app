"use client"

import { ModulePage } from "@/components/module-page"

export default function QuanLyQRCodePage() {
  return (
    <div className="flex min-h-screen bg-background">
      <main className="flex-1">
        <ModulePage
          title="QUẢN LÝ QR CODE"
          description="Hướng dẫn lấy và tải QR code của cửa hàng"
          canvaLink="https://www.canva.com"
          youtubeLink="https://www.youtube.com"
        >
          <div className="space-y-6">
            {/* Lấy QR Code Cửa Hàng */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Lấy QR Code Cửa Hàng</h2>
              <div className="mb-3">
                <strong className="text-lg">Thao tác:</strong>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p>Bấm tab " Tài khoản " &gt; Bấm vào mã " QR Code của tôi" Hiển thị các QR Code của cá nhân bao gồm:</p>
                <p><strong>QR cá nhân:</strong> Là QR giới thiệu người dùng khác đăng ký với cá nhân là người giới thiệu</p>
                <p><strong>QR cửa hàng:</strong> Là QR thanh toán của từng cửa hàng do cá nhân sở hữu</p>
              </div>
            </div>

            {/* Tải QR */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Tải QR</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>Chọn QR cửa hàng của bạn &gt; Bấm vào nút " Tải về " &gt; QR được tải xuống &gt; In mã QR và dán tài quầy</p>
              </div>
            </div>
          </div>
        </ModulePage>
      </main>
    </div>
  )
}