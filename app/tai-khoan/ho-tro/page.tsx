import { ModulePage } from "@/components/module-page"

export default function HoTroPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <ModulePage
        title="Yêu cầu hỗ trợ"
        description="Hướng dẫn tạo và theo dõi yêu cầu hỗ trợ"
        canvaLink="https://www.canva.com"
        youtubeLink="https://www.youtube.com"
      >
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Yêu cầu hỗ trợ</h2>
            <div className="mb-3">
              <strong className="text-lg">Thao tác: Tạo yêu cầu hỗ trợ</strong>
            </div>
            <div className="space-y-2 text-muted-foreground">
              <p><strong>Bước 1:</strong> Vào tab Tài khoản &gt; Bấm Yêu cầu hỗ trợ</p>
              <p><strong>Bước 2:</strong> Hiển thị danh sách những yêu cầu hỗ trợ đã gửi &gt; Bấm nút "Tạo yêu cầu"</p>
              <p><strong>Bước 3:</strong> Điền thông tin &gt; Bấm "Gửi yêu cầu"</p>
              <p>Sau khi tạo yêu cầu hỗ trợ thành công &gt; Đợi Ban quản lý xử lý và hoàn thành</p>
            </div>
          </div>
        </div>
      </ModulePage>
    </div>
  )
}