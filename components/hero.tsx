import { Button } from "@/components/ui/button"
import { Play, FileText } from "lucide-react"

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-balance">Hướng dẫn sử dụng APEC SPACE App</h1>
        <p className="text-xl text-primary-foreground/90 mb-8 text-balance">
          Tìm hiểu cách sử dụng ứng dụng của chúng tôi thông qua các hướng dẫn chi tiết, video hướng dẫn, và tài liệu
          thiết kế.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a href="https://www.canva.com" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <FileText className="w-5 h-5 mr-2" />
              Xem bằng hình ảnh
            </Button>
          </a>

          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <Play className="w-5 h-5 mr-2" />
              Xem bằng video
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
