import { ModulePage } from "@/components/module-page"

export default function TinhNangHoTroPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <ModulePage
        title="SỬ DỤNG TÍNH NĂNG HỖ TRỢ TRÊN APECSPACE"
        description="Hướng dẫn sử dụng các tính năng hỗ trợ và chăm sóc khách hàng"
        canvaLink="https://www.canva.com"
        youtubeLink="https://www.youtube.com"
      >
        {/* <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">CÁC KÊNH HỖ TRỢ</h2>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Chat trực tiếp với hỗ trợ viên</li>
              <li>Gọi điện thoại hotline</li>
              <li>Gửi email hỗ trợ</li>
              <li>FAQ và hướng dẫn sử dụng</li>
              <li>Forum cộng đồng</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">CÁCH LIÊN HỆ HỖ TRỢ</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Mở ứng dụng APEC SPACE</li>
              <li>Chọn "Tài khoản"</li>
              <li>Chọn "Hỗ trợ"</li>
              <li>Chọn phương thức liên hệ phù hợp</li>
              <li>Mô tả vấn đề chi tiết</li>
              <li>Gửi yêu cầu hỗ trợ</li>
            </ol>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">THỜI GIAN HỖ TRỢ</h2>
            <p className="text-muted-foreground">
              Đội ngũ hỗ trợ của APEC SPACE sẵn sàng phục vụ 24/7 để giải đáp mọi thắc mắc và hỗ trợ kịp thời.
            </p>
          </div>
        </div> */}
      </ModulePage>
    </div>
  )
}