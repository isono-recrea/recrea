import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { createServerSupabaseClient } from "@/lib/supabase"
import { formatDate } from "@/lib/utils"
import Header from "@/components/header"
import Footer from "@/components/footer"

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const supabase = createServerSupabaseClient()
  const { id } = params

  const { data: post, error } = await supabase.from("blog_posts").select("*").eq("id", id).single()

  if (error || !post) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            {post.cover_image_url && (
              <div className="mb-8 rounded-lg overflow-hidden">
                <Image
                  src={post.cover_image_url || "/placeholder.svg"}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            )}

            <p className="text-gray-400 mb-4">{formatDate(post.published_at)}</p>

            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#EDE3BF]">{post.title}</h1>

            <div className="text-white prose prose-invert max-w-none">
              {post.content.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex justify-between mt-12">
              <Link href="/blog" className="text-[#D0A25A] hover:underline">
                全てのブログを見る
              </Link>

              <Link href="/" className="text-[#D0A25A] hover:underline">
                トップページに戻る
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

