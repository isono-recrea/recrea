import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { createServerSupabaseClient } from "@/lib/supabase"
import Header from "@/components/header"
import Footer from "@/components/footer"

interface CaseStudyPageProps {
  params: {
    id: string
  }
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const supabase = createServerSupabaseClient()
  const { id } = params

  const { data: caseStudy, error } = await supabase
    .from("case_studies")
    .select(`
      *,
      case_study_services(
        service_id,
        services(id, name)
      )
    `)
    .eq("id", id)
    .single()

  if (error || !caseStudy) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#D0A25A]">{caseStudy.title}</h1>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-[#EDE3BF]">課題</h2>
              <div className="text-white">
                {caseStudy.challenge.split("\n").map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-[#EDE3BF]">解決策</h2>
              <div className="text-white">
                {caseStudy.solution.split("\n").map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-xl font-bold mb-4 text-[#EDE3BF]">成果</h2>
              <div className="text-white">
                {caseStudy.result.split("\n").map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-xl font-bold mb-4 text-[#D0A25A]">関連ソリューション</h2>
              <div className="flex flex-wrap gap-3">
                {caseStudy.case_study_services.map((css) => (
                  <Link
                    key={css.service_id}
                    href={`/services/${css.service_id}`}
                    className="text-white hover:text-[#D0A25A] underline"
                  >
                    {css.services.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <Link
                href="/#case-studies"
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

