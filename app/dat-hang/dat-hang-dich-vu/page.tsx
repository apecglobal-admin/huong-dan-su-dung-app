import { ModulePage } from "@/components/module-page"

export default function DatHangDichVuPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <ModulePage
        title="ĐẶT HÀNG/DỊCH VỤ"
        description="Hướng dẫn đặt hàng và sử dụng các dịch vụ trên APEC SPACE"
        canvaLink="https://www.canva.com"
        youtubeLink="https://www.youtube.com"
      >
        {/* <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">CÁCH ĐẶT HÀNG</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Chọn cửa hàng mong muốn</li>
              <li>Xem menu và chọn sản phẩm</li>
              <li>Điều chỉnh số lượng và tùy chọn</li>
              <li>Kiểm tra lại đơn hàng</li>
              <li>Chọn phương thức thanh toán</li>
              <li>Xác nhận đặt hàng</li>
            </ol>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">CÁC DỊCH VỤ HỖ TRỢ</h2>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Giao hàng tận nơi</li>
              <li>Đặt bàn trước</li>
              <li>Thanh toán online</li>
              <li>Đánh giá và phản hồi</li>
              <li>Hỗ trợ khách hàng 24/7</li>
            </ul>
          </div>
        </div> */}
      </ModulePage>
    </div>
  )
}