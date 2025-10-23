import { Sidebar } from "@/components/sidebar"
import { ModulePage } from "@/components/module-page"

export default function AndroidPage() {
  return (
    <div className="flex min-h-screen bg-background">
      
      <ModulePage
        title="Hệ điều hành Android"
        description="Hướng dẫn chi tiết cách cài đặt và sử dụng ứng dụng trên thiết bị Android"
        canvaLink="https://www.canva.com"
        youtubeLink="https://www.youtube.com"
      >
        {/* <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-3 text-foreground">Các bước cài đặt</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Mở Google Play Store trên thiết bị Android của bạn</li>
              <li>Tìm kiếm "APEC SPACE"</li>
              <li>Nhấn nút "Cài đặt" để cài đặt ứng dụng</li>
              <li>Chờ quá trình cài đặt hoàn tất</li>
              <li>Mở ứng dụng và đăng nhập tài khoản của bạn</li>
            </ol>
          </div>
        </div> */}
      </ModulePage>
    </div>
  )
}
