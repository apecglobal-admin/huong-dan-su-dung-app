"use client"

import type React from "react"

import Link from "next/link"
import { ChevronDown, BookOpen } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

interface NavItem {
  label: string
  icon?: React.ReactNode
  href?: string
  children?: NavItem[]
}

const navItems: NavItem[] = [
  {
    label: "APEC SPACE SỬ DỤNG APP",
    icon: <BookOpen className="w-4 h-4" />,
    href: "/",
  },
  {
    label: "TÀI ỨNG DỤNG",
    children: [
      { label: "Hệ điều hành iOS (Apple)", href: "/tai-ung-dung/ios" },
      { label: "Hệ điều hành Android", href: "/tai-ung-dung/android" },
    ],
  },
  {
    label: "ĐĂNG KÝ/ĐĂNG NHẬP",
    children: [
      { label: "Đăng ký", href: "/dang-ky-dang-nhap/dang-ky" },
      { label: "Đăng nhập", href: "/dang-ky-dang-nhap/dang-nhap" },
    ],
  },
  {
    label: "NỘP/RÚT TIỀN",
    children: [
      { label: "Nộp tiền", href: "/nop-rut-tien/nop-tien" },
      { label: "Rút tiền", href: "/nop-rut-tien/rut-tien" },
    ],
  },
  {
    label: "ĐỊA ĐIỂM",
    children: [
      { label: "Đăng ký của hàng (Địa điểm mua sắm)", href: "/dia-diem/dang-ky-cua-hang" },
      { label: "Quản lý sản phẩm", href: "/dia-diem/quan-ly-san-pham" },
      { label: "Cập nhật của hàng", href: "/dia-diem/cap-nhat-cua-hang" },
      { label: "Chương trình khuyến mãi tham gia", href: "/dia-diem/khuyen-mai" },
      { label: "Thông kế & báo cáo", href: "/dia-diem/thong-ke-bao-cao" },
      { label: "Danh sách đặt trước", href: "/dia-diem/danh-sach-dat-truoc" },
      { label: "Danh sách đơn hàng", href: "/dia-diem/danh-sach-don-hang" },
      { label: "Giao diện cấu hình banner - ngành hàng", href: "/dia-diem/banner-config" },
    ],
  },
  {
    label: "ĐẶT HÀNG",
    children: [
      { label: "Video hướng dẫn đặt hàng", href: "/dat-hang/video-huong-dan" },
      { label: "Đặt hàng", href: "/dat-hang/dat-hang" },
      { label: "Đánh giá", href: "/dat-hang/danh-gia" },
      { label: "Quét QRcode thanh toán", href: "/dat-hang/qr-code" },
    ],
  },
  
  {
    label: "THÔNG TIN TÀI KHOẢN",
    children: [
      { label: "Quản lý thông tin tài khoản", href: "/tai-khoan/quan-ly-thong-tin" },
      { label: "Quản lý Affiliate (Mạng lưới của tôi)", href: "/tai-khoan/affiliate" },
      { label: "Quản lý QRcode", href: "/tai-khoan/qr-code" },
      { label: "Yêu cầu hỗ trợ", href: "/tai-khoan/ho-tro" },
    ],
  },
]

function NavItemComponent({ item, level = 0 }: { item: NavItem; level?: number }) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const hasChildren = item.children && item.children.length > 0

  const isActive = item.href === pathname || item.children?.some((child) => child.href === pathname)

  useEffect(() => {
    if (hasChildren && item.children?.some((child) => child.href === pathname)) {
      setIsOpen(true)
    }
  }, [pathname, hasChildren, item.children])

  return (
    <div key={item.label}>
      {hasChildren ? (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors hover:bg-sidebar-accent ${
            isActive ? "bg-sidebar-accent text-primary" : "text-sidebar-foreground"
          } ${level === 0 ? "" : "text-sidebar-foreground/80"}`}
        >
          {item.icon}
          <span className="flex-1 text-left">{item.label}</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>
      ) : (
        <Link
          href={item.href || "#"}
          className={`flex items-center gap-2 px-4 py-2 text-sm transition-colors hover:bg-sidebar-accent ${
            pathname === item.href ? "bg-sidebar-accent text-primary font-semibold" : "text-sidebar-foreground"
          } ${level === 0 ? "font-medium" : "pl-8 text-sidebar-foreground/80"}`}
        >
          {item.icon}
          <span>{item.label}</span>
        </Link>
      )}

      {hasChildren && isOpen && (
        <div className="bg-sidebar/50">
          {item.children?.map((child) => (
            <NavItemComponent key={child.label} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

export function Sidebar() {
  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border overflow-y-auto">
      <div className="p-6 border-b border-sidebar-border">
        <h1 className="text-lg font-bold text-sidebar-foreground">APEC SPACE</h1>
        <p className="text-xs text-sidebar-foreground/60 mt-1">Hướng dẫn sử dụng</p>
      </div>

      <nav className="py-4">
        {navItems.map((item) => (
          <NavItemComponent key={item.label} item={item} />
        ))}
      </nav>
    </aside>
  )
}
