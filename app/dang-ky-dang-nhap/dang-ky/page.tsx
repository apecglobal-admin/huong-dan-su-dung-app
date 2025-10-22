import { ModulePage } from "@/components/module-page"

export default function DangKyPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <ModulePage
        title="Hướng dẫn Đăng ký"
        description="Tạo tài khoản mới và bắt đầu sử dụng ứng dụng APEC SPACE"
        canvaLink="https://www.canva.com"
        youtubeLink="https://www.youtube.com"
      >
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">BỎ QUA GIỚI THIỆU</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Bước 1: Mở ứng dụng Apec Space</li>
              <li>Bước 2: Lần lượt hiển thị các màn hình giới thiệu</li>
            </ol>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-border text-sm">
                <thead className="bg-muted text-foreground">
                  <tr>
                    <th className="border border-border px-3 py-2 text-left">Tên màn hình</th>
                    <th className="border border-border px-3 py-2 text-left">Thao tác tiếp theo</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Màn hình 1",
                    "Màn hình 2",
                    "Màn hình 3",
                    "Màn hình 4",
                    "Màn hình 5",
                  ].map((screen) => (
                    <tr key={screen}>
                      <td className="border border-border px-3 py-2 text-muted-foreground">{screen}</td>
                      <td className="border border-border px-3 py-2 text-muted-foreground">Bấm "Tiếp tục"</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">ĐĂNG KÝ</h2>
            <ol className="list-decimal list-inside space-y-4 text-muted-foreground">
              <li>
                <span className="font-semibold text-foreground">Bước 1:</span> Tại Trang chủ ứng dụng Apec Space, bấm "Tài khoản"
              </li>
              <li>
                <span className="font-semibold text-foreground">Bước 2:</span> Bấm nút "Đăng ký"
              </li>
              <li className="space-y-2">
                <div>
                  <span className="font-semibold text-foreground">Bước 3:</span> Điền thông tin đăng ký, tick chọn ô đồng ý với điều khoản, sau đó bấm "Đăng ký tài khoản"
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">Trong đó:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Họ và tên: Họ tên đầy đủ của người dùng</li>
                    <li>Giới tính: Lựa chọn theo giới tính của người dùng</li>
                    <li>Số điện thoại: Số điện thoại đang sử dụng</li>
                    <li>Email: Địa chỉ email của người dùng</li>
                    <li>Mật khẩu và Xác nhận mật khẩu: Thiết lập và xác nhận mật khẩu đăng nhập</li>
                    <li>Mã người giới thiệu: Nhập mã của người giới thiệu để hưởng chính sách Affiliate của APEC</li>
                  </ul>
                </div>
              </li>
              <li>
                <span className="font-semibold text-foreground">Bước 4:</span> Có thể quét QR code của người giới thiệu để điền nhanh mã giới thiệu
              </li>
              <li>
                <span className="font-semibold text-foreground">Bước 5:</span> Sau khi đăng ký thành công, hiển thị thông báo "Thành công" và chọn "Đăng nhập"
              </li>
            </ol>
          </div>
        </div>
      </ModulePage>
    </div>
  )
}
