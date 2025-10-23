import { ModulePage } from "@/components/module-page"

export default function TaoVoucherPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <ModulePage
        title="TẠO VOUCHER"
        description="Hướng dẫn tạo và quản lý voucher khuyến mãi"
        canvaLink="https://www.canva.com"
        youtubeLink="https://www.youtube.com"
      >
        {/* <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">LOẠI VOUCHER</h2>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Voucher giảm giá theo phần trăm</li>
              <li>Voucher giảm giá cố định</li>
              <li>Voucher miễn phí vận chuyển</li>
              <li>Voucher tặng kèm sản phẩm</li>
              <li>Voucher cho đơn hàng đầu tiên</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">TẠO VOUCHER MỚI</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Truy cập trang quản lý voucher</li>
              <li>Chọn "Tạo voucher mới"</li>
              <li>Điền thông tin voucher</li>
              <li>Thiết lập điều kiện áp dụng</li>
              <li>Chọn thời gian hiệu lực</li>
              <li>Xuất bản voucher</li>
            </ol>
          </div>
        </div> */}
      </ModulePage>
    </div>
  )
}