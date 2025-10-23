"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, BookOpen, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

interface NavItem {
  label: string
  icon?: React.ReactNode
  href?: string
  children?: NavItem[]
}

export const navItems: NavItem[] = [
  {
    label: "HƯỚNG DẪN SỬ DỤNG",
    icon: <BookOpen className="w-4 h-4" />,
    href: "/",
  },
  {
    label: "TÀI ỨNG DỤNG",
    children: [
      { label: "Hệ điều hành iOS", href: "/tai-ung-dung/ios" },
      { label: "Hệ điều hành Android", href: "/tai-ung-dung/android" },
    ],
  },
  {
    label: "ĐĂNG KÝ/ĐĂNG NHẬP",
    children: [
      { label: "Đăng ký/đăng nhập", href: "/dang-ky-dang-nhap/dang-ky-dang-nhap" },
      { label: "Quên mật khẩu", href: "/dang-ky-dang-nhap/quen-mat-khau" },
      { label: "Giới thiệu Trang chủ & Tài khoản của tôi", href: "/dang-ky-dang-nhap/gioi-thieu-trang-chu" },
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
      { label: "Đăng ký cửa hàng", href: "/dia-diem/dang-ky-cua-hang-title" },
      { label: "Cập nhật và tổng quan cửa hàng", href: "/dia-diem/cap-nhat-tong-quan" },
      { label: "Sản Phẩm", href: "/dia-diem/them-san-pham" },
      { label: "Tạo Voucher", href: "/dia-diem/tao-voucher" },
      { label: "Tham gia chương trình khuyến mãi", href: "/dia-diem/tham-gia-khuyen-mai" },
    ],
  },
  {
    label: "ĐẶT HÀNG",
    children: [
      { label: "Đăt hàng/Dịch vụ", href: "/dat-hang/dat-hang-dich-vu" },
    ],
  },

  {
    label: "THÔNG TIN TÀI KHOẢN",
    children: [
      { label: "Yêu cầu hỗ trợ", href: "/tai-khoan/tinh-nang-ho-tro" },
    ],
  },
]

function NavItemComponent({ item, level = 0, onNavigate }: { item: NavItem; level?: number; onNavigate?: () => void }) {
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
          className={`w-full flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors hover:bg-sidebar-accent ${
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
          onClick={onNavigate}
          className={`flex items-center gap-2 px-4 py-3 text-sm transition-colors hover:bg-sidebar-accent ${
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
            <NavItemComponent key={child.label} item={child} level={level + 1} onNavigate={onNavigate} />
          ))}
        </div>
      )}
    </div>
  )
}

export function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      {/* Mobile header with hamburger menu */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-sidebar border-b border-sidebar-border px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/Logo.png"
            alt="APEC SPACE Logo"
            width={32}
            height={32}
            className="rounded"
          />
          <h1 className="text-base font-bold text-sidebar-foreground">APEC SPACE</h1>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-sidebar-accent rounded-lg transition-colors">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {isOpen && <div className="fixed inset-0 z-30 bg-black/50" onClick={() => setIsOpen(false)} />}

      <aside
        className={`fixed left-0 top-0 bottom-0 z-40 w-64 bg-sidebar border-r border-sidebar-border overflow-y-auto transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ marginTop: "56px" }}
      >
        <nav className="py-4">
          {navItems.map((item) => (
            <NavItemComponent key={item.label} item={item} onNavigate={() => setIsOpen(false)} />
          ))}
        </nav>
      </aside>
    </>
  )
}
