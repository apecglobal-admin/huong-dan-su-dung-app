"use client"

import { Sidebar } from "@/components/sidebar"
import { ModulePage } from "@/components/module-page"

export default function QuanLySanPhamPage() {
  return (
    <div className="flex min-h-screen bg-background">
      
      <main className="flex-1">
        <ModulePage
          title="QUẢN LÝ SẢN PHẨM"
          description="Hướng dẫn quản lý sản phẩm khi cửa hàng đã được duyệt và hoạt động"
          canvaLink="https://www.canva.com"
          youtubeLink="https://www.youtube.com"
        >
          <div className="space-y-8">
            <div>
              <p className="text-muted-foreground mb-4">Thêm mới sản phẩm khi cửa hàng đăng ký đã được duyệt và ở Trạng thái: HOẠT ĐỘNG</p>
            </div>

            {/* A. Thêm mới sản phẩm */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">A. Thêm mới sản phẩm</h2>
              <div className="mb-3">
                <strong className="text-lg">THAO TÁC</strong>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Bước 1:</strong> Bấm "Hồ sơ" &gt; "Cửa hàng của tôi"</p>
                <p><strong>Bước 2:</strong> Bấm chọn cửa hàng muốn thêm sản phẩm</p>
                <p><strong>Bước 3:</strong> Chọn danh sách sản phẩm</p>
                <p><strong>Bước 4:</strong> Chọn thêm mới sản phẩm</p>
                <p><strong>Bước 5:</strong> Điền thông tin sản phẩm</p>
                <p><strong>Bước 6:</strong> Thêm loại sản phẩm (thêm biến thể cho sản phẩm) &gt; bấm Lưu</p>
                <p><strong>Bước 7:</strong> Hiển thị thông báo tạo sản phẩm thành công</p>
              </div>
            </div>

            {/* B. Xem chi tiết sản phẩm */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">B. Xem chi tiết sản phẩm</h2>
              <div className="mb-3">
                <strong className="text-lg">THAO TÁC</strong>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Bước 1:</strong> Bấm " Tài khoản " &gt; "Cửa hàng của tôi"</p>
                <p><strong>Bước 2:</strong> bấm chọn cửa hàng muốn thêm sản phẩm</p>
                <p><strong>Bước 3:</strong> Chọn danh sách sản phẩm</p>
                <p><strong>Bước 4:</strong> Bấm nút " Chi tiết"</p>
                <p>Hiển thị trang chi tiết sản phẩm</p>
              </div>
            </div>

            {/* C. Chỉnh sửa sản phẩm */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">C. Chỉnh sửa sản phẩm</h2>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Bước 1:</strong> Tại trang chi tiết sản phẩm &gt; Bấm nút Sửa</p>
                <p><strong>Bước 2:</strong> Chỉnh sửa thông tin &gt; Bấm lưu</p>
              </div>
            </div>
          </div>
        </ModulePage>
      </main>
    </div>
  )
}
