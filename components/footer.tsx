"use client"

export function Footer() {
  const scrollToApplication = () => {
    const element = document.getElementById("application")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-white border-t border-[#A8B0C0]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="py-12 text-center">
          <button
            onClick={scrollToApplication}
            className="inline-block h-12 px-8 rounded-lg bg-[#0B6DFF] text-white hover:bg-[#094FCC] transition-all duration-200 mb-8"
          >
            7日間無料体験で試す
          </button>
        </div>
        <div className="py-6 border-t border-[#A8B0C0]">
          <div className="flex flex-wrap justify-center gap-6 text-[12px] md:text-[14px] text-[#616C7C]">
            <a href="/tokushoho" className="hover:text-[#0B6DFF] transition-colors">
              特商法
            </a>
            <a href="/privacy" className="hover:text-[#0B6DFF] transition-colors">
              プライバシー
            </a>
            <a href="/terms" className="hover:text-[#0B6DFF] transition-colors">
              利用規約
            </a>
          </div>
          <p className="text-center text-[12px] text-[#616C7C] mt-6">© 2025 無料体験. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
