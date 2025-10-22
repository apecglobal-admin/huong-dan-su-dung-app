"use client"

import { Sidebar } from "@/components/sidebar"
import { ModulePage } from "@/components/module-page"

export default function KhuyenMaiPage() {
  return (
    <div className="flex min-h-screen bg-background">
      
      <main className="flex-1">
        <ModulePage
          title="Chương trình khuyến mãi tham gia"
          description="Hướng dẫn tham gia các chương trình khuyến mãi"
          canvaLink="https://www.canva.com"
          youtubeLink="https://www.youtube.com"
        >
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Tham gia chương trình khuyến mãi:</h3>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>Xem danh sách các chương trình khuyến mãi hiện có</li>
              <li>Đọc chi tiết điều kiện tham gia</li>
              <li>Đăng ký tham gia chương trình</li>
              <li>Quản lý các chương trình đã tham gia</li>
              <li>Theo dõi kết quả và hiệu quả khuyến mãi</li>
            </ul>
          </div>
        </ModulePage>
      </main>
    </div>
  )
}
