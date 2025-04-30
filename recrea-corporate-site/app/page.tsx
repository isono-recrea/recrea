import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import CaseStudiesSection from "@/components/case-studies-section"
import MembersSection from "@/components/members-section"
import BlogSection from "@/components/blog-section"
import ConsultationFlow from "@/components/consultation-flow"
import CEOMessage from "@/components/ceo-message"
import AccessSection from "@/components/access-section"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import { createServerSupabaseClient } from "@/lib/supabase"

export default async function Home() {
  const supabase = createServerSupabaseClient()

  // Fetch services
  const { data: services } = await supabase.from("services").select("*").order("id")

  // Fetch case studies with related services
  const { data: caseStudies } = await supabase
    .from("case_studies")
    .select(`
      *,
      case_study_services(
        service_id,
        services(id, name)
      )
    `)
    .order("id")

  // Fetch members with related services
  const { data: members } = await supabase
    .from("members")
    .select(`
      *,
      member_services(
        service_id,
        services(id, name)
      )
    `)
    .order("display_order")

  // Fetch latest blog posts
  const { data: blogPosts } = await supabase
    .from("blog_posts")
    .select("*")
    .order("published_at", { ascending: false })
    .limit(6)

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection services={services || []} />
      <CaseStudiesSection caseStudies={caseStudies || []} />
      <MembersSection members={members || []} />
      <BlogSection blogPosts={blogPosts || []} />
      <ConsultationFlow />
      <CEOMessage />
      <AccessSection />
      <ContactForm />
      <Footer />
    </main>
  )
}

