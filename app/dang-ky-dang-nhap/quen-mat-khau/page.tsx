import { ModulePage } from "@/components/module-page"

export default function QuenMatKhauPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <ModulePage
        title="QUÊN MẬT KHẨU"
        description="Hướng dẫn khôi phục mật khẩu tài khoản APEC SPACE"
        canvaLink="https://www.canva.com"
        youtubeLink="https://www.youtube.com"
      >
        {/* <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">KHÔI PHỤC MẬT KHẨU</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Mở ứng dụng APEC SPACE</li>
              <li>Chọn "Tài khoản" ở góc phải màn hình</li>
              <li>Chọn "Đăng nhập"</li>
              <li>Chọn "Quên mật khẩu"</li>
              <li>Nhập số điện thoại đã đăng ký</li>
              <li>Nhấn "Gửi mã OTP"</li>
              <li>Nhập mã OTP nhận được</li>
              <li>Đặt mật khẩu mới</li>
              <li>Nhấn "Xác nhận"</li>
            </ol>
          </div>
        </div> */}
      </ModulePage>
    </div>
  )
}