"use client"

import { Sidebar } from "@/components/sidebar"
import { ModulePage } from "@/components/module-page"

export default function ThongKeBaoCaoPage() {
  return (
    <div className="flex min-h-screen bg-background">
      
      <main className="flex-1">
        <ModulePage
          title="Thông kế & báo cáo"
          description="Xem thống kê và báo cáo chi tiết về hoạt động cửa hàng"
          canvaLink="https://www.canva.com"
          youtubeLink="https://www.youtube.com"
        >
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Thống kê và báo cáo:</h3>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>Xem thống kê doanh số bán hàng</li>
              <li>Phân tích lượt truy cập cửa hàng</li>
              <li>Báo cáo tỷ lệ chuyển đổi</li>
              <li>Xem chi tiết khách hàng</li>
              <li>Xuất báo cáo định kỳ</li>
            </ul>
          </div>
        </ModulePage>
      </main>
    </div>
  )
}
