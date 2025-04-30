import Link from "next/link"
import { Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#F2F2F2] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#EDE3BF]">株式会社リ・クリエ</h3>
            <p className="text-white mb-2">〒141-0031</p>
            <p className="text-white mb-4">東京都品川区西五反田7-13-5 DK五反田407</p>
            <p className="text-white mb-2">電話番号：03-6899-2830</p>
            <p className="text-white mb-4">メール：contact@recrea-solutions.com</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-[#EDE3BF]">サービス</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/1" className="text-white hover:text-[#D0A25A]">
                  デジタルマーケティング支援
                </Link>
              </li>
              <li>
                <Link href="/services/2" className="text-white hover:text-[#D0A25A]">
                  ブランディング支援
                </Link>
              </li>
              <li>
                <Link href="/services/3" className="text-white hover:text-[#D0A25A]">
                  DX推進支援
                </Link>
              </li>
              <li>
                <Link href="/services/4" className="text-white hover:text-[#D0A25A]">
                  M&Aコンサルティング
                </Link>
              </li>
              <li>
                <Link href="/services/5" className="text-white hover:text-[#D0A25A]">
                  経営顧問
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-[#EDE3BF]">リンク</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white hover:text-[#D0A25A]">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-white hover:text-[#D0A25A]">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/#case-studies" className="text-white hover:text-[#D0A25A]">
                  事例
                </Link>
              </li>
              <li>
                <Link href="/#members" className="text-white hover:text-[#D0A25A]">
                  メンバー
                </Link>
              </li>
              <li>
                <Link href="/#blog" className="text-white hover:text-[#D0A25A]">
                  ブログ
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-white hover:text-[#D0A25A]">
                  お問合せ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#F2F2F2] flex flex-col md:flex-row justify-between items-center">
          <p className="text-white mb-4 md:mb-0">
            © {new Date().getFullYear()} 株式会社リ・クリエ All Rights Reserved.
          </p>

          <div className="flex space-x-4">
            <a
              href="https://x.com/recrea_solv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#D0A25A]"
              aria-label="X (Twitter)"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

