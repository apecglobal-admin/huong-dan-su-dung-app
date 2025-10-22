import { ModulePage } from "@/components/module-page"

export default function AffiliatePage() {
  return (
    <div className="flex min-h-screen bg-background">
      <ModulePage
        title="Quản lý Affiliate (Mạng lưới của tôi)"
        description="Hướng dẫn quản lý hệ thống affiliate và mạng lưới của bạn"
        canvaLink="https://www.canva.com"
        youtubeLink="https://www.youtube.com"
      >
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Quản lý Affiliate (Mạng lưới của tôi)</h2>
            <div className="mb-3">
              <strong className="text-lg">Thao tác:</strong>
            </div>
            <div className="space-y-2 text-muted-foreground">
              <p>Vào Tab "Hồ sơ" &gt; Bấm vào "Mạng lưới của tôi" Hiển thị hệ thống Affiliate</p>
              <p>Tại đây, Hiển thị hệ thống Affiliate</p>
              <p>Hiển thị số lượng Affiliate cá nhân và cấp dưới</p>
              <p>Bấm vào tên Affiliate cấp dưới &gt; Hiển thị Affiliate của cấp dưới</p>
            </div>
          </div>
        </div>
      </ModulePage>
    </div>
  )
}