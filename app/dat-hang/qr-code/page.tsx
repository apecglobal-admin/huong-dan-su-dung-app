import { ModulePage } from "@/components/module-page"

export default function QRCodePage() {
  return (
    <div className="flex min-h-screen bg-background">
      <ModulePage
        title="Quét QR code thanh toán"
        description="Hướng dẫn quét QR code để thanh toán tại cửa hàng"
        canvaLink="https://www.canva.com"
        youtubeLink="https://www.youtube.com"
      >
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Quét QR code thanh toán</h2>
            <div className="mb-3 text-muted-foreground">
              <p>Địa điểm dán QR code thanh toán của APEC trong cửa hàng</p>
            </div>
            <div className="mb-3 text-muted-foreground">
              <p>Khách hàng sau khi sử dụng sản phẩm của cửa hàng &gt; Tiến hành quét QRCode thanh toán</p>
            </div>
            <div className="mb-3">
              <strong className="text-lg">THAO TÁC</strong>
            </div>
            <div className="space-y-2 text-muted-foreground">
              <p>Khách hàng mở App APEC &gt; Bấm biểu tưởng APEC &gt; Chọn quét QRCode</p>
              <p>Sau đó, Khi cammera mở lên &gt; Tiến hành quét QRcode thanh toán của cửa hàng</p>
              <p>Hệ thống hiển thị trang điền thông tin thanh toán &gt; Bấm Thanh toán</p>
              <p>Hiển thị chi tiết giao dịch &gt; Bấm Xác nhận</p>
              <p>Hiển thị trang giao dịch thành công</p>
            </div>
          </div>
        </div>
      </ModulePage>
    </div>
  )
}