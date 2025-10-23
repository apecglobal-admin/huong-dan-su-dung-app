import { ModulePage } from "@/components/module-page"

export default function DangKyCuaHangTitlePage() {
  return (
    <div className="flex min-h-screen bg-background">
      <ModulePage
        title="ĐĂNG KÝ CỬA HÀNG"
        description="Hướng dẫn đăng ký và thiết lập cửa hàng trên APEC SPACE"
        canvaLink="https://www.canva.com"
        youtubeLink="https://www.youtube.com"
      >
        {/* <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">ĐIỀU KIỆN ĐĂNG KÝ</h2>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Có giấy phép kinh doanh hợp lệ</li>
              <li>Địa chỉ cửa hàng rõ ràng</li>
              <li>Thông tin liên hệ chính xác</li>
              <li>Cam kết tuân thủ quy định của APEC SPACE</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">QUY TRÌNH ĐĂNG KÝ</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Truy cập trang đăng ký cửa hàng</li>
              <li>Điền đầy đủ thông tin cửa hàng</li>
              <li>Upload giấy phép kinh doanh</li>
              <li>Cung cấp hình ảnh cửa hàng</li>
              <li>Chờ phê duyệt từ APEC SPACE</li>
              <li>Thiết lập menu và giá cả</li>
            </ol>
          </div>
        </div> */}
      </ModulePage>
    </div>
  )
}