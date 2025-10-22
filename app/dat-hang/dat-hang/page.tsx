import { Sidebar } from "@/components/sidebar"
import { ModulePage } from "@/components/module-page"

export default function DatHangPage() {
  return (
    <div className="flex min-h-screen bg-background">
      
      <ModulePage
        title="Đặt hàng"
        description="Hướng dẫn quy trình đặt hàng trên ứng dụng APEC"
        canvaLink="https://www.canva.com"
        youtubeLink="https://www.youtube.com"
      >
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Đặt hàng</h2>
            <div className="mb-3">
              <strong className="text-lg">Thao tác:</strong>
            </div>
            <div className="mb-3 text-muted-foreground">
              <p><strong>Lưu ý:</strong> Người mua không được phép tự đặt hàng của của hàng do mình làm chủ</p>
            </div>
            <div className="mb-3 text-muted-foreground">
              <p><strong>Giao diện phần địa điểm: Mục khám phá cửa hàng:</strong> Người dùng sẽ định vị trí của mình để hệ thống xác định các cửa hàng có liên kết với APEC sẽ hiển thị trên bản đồ cho người dùng biết</p>
            </div>
            <div className="space-y-2 text-muted-foreground">
              <p><strong>Bước 1:</strong> Tại trang chủ &gt; Chọn 1 sản phẩm muốn đặt</p>
              <p><strong>Bước 2:</strong> Bấm nút Chọn <strong>Ngoài ra, nếu thích sản phẩm đó, người dùng có thể nhấn tym vào mục "Đã bán", trái tym sẽ hiển đỏ. Ứng dụng lưu mục yêu thích của người dùng</strong></p>
              <p><strong>Bước 3:</strong> Chọn Số lượng muốn đặt &gt; bấm nút Thêm vào giỏ hàng</p>
              <p><strong>Bước 4:</strong> Bấm nút giỏ hàng</p>
              <p><strong>Bước 5:</strong> Chọn lịch hẹn vừa thêm</p>
              <p><strong>Bước 6:</strong> Thêm sản phẩm khác hoặc tăng/ giảm số lượng &gt; Bấm xác nhận</p>
            </div>
            <div className="mt-3 text-muted-foreground">
              <p>Sau đó nhà cung cấp sẽ xác nhận lịch hẹn và tiến hành thanh toán</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-foreground">Thanh toán</h3>
            <div className="space-y-2 text-muted-foreground">
              <p><strong>Khi mua hàng trả bằng Tài khoản của tôi &gt;</strong> Khi bấm đặt hàng, tiền sẽ tự động trừ khỏi ví người mua, tự động cộng vào ví người bán hàng</p>
              <p><strong>Khi người dùng đã trả nghiệm dịch vụ xong</strong> Vào Tài khoản &gt; chọn Đơn hàng cho của tôi &gt; Chon tab Đã nhận tiền &gt; bấm Xác nhận hoàn thành</p>
              <p>Sau khi bấm xác nhận, đơn hàng tự động chuyển sang trạng thái Hoàn Thành &gt; Hệ thống sẽ tự động chia Affiliate cho các cấp</p>
            </div>
          </div>
        </div>
      </ModulePage>
    </div>
  )
}
