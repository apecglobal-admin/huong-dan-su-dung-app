import { ModulePage } from "@/components/module-page"

export default function CapNhatTongQuanPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <ModulePage
        title="CẬP NHẬT VÀ TỔNG QUAN CỬA HÀNG"
        description="Quản lý và cập nhật thông tin tổng quan cửa hàng"
        canvaLink="https://www.canva.com"
        youtubeLink="https://www.youtube.com"
      >
        {/* <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">THÔNG TIN CỬA HÀNG</h2>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Tên cửa hàng và mô tả</li>
              <li>Địa chỉ và thông tin liên hệ</li>
              <li>Giờ mở cửa và ngày nghỉ</li>
              <li>Hình ảnh cửa hàng và thực đơn</li>
              <li>Chính sách giao hàng</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">CẬP NHẬT THÔNG TIN</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Đăng nhập vào tài khoản cửa hàng</li>
              <li>Chọn "Quản lý cửa hàng"</li>
              <li>Cập nhật thông tin cần thiết</li>
              <li>Upload hình ảnh mới nếu có</li>
              <li>Lưu thay đổi</li>
            </ol>
          </div>
        </div> */}
      </ModulePage>
    </div>
  )
}