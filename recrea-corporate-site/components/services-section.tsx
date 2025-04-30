import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { truncateText } from "@/lib/utils"

interface Service {
  id: number
  name: string
  description: string
  icon_url: string | null
}

interface ServicesSectionProps {
  services: Service[]
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#EDE3BF]">サービス</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="service-card p-6">
              {service.icon_url && (
                <div className="mb-4">
                  <Image
                    src={service.icon_url || "/placeholder.svg"}
                    alt={service.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-contain"
                  />
                </div>
              )}
              <h3 className="text-xl font-bold mb-3 text-[#EDE3BF]">{service.name}</h3>
              <p className="text-white mb-4">{truncateText(service.description, 150)}</p>
              <Link
                href={`/services/${service.id}`}
                className="text-[#D0A25A] hover:underline inline-flex items-center"
              >
                詳細を見る <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

