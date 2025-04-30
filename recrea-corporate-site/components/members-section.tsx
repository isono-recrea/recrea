import Link from "next/link"
import Image from "next/image"

interface Service {
  id: number
  name: string
}

interface MemberService {
  service_id: number
  services: Service
}

interface Member {
  id: number
  name: string
  title: string
  profile: string
  photo_url: string | null
  display_order: number
  member_services: MemberService[]
}

interface MembersSectionProps {
  members: Member[]
}

export default function MembersSection({ members }: MembersSectionProps) {
  return (
    <section id="members" className="py-16 bg-black border-t border-[#F2F2F2]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#EDE3BF]">メンバープロフィール</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <div key={member.id} className="member-card p-6 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                {member.photo_url ? (
                  <Image
                    src={member.photo_url || "/placeholder.svg"}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-[#172E3F] flex items-center justify-center">
                    <span className="text-white text-xl">{member.name.charAt(0)}</span>
                  </div>
                )}
              </div>

              <h3 className="text-xl font-bold mb-2 text-[#EDE3BF]">{member.name}</h3>
              <p className="text-[#D0A25A] mb-4">{member.title}</p>
              <p className="text-white mb-6">{member.profile}</p>

              <div className="w-full mt-auto">
                <h4 className="text-[#EDE3BF] font-semibold mb-2">担当</h4>
                <div className="flex flex-wrap gap-2">
                  {member.member_services.map((ms) => (
                    <Link
                      key={ms.service_id}
                      href={`/services/${ms.service_id}`}
                      className="text-[#D0A25A] hover:underline"
                    >
                      {ms.services.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

