import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { createServerSupabaseClient } from "@/lib/supabase"
import Header from "@/components/header"
import Footer from "@/components/footer"

interface ServicePageProps {
  params: {
    id: string
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const supabase = createServerSupabaseClient()
  const { id } = params

  const { data: service, error } = await supabase.from("services").select("*").eq("id", id).single()

  if (error || !service) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            {service.icon_url && (
              <div className="mb-6 flex justify-center">
                <Image
                  src={service.icon_url || "/placeholder.svg"}
                  alt={service.name}
                  width={96}
                  height={96}
                  className="w-24 h-24 object-contain"
                />
              </div>
            )}

            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#EDE3BF] text-center">{service.name}</h1>

            <div className="text-white mb-12 prose prose-invert max-w-none">
              {service.description.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <Link
                href="/#services"
                className="bg-[#BF3754] hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-md transition duration-300 inline-flex items-center"
              >
                <ArrowLeft size={16} className="mr-2" /> トップページに戻る
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

