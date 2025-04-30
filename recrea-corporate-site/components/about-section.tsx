import { content } from "@/content/about"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-[#172E3F]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#EDE3BF]">株式会社リ・クリエについて</h2>

        <div className="max-w-3xl mx-auto text-white">
          <p className="mb-4">{content.paragraph1}</p>
          <p className="mb-4">{content.paragraph2}</p>
          <p>{content.paragraph3}</p>
        </div>
      </div>
    </section>
  )
}

