import { ModulePage } from "@/components/module-page"

export default function TaiUngDungPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <ModulePage
        title="Tải ứng dụng Apec Space"
        description="Hướng dẫn tải ứng dụng trên iOS và Android"
        canvaLink="https://www.canva.com"
        youtubeLink="https://www.youtube.com"
      >
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">HỆ ĐIỀU HÀNH IOS (APPLE)</h2>
            <p className="text-muted-foreground">Phiên bản hoạt động: Tương thích với thiết bị chạy iOS 12.4 trở lên.</p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Mở cửa hàng ứng dụng App Store của Apple.</li>
              <li>Tại thanh tìm kiếm, nhập "ApecSpace".</li>
              <li>Trong danh sách kết quả, chọn ứng dụng đúng tên và logo Apec Space để tải về và cài đặt.</li>
            </ol>
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">HỆ ĐIỀU HÀNH ANDROID</h2>
            <p className="text-muted-foreground">Tương thích với các thiết bị Android (Samsung, Xiaomi, Oppo, ASUS, Vivo, Realme, Nokia, v.v.) chạy Android 5.0 trở lên.</p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Mở cửa hàng ứng dụng CH Play (Google Play Store).</li>
              <li>Tại thanh tìm kiếm, nhập "ApecSpace".</li>
              <li>Trong danh sách kết quả, chọn ứng dụng đúng tên và logo Apec Space để tải về và cài đặt.</li>
            </ol>
          </div>
        </div>
      </ModulePage>
    </div>
  )
}
