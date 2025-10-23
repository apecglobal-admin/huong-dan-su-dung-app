import { ModulePage } from "@/components/module-page"

export default function GioiThieuTrangChuPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <ModulePage
        title="Giới thiệu Trang chủ & Tài khoản của tôi"
        description="Tìm hiểu về giao diện chính và quản lý tài khoản cá nhân"
        canvaLink="https://www.canva.com"
        youtubeLink="https://www.youtube.com"
      >
        {/* <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">TRANG CHỦ ỨNG DỤNG</h2>
            <p className="text-muted-foreground">
              Trang chủ hiển thị các cửa hàng, sản phẩm nổi bật và chương trình khuyến mãi đang diễn ra.
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Tìm kiếm cửa hàng theo địa điểm</li>
              <li>Xem danh sách sản phẩm phổ biến</li>
              <li>Truy cập chương trình khuyến mãi</li>
              <li>Quét mã QR để đặt hàng nhanh</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">TÀI KHOẢN CỦA TÔI</h2>
            <p className="text-muted-foreground">
              Quản lý thông tin cá nhân, theo dõi đơn hàng và các chương trình ưu đãi.
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Cập nhật thông tin cá nhân</li>
              <li>Xem lịch sử đơn hàng</li>
              <li>Quản lý phương thức thanh toán</li>
              <li>Theo dõi điểm tích lũy và voucher</li>
            </ul>
          </div>
        </div> */}
      </ModulePage>
    </div>
  )
}