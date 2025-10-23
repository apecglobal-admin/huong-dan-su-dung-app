import { ModulePage } from "@/components/module-page"

export default function ThemSanPhamPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <ModulePage
        title="THÊM SẢN PHẨM TRONG CỬA HÀNG"
        description="Hướng dẫn thêm và quản lý sản phẩm trong cửa hàng"
        canvaLink="https://www.canva.com"
        youtubeLink="https://www.youtube.com"
      >
        {/* <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">THÊM SẢN PHẨM MỚI</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Đăng nhập vào tài khoản cửa hàng</li>
              <li>Chọn "Quản lý sản phẩm"</li>
              <li>Nhấn "Thêm sản phẩm mới"</li>
              <li>Điền thông tin sản phẩm</li>
              <li>Upload hình ảnh sản phẩm</li>
              <li>Thiết lập giá cả và tùy chọn</li>
              <li>Xuất bản sản phẩm</li>
            </ol>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">THÔNG TIN SẢN PHẨM</h2>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Tên sản phẩm và mô tả</li>
              <li>Giá bán và giá gốc</li>
              <li>Danh mục và thẻ tag</li>
              <li>Hình ảnh chất lượng cao</li>
              <li>Thông tin dinh dưỡng (nếu có)</li>
              <li>Thời gian chuẩn bị</li>
            </ul>
          </div>
        </div> */}
      </ModulePage>
    </div>
  )
}