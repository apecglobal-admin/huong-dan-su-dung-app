import { ModulePage } from "@/components/module-page"

export default function VideoHuongDanPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <ModulePage
        title="Video hướng dẫn đặt hàng"
        description="Video hướng dẫn chi tiết quy trình đặt hàng trên ứng dụng APEC"
        canvaLink="https://www.canva.com"
        youtubeLink="https://www.youtube.com"
      >
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Video hướng dẫn đặt hàng</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Video hướng dẫn chi tiết quy trình đặt hàng sẽ được cập nhật tại đây.</p>
              <p>Xem video để hiểu rõ hơn về cách đặt hàng trên ứng dụng APEC SPACE.</p>
            </div>
          </div>
        </div>
      </ModulePage>
    </div>
  )
}