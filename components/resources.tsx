"use client"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Video, FileText, HelpCircle } from "lucide-react"
import { ImageCarouselModal } from "@/components/image-carousel-modal"

const resources = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Tài liệu hình ảnh",
    description: "Đọc các hướng dẫn chi tiết về cách sử dụng từng tính năng của ứng dụng.",
    link: "https://www.canva.com",
    linkText: "Xem tài liệu",
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Tài liệu video",
    description: "Xem các video hướng dẫn từng bước để hiểu rõ hơn về các tính năng.",
    link: "https://www.youtube.com",
    linkText: "Xem video",
  },
  // {
  //   icon: <FileText className="w-8 h-8" />,
  //   title: "Thiết kế Canva",
  //   description: "Truy cập các mẫu thiết kế và tài liệu trực quan trên Canva.",
  //   link: "https://www.canva.com",
  //   linkText: "Mở Canva",
  // },
  {
    icon: <HelpCircle className="w-8 h-8" />,
    title: "Hỗ trợ",
    description: "Liên hệ với đội hỗ trợ của chúng tôi nếu bạn cần giúp đỡ.",
    link: "#",
    linkText: "Liên hệ",
  },
]

export function Resources() {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false)

  return (
    <section className="py-20 px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-foreground">Tài nguyên hữu ích</h2>
        <p className="text-lg text-muted-foreground mb-12">Chọn cách học tập phù hợp nhất với bạn</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow border border-border">
              <div className="text-primary mb-4">{resource.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{resource.title}</h3>
              <p className="text-sm text-muted-foreground mb-6">{resource.description}</p>
              {index === 0 ? (
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent"
                  onClick={() => setIsCarouselOpen(true)}
                >
                  {resource.linkText}
                </Button>
              ) : (
                <a href={resource.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    {resource.linkText}
                  </Button>
                </a>
              )}
            </Card>
          ))}
        </div>
      </div>

      <ImageCarouselModal open={isCarouselOpen} onOpenChange={setIsCarouselOpen} />
    </section>
  )
}
