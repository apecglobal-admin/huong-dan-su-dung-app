"use client";
import Image from "next/image";
import Link from "next/link";
import { Apple, Play } from "lucide-react";

// Drop this file as app/page.tsx (App Router) or pages/index.tsx (Pages Router).
// Put 1.jpg, 2.jpg, 3.jpg, 4.jpg into /public. Update hrefs below.
export default function Banner() {
  return (
    <main className="min-h-screen bg-[#f6f3f2]">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT: Text + Actions */}
          <div className="max-w-xl">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-white/80 px-4 py-2 text-sm font-semibold text-red-600 shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                Hướng dẫn sử dụng
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl max-[520px]:text-3xl max-[430px]:text-2xl max-[360px]:text-xl max-[320px]:text-lg">
                  NỀN TẢNG SIÊU ỨNG DỤNG
                </h1>
                <p className="text-lg leading-relaxed text-neutral-600 sm:text-xl max-[520px]:text-base max-[430px]:text-sm max-[360px]:text-xs max-[320px]:text-[11px]">
                  Khai thác toàn bộ hệ sinh thái ApecSpace với hướng dẫn trực quan, chi tiết cho từng nghiệp vụ và phòng ban.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-0 sm:overflow-hidden sm:rounded-[40px] sm:border sm:border-red-500/30 sm:bg-white sm:shadow-[0_32px_48px_-24px_rgba(244,63,94,0.35)] sm:[&>a]:flex-1 sm:[&>a]:rounded-none sm:[&>a]:border-0 sm:[&>a]:bg-transparent sm:[&>a]:px-8 sm:[&>a]:py-5 sm:[&>a]:shadow-none sm:[&>a]:hover:-translate-y-0 sm:[&>a]:hover:bg-red-50/60 sm:[&>a]:hover:text-red-700 sm:[&>a]:active:scale-100 sm:[&>a:not(:last-child)]:border-r sm:[&>a:not(:last-child)]:border-red-500/20 sm:[&>a]:gap-4 sm:[&>a]:justify-center">
                <ActionButton
                  href="https://apps.apple.com/vn/app/apec-space/id6743482188?l=vi"
                  icon={<Image src="/apple-app-store.svg" alt="App Store" width={28} height={28} className="h-7 w-7" />}
                  label={<>
                    <span className="text-sm leading-none max-[405px]:text-xs max-[355px]:text-[11px] max-[340px]:hidden">Tải ứng dụng trên</span>
                    <span className="text-lg font-semibold leading-none max-[405px]:text-sm max-[355px]:text-xs max-[320px]:text-[10px]"> APP STORE</span>
                  </>}
                />
                <ActionButton
                  href="https://play.google.com/store/apps/details?id=vn.com.neotech.apecspace"
                  icon={<Image src="/chplay.png" alt="CH Play" width={28} height={28} className="h-7 w-7 object-contain" />}
                  label={<>
                    <span className="text-sm leading-none max-[405px]:text-xs max-[355px]:text-[11px] max-[340px]:hidden">Tải ứng dụng trên</span>
                    <span className="text-lg font-semibold leading-none max-[405px]:text-sm max-[355px]:text-xs max-[320px]:text-[10px]"> GOOGLE PLAY</span>
                  </>}
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Stacked/angled images */}
          <div className="relative mx-auto h-[540px] w-full max-w-[560px] max-[900px]:h-[520px] max-[900px]:max-w-[520px] max-[760px]:h-[500px] max-[760px]:max-w-[460px] max-[660px]:h-[460px] max-[660px]:max-w-[380px] max-[520px]:h-[420px] max-[520px]:max-w-[320px] max-[420px]:h-[380px] max-[420px]:max-w-[280px] max-[360px]:h-[340px] max-[360px]:max-w-[240px] max-[320px]:h-[310px] max-[320px]:max-w-[220px] max-[300px]:h-[290px] max-[300px]:max-w-[200px]">
            {/* soft glow */}
            <div className="absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-tr from-red-200/50 via-transparent to-red-300/30 blur-2xl" />

            <PhoneCard
              src="/Screenshot/4.jpg"
              alt="ApecSpace screen 1"
              className="left-3 top-16 rotate-[-10deg] max-[900px]:left-2 max-[900px]:top-14 max-[760px]:left-1 max-[760px]:top-12 max-[660px]:left-0 max-[660px]:top-12 max-[520px]:left-0 max-[520px]:top-10 max-[420px]:left-0 max-[420px]:top-8 max-[360px]:left-1 max-[360px]:top-6 max-[320px]:left-0 max-[320px]:top-5 max-[300px]:left-0 max-[300px]:top-4"
            />
            <PhoneCard
              src="/Screenshot/3.jpg"
              alt="ApecSpace screen 2"
              className="left-24 top-6 rotate-[-3deg] max-[900px]:left-20 max-[900px]:top-5 max-[760px]:left-14 max-[760px]:top-4 max-[660px]:left-8 max-[660px]:top-4 max-[520px]:left-6 max-[520px]:top-2 max-[420px]:left-4 max-[420px]:top-2 max-[360px]:left-3 max-[360px]:top-1 max-[320px]:left-2 max-[320px]:top-1 max-[300px]:left-2 max-[300px]:top-0"
            />
            <PhoneCard
              src="/Screenshot/2.jpg"
              alt="ApecSpace screen 3"
              className="right-24 top-10 rotate-[6deg] max-[900px]:right-20 max-[900px]:top-9 max-[760px]:right-14 max-[760px]:top-8 max-[660px]:right-8 max-[660px]:top-8 max-[520px]:right-6 max-[520px]:top-6 max-[420px]:right-4 max-[420px]:top-4 max-[360px]:right-3 max-[360px]:top-3 max-[320px]:right-2 max-[320px]:top-3 max-[300px]:right-2 max-[300px]:top-2"
            />
            <PhoneCard
              src="/Screenshot/1.jpg"
              alt="ApecSpace screen 4"
              className="right-3 top-24 rotate-[14deg] max-[900px]:right-2 max-[900px]:top-20 max-[760px]:right-1 max-[760px]:top-16 max-[660px]:right-2 max-[660px]:top-16 max-[520px]:right-1 max-[520px]:top-12 max-[420px]:right-1 max-[420px]:top-10 max-[360px]:right-1 max-[360px]:top-8 max-[320px]:right-1 max-[320px]:top-8 max-[300px]:right-1 max-[300px]:top-6"
            />
          </div>
        </div>
      </section>

      {/* Styles for heartbeat + subtle hover tilt */}
      <style jsx global>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          10% { transform: scale(1.03); }
          20% { transform: scale(0.98); }
          30% { transform: scale(1.06); }
          40% { transform: scale(0.99); }
          50% { transform: scale(1.02); }
        }
        .animate-heartbeat {
          animation: heartbeat 1.6s ease-in-out infinite;
          transform-origin: center;
        }
        .tilt:hover { transform: translateY(-2px) rotate(var(--rot, 0deg)); }
      `}</style>
    </main>
  );
}

function ActionButton({ href, label, icon }: { href: string; label: React.ReactNode; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group animate-heartbeat inline-flex min-h-[68px] w-full items-center gap-4 rounded-3xl border border-red-500/20 bg-white/80 px-6 py-4 text-left text-red-600 shadow-lg shadow-red-500/10 transition duration-300 hover:-translate-y-0.5 hover:border-red-500 hover:text-red-700 hover:shadow-red-500/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-500/25 max-[520px]:flex-col max-[520px]:items-center max-[520px]:gap-3 max-[520px]:text-center"
    >
      <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-red-100 text-red-600 transition-colors duration-300 group-hover:bg-red-500 group-hover:text-white max-[520px]:h-12 max-[520px]:w-12">
        {icon}
        <span className="absolute inset-0 -z-10 rounded-2xl bg-red-500/40 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />
      </span>
      <span className="flex flex-col gap-1 leading-tight text-red-700 max-[520px]:items-center max-[520px]:text-center">
        {label}
      </span>
    </Link>
  );
}

function PhoneCard({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div
      className={`tilt absolute h-[520px] w-[250px] rounded-[28px] border border-neutral-200/70 bg-white/90 p-2 shadow-xl transition will-change-transform max-[900px]:h-[500px] max-[900px]:w-[240px] max-[760px]:h-[460px] max-[760px]:w-[220px] max-[660px]:h-[420px] max-[660px]:w-[200px] max-[660px]:p-1.5 max-[520px]:h-[380px] max-[520px]:w-[180px] max-[520px]:p-1.5 max-[420px]:h-[340px] max-[420px]:w-[160px] max-[360px]:h-[300px] max-[360px]:w-[140px] max-[320px]:h-[280px] max-[320px]:w-[132px] max-[300px]:h-[260px] max-[300px]:w-[124px] ${className}`}
      style={{
        // Give each card a subtle perspective-feel
        boxShadow:
          "0 10px 30px rgba(0,0,0,.10), 0 12px 16px -12px rgba(0,0,0,.25)",
      }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[24px] bg-black">
        <Image src={src} alt={alt} fill className="object-cover" />
        {/* notch */}
        <div className="absolute left-1/2 top-2 h-6 w-32 -translate-x-1/2 rounded-2xl bg-black/70" />
      </div>
    </div>
  );
}
