"use client"

import { Sidebar } from "@/components/sidebar"
import { ModulePage } from "@/components/module-page"

export default function CapNhatCuaHangPage() {
  return (
    <div className="flex min-h-screen bg-background">
      
      <main className="flex-1">
        <ModulePage
          title="Cập nhật cửa hàng"
          description="Hướng dẫn cập nhật hồ sơ và thông tin liên hệ của cửa hàng"
          canvaLink="https://www.canva.com"
          youtubeLink="https://www.youtube.com"
        >
          <div className="space-y-8">
            {/* A. Hồ sơ cửa hàng */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">A. Hồ sơ cửa hàng</h2>
              <div className="mb-3">
                <strong className="text-lg">Thao tác cập nhật cửa hàng</strong>
              </div>
              <div className="mb-3 text-muted-foreground">
                <p><strong>Lưu ý:</strong> Khi chỉnh sửa Các trường: Ảnh đại diện, Banner, Tên cửa hàng, Giới thiệu cửa hàng phải gửi yêu cầu chỉnh sửa cho Quản trị viên. Khi quản trị viên phê duyệt thì thông tin với chỉnh sửa. Còn những trường thông tin khác có thể thay đổi theo cá nhân</p>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Bước 1:</strong> Bấm " Tài khoản " &gt; "Cửa hàng của tôi"</p>
                <p><strong>Bước 2:</strong> bấm vào cửa hàng muốn chỉnh sửa</p>
                <p><strong>Bước 3:</strong> Chọn Hồ sơ cửa hàng</p>
                <p><strong>Bước 4:</strong> Bấm cập nhật &gt; cập nhật thông tin &gt; Bấm gửi yêu cầu cập nhật</p>
              </div>

              <div className="mt-4">
                <strong className="text-lg">Thao tác thêm hồ sơ đính kèm</strong>
                <div className="mt-2 space-y-2 text-muted-foreground">
                  <p><strong>Bước 1:</strong> Trong trang hồ sơ của hàng &gt; bấm thêm hồ sơ</p>
                  <p><strong>Bước 2:</strong> Điền thông tin &gt; Bấm lưu</p>
                </div>
              </div>
            </div>

            {/* B. Thông tin liên hệ */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">B. Thông tin liên hệ</h2>
              <div className="mb-3">
                <strong className="text-lg">Cập nhật thông tin liên hệ:</strong>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Bước 1:</strong> Tại trang chi tiết của hàng &gt; Chọn Thông tin liên hệ</p>
                <p><strong>Bước 2:</strong> Cập nhật thông tin &gt; Bấm Cập nhật</p>
              </div>
            </div>
          </div>
        </ModulePage>
      </main>
    </div>
  )
}
