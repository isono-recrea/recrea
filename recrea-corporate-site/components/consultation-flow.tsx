import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { content } from "@/content/consultation"

export default function ConsultationFlow() {
  return (
    <section id="consultation" className="py-16 bg-black border-t border-[#F2F2F2]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#EDE3BF]">ご相談の流れ</h2>

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="flex-1 bg-[#172E3F] p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#D0A25A] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#EDE3BF]">お問合せ</h3>
              <p className="text-white">{content.step1}</p>
            </div>

            <div className="flex-1 bg-[#172E3F] p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#D0A25A] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#EDE3BF]">ヒアリング</h3>
              <p className="text-white">{content.step2}</p>
            </div>

            <div className="flex-1 bg-[#172E3F] p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#D0A25A] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#EDE3BF]">ご提案</h3>
              <p className="text-white">{content.step3}</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/#contact" className="cta-button inline-flex items-center">
              まずはお気軽にご相談ください <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

