import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { createServerSupabaseClient } from "@/lib/supabase"
import { formatDate, truncateText } from "@/lib/utils"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default async function BlogPage() {
  const supabase = createServerSupabaseClient()

  const { data: blogPosts } = await supabase
    .from("blog_posts")
    .select("*")
    .order("published_at", { ascending: false })
    .limit(10)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black pt-24">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#EDE3BF]">Re:Creaブログ</h1>

          {blogPosts && blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div key={post.id} className="blog-card">
                  {post.cover_image_url && (
                    <div className="h-48 overflow-hidden">
                      <Image
                        src={post.cover_image_url || "/placeholder.svg"}
                        alt={post.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="text-sm text-gray-400 mb-2">{formatDate(post.published_at)}</p>
                    <h3 className="text-xl font-bold mb-3 text-[#EDE3BF]">{post.title}</h3>
                    <p className="text-white mb-4">{truncateText(post.content, 150)}</p>
                    <Link href={`/blog/${post.id}`} className="text-[#D0A25A] hover:underline inline-flex items-center">
                      詳細を見る <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-white py-12">
              <p>まだ記事はありません</p>
            </div>
          )}

          <div className="flex justify-center mt-12">
            <Link
              href="/"
              className="bg-[#BF3754] hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-md transition duration-300 inline-flex items-center"
            >
              <ArrowLeft size={16} className="mr-2" /> トップページに戻る
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

