"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { scrollToSection } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false)

    // Check if we're on the home page
    if (window.location.pathname === "/") {
      scrollToSection(sectionId)
    } else {
      // If not on home page, navigate to home and then scroll
      window.location.href = `/#${sectionId}`
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black shadow-md" : "bg-black bg-opacity-80"}`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%99%BD_%E3%83%AD%E3%82%B4%20%282%29-T02rLSh5uuG9kgmkCnhiGo9DvhI5t5.png"
              alt="株式会社リ・クリエ"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="text-white p-2"
          aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMenuOpen && (
          <div className="fixed inset-0 top-[72px] bg-black z-40 flex flex-col items-center pt-10">
            <nav>
              <ul className="flex flex-col items-center space-y-6 text-xl">
                <li>
                  <button onClick={() => handleNavClick("home")} className="text-white hover:text-[#D0A25A]">
                    ホーム
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick("services")} className="text-white hover:text-[#D0A25A]">
                    サービス
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick("case-studies")} className="text-white hover:text-[#D0A25A]">
                    事例
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick("members")} className="text-white hover:text-[#D0A25A]">
                    メンバー
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick("consultation")} className="text-white hover:text-[#D0A25A]">
                    ご相談の流れ
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick("blog")} className="text-white hover:text-[#D0A25A]">
                    ブログ
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick("contact")} className="text-white hover:text-[#D0A25A]">
                    お問合せ
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

