import { ModulePage } from "@/components/module-page"

export default function DanhGiaPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <ModulePage
        title="Đánh giá"
        description="Hướng dẫn đánh giá sản phẩm sau khi hoàn thành đơn hàng"
        canvaLink="https://www.canva.com"
        youtubeLink="https://www.youtube.com"
      >
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Đánh giá</h2>
            <div className="mb-3">
              <strong className="text-lg">THAO TÁC</strong>
            </div>
            <div className="mb-3 text-muted-foreground">
              <p>Sau khi đơn hàng ở trạng thái Hoàn thành &gt; Khách hàng sẽ được phép đáng giá sản phẩm</p>
            </div>
            <div className="mb-3">
              <strong className="text-lg">Thao tác:</strong>
            </div>
            <div className="space-y-2 text-muted-foreground">
              <p>Vào Tài khoản &gt; chọn Đơn hàng cho của tôi &gt; Chon tab Hoàn thành &gt; bấm Đánh giá</p>
              <p>Khách hàng viết đáng giá và chọn số sao &gt; Bấm gửi đánh giá</p>
            </div>
          </div>
        </div>
      </ModulePage>
    </div>
  )
}