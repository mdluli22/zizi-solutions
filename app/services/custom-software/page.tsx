import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { pageMetadata } from '../../../lib/seo'

export const metadata = pageMetadata('Custom Software Development', 'Custom web applications and API integrations built around your business workflows by Zizi Solutions for businesses worldwide.', '/services/custom-software')

export default function CustomSoftwarePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 sm:pt-40 pb-20 sm:pb-24">
        <p className="text-[#f4f53c] text-xs sm:text-sm uppercase tracking-widest mb-5">Zizi Solutions · Serving businesses worldwide</p>
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl max-w-4xl font-black leading-tight tracking-tight mb-6">Custom Software Development</h1>
        <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-12">We build web applications and API integrations for businesses that need software tailored to their processes. We work with clients worldwide.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
        <h2 className="font-display text-3xl font-bold mb-5">Who we help</h2>
        <p className="text-white/70 leading-relaxed mb-12">Businesses that need more than a marketing website: a workflow for their team, an application for customers, or connections between existing tools. We start by understanding your users and requirements.</p>
          <Link href="/contact" className="button-secondary">Discuss your requirements</Link>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
        <h2 className="font-display text-3xl font-bold mb-5">What we deliver</h2>
        <ul className="list-disc pl-6 space-y-4 text-white/70 leading-relaxed">
          <li>Responsive web applications designed around your business requirements.</li>
          <li>API integrations with payment gateways, CRMs and third-party tools.</li>
          <li>Wireframes and design reviews before development.</li>
          <li>Testing, staging review, documentation and launch handover.</li>
          <li>Ongoing support and maintenance agreed around your project.</li>
        </ul>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a0a2e] to-[#0a1a2e] p-6 sm:p-10">
        <h2 className="font-display text-3xl font-bold mb-5">From requirements to launch</h2>
        <p className="text-white/70 leading-relaxed mb-10">Discovery establishes the scope, users and integrations. We review designs with you, develop the application, then test it before launch. Contact us to discuss your requirements, timeline and support needs.</p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
          <Link href="/contact" className="button-primary">Discuss your software project</Link>
          <Link href="/services/web-design-dev" className="button-secondary">Website design and development</Link>
          <Link href="/work" className="button-secondary">View our website portfolio</Link>
        </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
