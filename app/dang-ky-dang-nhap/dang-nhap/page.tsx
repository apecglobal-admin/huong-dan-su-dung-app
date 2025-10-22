import { ModulePage } from "@/components/module-page"

export default function DangNhapPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <ModulePage
        title="Hướng dẫn Đăng nhập"
        description="Đăng nhập vào tài khoản APEC SPACE của bạn"
        canvaLink="https://www.canva.com"
        youtubeLink="https://www.youtube.com"
      >
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">THAO TÁC</h2>
            <p className="text-muted-foreground">Sau khi đăng ký tài khoản thành công, thực hiện đăng nhập để sử dụng hệ thống.</p>
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
              <li>
                Từ Trang chủ ứng dụng Apec Space, bấm "Tài khoản"
              </li>
              <li>
                Chọn nút "Đăng nhập" (hoặc bấm "Đăng nhập" ngay sau khi hệ thống thông báo "Thành công" ở bước đăng ký)
              </li>
              <li>
                Nhập đúng số điện thoại hoặc email đã đăng ký và mật khẩu tương ứng
              </li>
              <li>
                Bấm "Đăng nhập" để truy cập tài khoản
              </li>
            </ol>
            <div className="space-y-1">
              <p className="text-primary">Sau khi đăng nhập, màn hình Trang chủ hiển thị đầy đủ tính năng để thao tác.</p>
              <p className="text-primary">Ứng dụng tích hợp chat-box AI, bấm biểu tượng robot để đặt câu hỏi và được hỗ trợ.</p>
            </div>
          </div>
        </div>
      </ModulePage>
    </div>
  )
}
