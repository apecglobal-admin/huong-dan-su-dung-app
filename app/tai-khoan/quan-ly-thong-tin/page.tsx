import { Sidebar } from "@/components/sidebar"
import { ModulePage } from "@/components/module-page"

export default function QuanLyThongTinPage() {
  return (
    <div className="flex min-h-screen bg-background">
      
      <ModulePage
        title="QUẢN LÝ THÔNG TIN TÀI KHOẢN"
        description="Hướng dẫn cập nhật thông tin cá nhân và quản lý tài khoản"
        canvaLink="https://www.canva.com"
        youtubeLink="https://www.youtube.com"
      >
        <div className="space-y-8">
          {/* A. Cập nhật thông tin tài khoản */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-foreground">A. Cập nhật thông tin tài khoản</h2>
            <div className="mb-3">
              <strong className="text-lg">Thao tác:</strong>
            </div>
            <div className="space-y-2 text-muted-foreground">
              <p><strong>Bước 1:</strong> Bấm Tab tài khoản &gt; Bấm "Thông tin tài khoản"</p>
              <p><strong>Bước 2:</strong> Bấm cập nhật &gt; Cập nhật thông tin &gt; bấm lưu</p>
            </div>
          </div>

          {/* B. Cập nhật ảnh đại diện của người dùng */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-foreground">B. Cập nhật ảnh đại diện của người dùng</h2>
            <div className="mb-3">
              <strong className="text-lg">Thao tác:</strong>
            </div>
            <div className="space-y-2 text-muted-foreground">
              <p><strong>Bước 1:</strong> Bấm Tab tài khoản &gt; Bấm "Thông tin tài khoản"</p>
              <p><strong>Bước 2:</strong> Bấm biểu tượng cập nhật ảnh &gt; Chọn ảnh mới &gt; bấm lưu</p>
            </div>
          </div>

          {/* C. Quản lý phương thức thanh toán của cá nhân */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-foreground">C. Quản lý phương thức thanh toán của cá nhân</h2>

            <div className="mb-4">
              <strong className="text-lg">Thao tác thêm tài khoản</strong>
              <div className="mt-2 space-y-2 text-muted-foreground">
                <p><strong>Bước 1:</strong> Chọn Tab tài khoản &gt; Chọn Phương thức thanh toán &gt; Hiển thị màn hình phương thức thanh toán</p>
                <p><strong>Bước 2:</strong> Chọn Thêm tài khoản</p>
                <p><strong>Bước 3:</strong> Điền thông tin &gt; Bấm Lưu</p>
              </div>
            </div>

            <div>
              <strong className="text-lg">Thao tác Sửa/ xóa tài khoản</strong>
              <div className="mt-2 text-muted-foreground">
                <p>Tại màn hình phương thức thanh toán &gt; Chọn (1) Chỉnh sửa thông tin tài khoản (2) Xóa tài khoản</p>
              </div>
            </div>
          </div>
        </div>
      </ModulePage>
    </div>
  )
}
