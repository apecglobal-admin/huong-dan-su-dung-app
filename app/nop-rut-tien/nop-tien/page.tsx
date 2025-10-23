import { ModulePage } from "@/components/module-page"

export default function NopTienPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <ModulePage
        title="Hướng dẫn Nộp tiền"
        description="Nạp tiền vào tài khoản APEC SPACE của bạn"
        canvaLink="https://www.canva.com"
        youtubeLink="https://www.youtube.com"
      >
        {/* <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">THAO TÁC</h2>
            <p className="text-muted-foreground">Sau khi đăng nhập thành công:</p>
            <ol className="list-decimal list-inside space-y-4 text-muted-foreground">
              <li>
                <span className="font-semibold text-foreground">Bước 1:</span> Chọn "Nộp tiền" để vào màn hình nộp tiền
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Cách 1: Chọn "Nộp tiền" ngoài trang chủ</li>
                  <li>Cách 2: Bấm vào biểu tượng Apec &gt; Chọn biểu tượng Nộp tiền</li>
                  <li>Cách 3: Chọn Tài khoản của tôi &gt; Chọn Lệnh nộp</li>
                </ul>
              </li>
              <li className="space-y-3">
                <div>
                  <span className="font-semibold text-foreground">Bước 2:</span> Thực hiện nộp tiền
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">Trường hợp 1: Nộp bằng Tiền mặt</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Chọn Tài khoản của tôi</li>
                    <li>Chọn số tiền nộp</li>
                    <li>Chọn hình thức "Tiền mặt"</li>
                    <li>Bấm "Nộp"</li>
                    <li>Kiểm tra chi tiết giao dịch</li>
                    <li>Bấm Xác nhận</li>
                    <li>Nhận thông báo Thành công</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">Trường hợp 2: Nộp bằng Chuyển khoản đợi duyệt</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Chọn ví nộp tiền</li>
                    <li>Chọn số tiền nộp</li>
                    <li>Chọn hình thức "Chuyển khoản đợi duyệt"</li>
                    <li>Bấm "Nộp tiền"</li>
                    <li>Kiểm tra chi tiết giao dịch</li>
                    <li>Bấm Xác nhận</li>
                    <li>Xác nhận phiếu nộp thành công</li>
                    <li>Đính kèm hình ảnh thanh toán</li>
                    <li>Bấm Xác nhận hoàn tất</li>
                  </ul>
                  <p className="text-destructive">Lưu ý: Không có đính kèm minh chứng chuyển khoản thì sẽ KHÔNG được bấm Xác nhận.</p>
                </div>
                <div className="space-y-1">
                  <p className="text-primary">Phiếu yêu cầu nộp tiền sẽ được gửi tới Ban quản lý với trạng thái Chờ duyệt.</p>
                  <p className="text-primary">Chờ Ban quản lý phê duyệt để tiền được cộng vào ví vừa nộp.</p>
                </div>
              </li>
            </ol>
          </div>
        </div> */}
      </ModulePage>
    </div>
  )
}
