import { content } from "@/content/ceo-message"

export default function CEOMessage() {
  return (
    <section id="ceo-message" className="py-16 bg-black border-t border-[#F2F2F2]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#EDE3BF]">
          代表取締役パートナーのメッセージ
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="text-white">
            {content.paragraphs.map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="text-right text-white mt-8">
            <p>{content.signature.company}</p>
            <p>{content.signature.name}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

