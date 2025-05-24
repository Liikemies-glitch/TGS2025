import Image from 'next/image'

const teamMembers = [
  {
    name: 'Mikki',
    lastName: 'Aalto-Ylevä',
    role: 'SaaS Specialist',
    image: '/images/team/mikki gs.webp'
  },
  {
    name: 'Tuomas',
    lastName: 'Kaartoluoma',
    role: 'Designer',
    image: '/images/team/tuomas_gs.webp'
  },
  {
    name: 'Dũng',
    lastName: 'Nguyen',
    role: 'Designer',
    image: '/images/team/duncan gs.webp'
  },
  {
    name: 'Aksel',
    lastName: 'Suokas',
    role: 'Designer',
    image: '/images/team/aksel gs.webp'
  }
]

export function TeamSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            Your product team&apos;s missing pieces
          </h2>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            Let us fill the gaps and accelerate your growth.
          </p>
        </div>

        {/* Team Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {teamMembers.map((member) => (
            <div 
              key={`${member.name}-${member.lastName}`}
              className="group text-center"
            >
              {/* Profile Image */}
              <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                <Image
                  src={member.image}
                  alt={`${member.name} ${member.lastName}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, 192px"
                />
              </div>

              {/* Member Info */}
              <div className="mt-6">
                <h3 className="text-xl font-medium">
                  {member.name}
                </h3>
                <h4 className="text-xl font-medium text-muted-foreground">
                  {member.lastName}
                </h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 