import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface Service {
  id: number
  name: string
}

interface CaseStudyService {
  service_id: number
  services: Service
}

interface CaseStudy {
  id: number
  title: string
  challenge: string
  solution: string
  result: string
  case_study_services: CaseStudyService[]
}

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[]
}

export default function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  return (
    <section id="case-studies" className="py-16 bg-black border-t border-[#F2F2F2]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#EDE3BF]">事例紹介</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((caseStudy) => (
            <div key={caseStudy.id} className="case-card p-6">
              <h3 className="text-xl font-bold mb-4 text-[#EDE3BF]">{caseStudy.title}</h3>

              <div className="mb-4">
                <h4 className="text-[#EDE3BF] font-semibold mb-2">課題</h4>
                <p className="text-white">{caseStudy.challenge.substring(0, 100)}...</p>
              </div>

              <div className="mb-4">
                <h4 className="text-[#D0A25A] font-semibold mb-2">関連ソリューション</h4>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.case_study_services.map((css) => (
                    <Link
                      key={css.service_id}
                      href={`/services/${css.service_id}`}
                      className="text-white hover:text-[#D0A25A]"
                    >
                      {css.services.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href={`/case-studies/${caseStudy.id}`}
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

