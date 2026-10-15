import { pageMetadata } from '../../lib/seo'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ArrowIcon from '../../components/ArrowIcon'

export const metadata = pageMetadata('Our Work', 'Explore a client website project and the Zizi Solutions in-house website, with clear summaries of the project goals, development work and features delivered.', '/work')

const projects = [
  {
    title: 'Security Professionals',
    type: 'Client project',
    context: 'Website for a firearm safety training business',
    goal: 'Present the business and its training offering online, with a clear route for prospective customers to make an enquiry or start a booking.',
    solution: 'Designed and developed a responsive website, with page layouts and a booking enquiry flow suited to the business.',
    features: ['Website design and development', 'Mobile-responsive page layouts', 'Booking enquiry flow'],
    image: '/Secpro.png',
    imageAlt: 'Security Professionals project logo',
    gradient: 'linear-gradient(135deg, #101b12 0%, #101010 100%)',
  },
  {
    title: 'Zizi Solutions',
    type: 'In-house project',
    context: 'Our own business website',
    goal: 'Explain our three services, show examples of our website work and give visitors a straightforward way to discuss a project.',
    solution: 'Built this website with Next.js and Tailwind CSS, using a consistent visual style, dedicated service pages and a contact enquiry form.',
    features: ['Dedicated pages for websites, automation and data reporting', 'Responsive navigation and page layouts', 'Contact form with validation and email delivery', 'Page metadata, sitemap and business structured data'],
    image: '/1.png',
    imageAlt: 'Zizi Solutions project logo',
    gradient: 'linear-gradient(135deg, #1a1028 0%, #101010 100%)',
  },
]

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <section className="relative overflow-hidden pt-32 sm:pt-40 pb-12 sm:pb-16 px-6 lg:px-12">
        <div className="absolute inset-0 grid-texture opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <Link href="/" className="button-secondary mb-8"><ArrowIcon direction="left" className="mr-3" />Back to home</Link>
          <p className="text-[#f4f53c] text-xs uppercase tracking-[0.2em] mb-4">Website development portfolio</p>
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none mb-6">Our <span className="text-[#f4f53c]">Work</span></h1>
          <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-2xl">A client website and our own in-house website. Here is what each project was built to do, how we approached it and the features delivered.</p>
        </div>
      </section>

      <section aria-label="Website projects" className="max-w-7xl mx-auto px-6 lg:px-12 pb-20 flex flex-col gap-8">
        {projects.map((project) => (
          <article key={project.title} className="rounded-2xl overflow-hidden border border-white/10" style={{ background: project.gradient }}>
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="relative min-h-[240px] sm:min-h-[300px] lg:min-h-[420px] lg:col-span-2 bg-black/20 border-b lg:border-b-0 lg:border-r border-white/10">
                <Image fill sizes="(min-width: 1024px) 40vw, 100vw" src={project.image} alt={project.imageAlt} className="object-contain p-8 sm:p-12" />
              </div>
              <div className="lg:col-span-3 p-6 sm:p-8 lg:p-12">
                <span className="inline-flex rounded-full border border-[#f4f53c]/30 bg-[#f4f53c]/5 text-[#f4f53c] text-xs font-semibold uppercase tracking-widest px-4 py-2 mb-5">{project.type}</span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight mb-2">{project.title}</h2>
                <p className="text-white/60 text-sm mb-8">{project.context}</p>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2">Project goal</h3>
                    <p className="text-white/75 leading-relaxed">{project.goal}</p>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2">What we built</h3>
                    <p className="text-white/75 leading-relaxed">{project.solution}</p>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-3">Features delivered</h3>
                    <ul className="space-y-3">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-white/75 leading-relaxed">
                          <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-1 text-[#f4f53c]"><path d="m5 12 4 4L19 6" /></svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link href="/services/web-design-dev" className="button-secondary mt-8">Explore website development <ArrowIcon direction="up-right" className="ml-3" /></Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-28">
        <div className="rounded-2xl border border-[#f4f53c]/20 bg-[#f4f53c]/5 p-6 sm:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">Have a project in mind?</h2>
            <p className="text-white/75 leading-relaxed">Tell us what your business needs. We’ll help you shape the next step.</p>
          </div>
          <Link href="/contact" className="button-primary shrink-0">Discuss your project <ArrowIcon direction="up-right" className="ml-3" /></Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
