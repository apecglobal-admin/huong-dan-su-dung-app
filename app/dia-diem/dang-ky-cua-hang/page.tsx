"use client"

import { Sidebar } from "@/components/sidebar"
import { ModulePage } from "@/components/module-page"

export default function DangKyCuaHangPage() {
  return (
    <div className="flex min-h-screen bg-background">
      
      <main className="flex-1">
        <ModulePage
          title="ĐĂNG KÝ CỬA HÀNG"
          description="Hướng dẫn đăng ký cửa hàng và địa điểm kinh doanh"
          canvaLink="https://www.canva.com"
          youtubeLink="https://www.youtube.com"
        >
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">ĐĂNG KÝ CỬA HÀNG</h2>
              <div className="mb-3">
                <strong className="text-lg">THAO TÁC</strong>
              </div>
              <div className="mb-3 text-muted-foreground">
                <p>Đăng nhập vào ứng dụng bằng tài khoản đang hoạt động</p>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Bước 1:</strong> Bấm " Tài khoản " &gt; "Cửa hàng của tôi"</p>
                <p><strong>Bước 2:</strong> Bấm Thêm cửa hàng mới</p>
                <p><strong>Bước 3:</strong> Điền thông tin cửa hàng &gt; Bấm tiếp tục</p>
                <p><strong>Bước 4:</strong> Điền thông tin tệp chứng từ &gt; Bấm Đăng ký</p>
                <p>Hiển thị thông báo đăng ký thành công</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-foreground">LƯU Ý: Khi đăng ký địa điểm mới</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>+ User chỉ thực hiện đăng ký thông tin của hàng (bước 3):</strong> Cửa hàng đăng ký ở trạng thái chờ bổ xung hồ sơ</p>
                <p><strong>+ User chỉ thực hiện đăng ký thông tin của hàng và đăng tải giấy phép (bước 4):</strong> Cửa hàng đăng ký ở trạng thái chờ duyệt</p>
              </div>
            </div>
          </div>
        </ModulePage>
      </main>
    </div>
  )
}
