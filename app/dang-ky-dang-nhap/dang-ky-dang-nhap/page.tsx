import { ModulePage } from "@/components/module-page"

export default function DangKyDangNhapPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <ModulePage
        title="ĐĂNG KÝ/ĐĂNG NHẬP"
        description="Hướng dẫn đăng ký và đăng nhập tài khoản APEC SPACE"
        canvaLink="https://www.canva.com"
        youtubeLink="https://www.youtube.com"
      >
        {/* <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">ĐĂNG KÝ TÀI KHOẢN</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Mở ứng dụng APEC SPACE</li>
              <li>Chọn "Tài khoản" ở góc phải màn hình</li>
              <li>Chọn "Đăng ký"</li>
              <li>Điền đầy đủ thông tin cá nhân</li>
              <li>Đọc và đồng ý với điều khoản sử dụng</li>
              <li>Nhấn "Đăng ký tài khoản"</li>
            </ol>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">ĐĂNG NHẬP TÀI KHOẢN</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Mở ứng dụng APEC SPACE</li>
              <li>Chọn "Tài khoản" ở góc phải màn hình</li>
              <li>Chọn "Đăng nhập"</li>
              <li>Nhập số điện thoại và mật khẩu</li>
              <li>Nhấn "Đăng nhập"</li>
            </ol>
          </div>
        </div> */}
      </ModulePage>
    </div>
  )
}