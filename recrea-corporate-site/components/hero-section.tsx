import Link from "next/link"

export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#EDE3BF]">自動車学校の変革を、共に。</h1>
        <p className="text-xl md:text-2xl mb-8 text-[#F2F2F2]">マーケティング、DX、M&Aに特化した経営支援</p>
        <Link href="/#contact" className="cta-button">
          無料で相談する
        </Link>
      </div>
    </section>
  )
}

