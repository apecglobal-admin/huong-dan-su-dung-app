"use client"

import { Sidebar } from "@/components/sidebar"
import { ModulePage } from "@/components/module-page"

export default function BannerConfigPage() {
  return (
    <div className="flex min-h-screen bg-background">
      
      <main className="flex-1">
        <ModulePage
          title="Giao diện cấu hình banner - ngành hàng"
          description="Cấu hình banner và danh mục ngành hàng cho cửa hàng"
          canvaLink="https://www.canva.com"
          youtubeLink="https://www.youtube.com"
        >
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Cấu hình banner và ngành hàng:</h3>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>Tải lên hình ảnh banner cho cửa hàng</li>
              <li>Chọn ngành hàng chính của cửa hàng</li>
              <li>Sắp xếp thứ tự hiển thị banner</li>
              <li>Đặt liên kết cho từng banner</li>
              <li>Xem trước giao diện cửa hàng</li>
            </ul>
          </div>
        </ModulePage>
      </main>
    </div>
  )
}
