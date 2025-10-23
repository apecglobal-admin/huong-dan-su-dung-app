import type { NavItem } from "@/components/sidebar"
import { navItems } from "@/components/sidebar"

export interface PageInfo {
  href: string
  label: string
}

export interface NavigationInfo {
  current: PageInfo | null
  previous: PageInfo | null
  next: PageInfo | null
}

export function getAllPages(): PageInfo[] {
  const pages: PageInfo[] = []

  const flattenItems = (items: NavItem[]) => {
    for (const item of items) {
      if (item.href) {
        pages.push({
          href: item.href,
          label: item.label,
        })
      }
      if (item.children) {
        flattenItems(item.children)
      }
    }
  }

  flattenItems(navItems)
  return pages
}

export function getNavigationInfo(pathname: string): NavigationInfo {
  const pages = getAllPages()
  const currentIndex = pages.findIndex((page) => page.href === pathname)

  return {
    current: currentIndex !== -1 ? pages[currentIndex] : null,
    previous: currentIndex > 0 ? pages[currentIndex - 1] : null,
    next: currentIndex !== -1 && currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null,
  }
}
