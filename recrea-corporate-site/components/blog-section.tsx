import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { formatDate, truncateText } from "@/lib/utils"

interface BlogPost {
  id: number
  title: string
  content: string
  cover_image_url: string | null
  published_at: string
}

interface BlogSectionProps {
  blogPosts: BlogPost[]
}

export default function BlogSection({ blogPosts }: BlogSectionProps) {
  return (
    <section id="blog" className="py-16 bg-black border-t border-[#F2F2F2]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#EDE3BF]">Re:Creaブログ</h2>

        {blogPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 最大6記事を表示 */}
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

        {blogPosts.length > 0 && (
          <div className="mt-12 text-center">
            <Link href="/blog" className="text-[#D0A25A] hover:underline inline-flex items-center">
              全ての記事を見る <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

