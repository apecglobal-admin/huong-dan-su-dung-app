import { ModulePage } from "@/components/module-page"

export default function QRCodePage() {
  return (
    <div className="flex min-h-screen bg-background">
      <ModulePage
        title="Quản lý QRcode"
        description="Hướng dẫn quản lý và sử dụng QR codes cá nhân"
        canvaLink="https://www.canva.com"
        youtubeLink="https://www.youtube.com"
      >
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Quản lý QRcode</h2>
            <div className="mb-3">
              <strong className="text-lg">Hiển thị QR code của cá nhân</strong>
            </div>
            <div className="mb-3">
              <strong className="text-lg">Thao tác:</strong>
            </div>
            <div className="space-y-2 text-muted-foreground">
              <p>Bấm tab "Tài khoản" &gt; Bấm vào mã "QRCode của tôi" Hiển thị các QRCode của cá nhân bao gồm:</p>
              <p><strong>QR cá nhân:</strong> Là QR giới thiệu người dùng khác đăng ký với cá nhân là người giới thiệu</p>
              <p><strong>QR cửa hàng:</strong> Là QR thanh toán của từng cửa hàng do cá nhân sở hữu</p>
              <p><strong>Tải QR</strong> Bấm vào nút "Tải về" &gt; QR được tải xuống</p>
              <p><strong>Chia sẻ</strong> Bấm vào nút "Chia sẻ" &gt; Chia sẻ QR cho người khác</p>
            </div>
          </div>
        </div>
      </ModulePage>
    </div>
  )
}