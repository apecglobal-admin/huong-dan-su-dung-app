"use client"

import { Sidebar } from "@/components/sidebar"
import { ModulePage } from "@/components/module-page"

export default function DanhSachDatTruocPage() {
  return (
    <div className="flex min-h-screen bg-background">
      
      <main className="flex-1">
        <ModulePage
          title="XÁC NHẬN LỊCH ĐẶT"
          description="Hướng dẫn xác nhận lịch đặt trước từ khách hàng"
          canvaLink="https://www.canva.com"
          youtubeLink="https://www.youtube.com"
        >
          <div className="space-y-8">
            {/* Cách 1 */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Cách 1:</h2>
              <div className="mb-3">
                <strong className="text-lg">THAO TÁC</strong>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Bước 1:</strong> Bấm " Tài khoản " &gt; "Cửa hàng của tôi"</p>
                <p><strong>Bước 2:</strong> Bấm chọn cửa hàng</p>
                <p><strong>Bước 3:</strong> Chọn " Danh sách đặt trước"</p>
                <p><strong>Bước 4:</strong> Bấm nút " Chi tiết"</p>
                <p><strong>Bước 5:</strong> Bấm nút " Xác nhận đặt trước"</p>
              </div>
            </div>

            {/* Cách 2 */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Cách 2:</h2>
              <div className="mb-3">
                <strong className="text-lg">THAO TÁC</strong>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Bước 1:</strong> Bấm biểu tượng "Chuông Thông Báo"</p>
                <p><strong>Bước 2:</strong> Bấm chọn thông báo lịch đặt</p>
                <p><strong>Bước 3:</strong> Bấm nút " Xác nhận đặt trước"</p>
              </div>
              <div className="mt-3 text-muted-foreground">
                <p><strong>=&gt; Nhớ</strong></p>
              </div>
            </div>
          </div>
        </ModulePage>
      </main>
    </div>
  )
}
