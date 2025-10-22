"use client"

import { Sidebar } from "@/components/sidebar"
import { ModulePage } from "@/components/module-page"

export default function DanhSachDonHangPage() {
  return (
    <div className="flex min-h-screen bg-background">
      
      <main className="flex-1">
        <ModulePage
          title="Danh sách đơn hàng"
          description="Quản lý tất cả các đơn hàng từ khách hàng"
          canvaLink="https://www.canva.com"
          youtubeLink="https://www.youtube.com"
        >
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quản lý đơn hàng:</h3>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>Xem danh sách tất cả đơn hàng</li>
              <li>Lọc đơn hàng theo trạng thái</li>
              <li>Cập nhật trạng thái giao hàng</li>
              <li>In hoặc xuất thông tin đơn hàng</li>
              <li>Quản lý hoàn trả và khiếu nại</li>
            </ul>
          </div>
        </ModulePage>
      </main>
    </div>
  )
}
