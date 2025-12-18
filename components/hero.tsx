"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToApplication = () => {
    const element = document.getElementById("application")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="pt-40 pb-32 md:pt-48 md:pb-40">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="max-w-[800px]">
          <h1 className="font-serif text-[56px] md:text-[72px] leading-[1.15] tracking-tight text-[#0F172A] mb-8">
            参考書をAIで逆算。
            <br />
            だから迷わない。
          </h1>
          <p className="font-sans text-[20px] md:text-[24px] leading-[1.6] text-[#475569] mb-12 max-w-[600px]">
            AIが志望校から今日やるべきことを算出。オンライン自習室で集中を維持。受験のすべてを、一つの場所で。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              onClick={scrollToApplication}
              className="h-14 px-8 rounded-none bg-[#0F172A] text-white hover:bg-[#1E293B] transition-all duration-200 text-base font-medium"
            >
              無料体験で試す
            </Button>
          </div>
          <div className="flex items-center gap-8 text-[#64748B] text-sm font-mono">
            <span>導入実績50名以上</span>
            <span className="w-px h-4 bg-[#CBD5E1]"></span>
            <span>平均偏差値+10~15</span>
            <span className="w-px h-4 bg-[#CBD5E1]"></span>
            <span>継続率90%越</span>
          </div>
        </div>
      </div>
    </section>
  )
}
