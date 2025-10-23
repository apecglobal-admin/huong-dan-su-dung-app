import { ModulePage } from "@/components/module-page"

export default function ThamGiaKhuyenMaiPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <ModulePage
        title="THAM GIA CHƯƠNG TRÌNH KHUYẾN MÃI"
        description="Hướng dẫn tham gia các chương trình khuyến mãi trên APEC SPACE"
        canvaLink="https://www.canva.com"
        youtubeLink="https://www.youtube.com"
      >
        {/* <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">CHƯƠNG TRÌNH KHUYẾN MÃI</h2>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Khuyến mãi theo mùa</li>
              <li>Flash sale hàng ngày</li>
              <li>Ưu đãi cho khách hàng thân thiết</li>
              <li>Chương trình cộng tác viên</li>
              <li>Khuyến mãi đặc biệt</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">CÁCH THAM GIA</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Đăng ký tài khoản cửa hàng</li>
              <li>Hoàn thiện hồ sơ kinh doanh</li>
              <li>Đăng ký tham gia chương trình</li>
              <li>Tuân thủ quy định của chương trình</li>
              <li>Theo dõi hiệu quả và báo cáo</li>
            </ol>
          </div>
        </div> */}
      </ModulePage>
    </div>
  )
}