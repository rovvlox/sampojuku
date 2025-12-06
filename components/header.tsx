"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200 ${
        isScrolled ? "border-b border-[#A8B0C0]" : "border-b border-[#A8B0C0]"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="font-serif text-xl tracking-wide text-[#0F172A]">三歩塾</div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("results")}
              className="text-[#0F172A] text-sm hover:text-[#0B6DFF] transition-colors duration-200"
            >
              実績
            </button>
            <button
              onClick={() => scrollToSection("system")}
              className="text-[#0F172A] text-sm hover:text-[#0B6DFF] transition-colors duration-200"
            >
              ロードマップ
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-[#0F172A] text-sm hover:text-[#0B6DFF] transition-colors duration-200"
            >
              料金
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-[#0F172A] text-sm hover:text-[#0B6DFF] transition-colors duration-200"
            >
              FAQ
            </button>
            <Button
              onClick={() => scrollToSection("application")}
              className="h-12 px-6 rounded-lg bg-[#0F172A] text-white hover:bg-[#1E293B] transition-all duration-200"
            >
              7日間無料体験で試す
            </Button>
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-[#0F172A]">
                <Menu className="h-6 w-6" />
                <span className="sr-only">メニューを開く</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-white">
              <nav className="flex flex-col gap-6 mt-8">
                <button
                  onClick={() => scrollToSection("results")}
                  className="text-[#0F172A] text-base text-left hover:text-[#0B6DFF] transition-colors duration-200 py-2"
                >
                   -実績-
                </button>
                <button
                  onClick={() => scrollToSection("system")}
                  className="text-[#0F172A] text-base text-left hover:text-[#0B6DFF] transition-colors duration-200 py-2"
                >
                   -ロードマップ-
                </button>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-[#0F172A] text-base text-left hover:text-[#0B6DFF] transition-colors duration-200 py-2"
                >
                   -料金-
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-[#0F172A] text-base text-left hover:text-[#0B6DFF] transition-colors duration-200 py-2"
                >
                   -FAQ-
                </button>
                <Button
                  onClick={() => scrollToSection("application")}
                  className="h-12 px-6 rounded-lg bg-[#0F172A] text-white hover:bg-[#1E293B] transition-all duration-200 mt-4"
                >
                   7日間無料体験で試す
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
