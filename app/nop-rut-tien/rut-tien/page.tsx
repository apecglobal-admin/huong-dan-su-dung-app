import { ModulePage } from "@/components/module-page"

export default function RutTienPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <ModulePage
        title="Hướng dẫn Rút tiền"
        description="Rút tiền từ tài khoản APEC SPACE của bạn"
        canvaLink="https://www.canva.com"
        youtubeLink="https://www.youtube.com"
      >
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">THAO TÁC</h2>
            <p className="text-muted-foreground">Sau khi đăng nhập thành công:</p>
            <ol className="list-decimal list-inside space-y-4 text-muted-foreground">
              <li>
                <span className="font-semibold text-foreground">Bước 1:</span> Chọn "Rút tiền" để vào màn hình rút tiền
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Cách 1: Chọn "Rút tiền" ngoài trang chủ</li>
                  <li>Cách 2: Bấm vào biểu tượng Apec &gt; Chọn biểu tượng Rút tiền</li>
                  <li>Cách 3: Chọn Tài khoản của tôi &gt; Chọn Lệnh rút</li>
                </ul>
              </li>
              <li className="space-y-3">
                <div>
                  <span className="font-semibold text-foreground">Bước 2:</span> Thực hiện rút tiền
                  <p className="text-destructive mt-2">Lưu ý: Số tiền rút phải nằm trong khoản được rút (cấu hình số tiền rút tối thiểu, tối đa do Ban quản lý quy định) và nhỏ hơn số dư hiện có trong ví.</p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">Trường hợp 1: Rút bằng Tiền mặt</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Chọn Tài khoản của tôi</li>
                    <li>Chọn số tiền rút</li>
                    <li>Chọn hình thức "Tiền mặt"</li>
                    <li>Bấm "Rút"</li>
                    <li>Kiểm tra chi tiết giao dịch</li>
                    <li>Bấm Xác nhận</li>
                    <li>Nhận thông báo Thành công</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">Trường hợp 2: Rút về Tài khoản ngân hàng</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Chọn ví rút tiền</li>
                    <li>Chọn số tiền rút</li>
                    <li>Chọn hình thức "Tài khoản ngân hàng"</li>
                    <li>Chọn tài khoản ngân hàng nhận tiền</li>
                    <li>Bấm "Rút"</li>
                    <li>Kiểm tra chi tiết giao dịch</li>
                    <li>Bấm Xác nhận</li>
                    <li>Nhận thông báo Thành công</li>
                  </ul>
                </div>
                <div className="space-y-1">
                  <p className="text-primary">Phiếu yêu cầu rút tiền sẽ được gửi tới Ban quản lý với trạng thái Chờ duyệt.</p>
                  <p className="text-primary">Chờ Ban quản lý phê duyệt để hoàn tất việc rút tiền.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </ModulePage>
    </div>
  )
}
