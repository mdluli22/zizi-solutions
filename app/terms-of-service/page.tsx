import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: [
      'By accessing or using the Zizi Solutions website (zizi.co.za) or engaging our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.',
    ],
  },
  {
    title: '2. Services',
    content: [
      'Zizi Solutions provides digital services including, but not limited to:',
      '• Custom web design and development',
      '• Brand identity and strategy',
      '• Data and business analytics',
      '• AI-powered data solutions',
      'The scope, deliverables, timelines, and pricing for each engagement are agreed upon in a separate written agreement or proposal between Zizi Solutions and the client.',
    ],
  },
  {
    title: '3. Client Responsibilities',
    content: [
      'By engaging our services, you agree to:',
      '• Provide accurate and complete information necessary for the delivery of services',
      '• Respond to requests for feedback, approvals, or content in a timely manner',
      '• Ensure you have the legal right to provide any materials, content, or data shared with us',
      '• Pay all agreed fees in accordance with the payment schedule outlined in your proposal or invoice',
    ],
  },
  {
    title: '4. Intellectual Property',
    content: [
      'Upon full payment of all agreed fees, ownership of final deliverables created specifically for the client transfers to the client, unless otherwise stated in the project agreement.',
      'Zizi Solutions retains the right to display completed work in its portfolio, on social media, or in other marketing materials unless the client explicitly requests confidentiality in writing.',
      'All tools, frameworks, libraries, and proprietary processes used by Zizi Solutions remain the intellectual property of their respective owners or Zizi Solutions.',
    ],
  },
  {
    title: '5. Payment Terms',
    content: [
      'Payment terms are outlined in each individual proposal or service agreement. Unless otherwise agreed:',
      '• A deposit may be required before work commences',
      '• Final deliverables will only be released upon receipt of full payment',
      '• Overdue invoices may incur a late payment fee',
      'Zizi Solutions reserves the right to pause or terminate work if payments are not received in accordance with the agreed schedule.',
    ],
  },
  {
    title: '6. Revisions & Scope Changes',
    content: [
      'Each project proposal includes a defined number of revision rounds. Work outside the agreed scope will be quoted and billed separately.',
      'Significant changes to project requirements after work has commenced may affect timelines and costs. Any scope changes must be agreed upon in writing.',
    ],
  },
  {
    title: '7. Limitation of Liability',
    content: [
      'Zizi Solutions will exercise reasonable skill and care in delivering all services. However, to the fullest extent permitted by law, we shall not be liable for:',
      '• Indirect, incidental, or consequential damages',
      '• Loss of revenue, data, or business opportunities',
      '• Errors arising from inaccurate or incomplete information provided by the client',
      'Our total liability in connection with any project shall not exceed the total fees paid by the client for that project.',
    ],
  },
  {
    title: '8. Confidentiality',
    content: [
      'Both parties agree to keep confidential any sensitive business information shared during the course of an engagement. This obligation continues after the project has concluded.',
      'Confidential information does not include information that is publicly available, independently developed, or disclosed with prior written consent.',
    ],
  },
  {
    title: '9. Termination',
    content: [
      'Either party may terminate a project engagement with written notice. In the event of termination:',
      '• The client is liable for payment of all work completed up to the termination date',
      '• Zizi Solutions will provide all completed deliverables upon receipt of outstanding payment',
      '• Deposits are non-refundable unless Zizi Solutions is unable to commence the agreed work',
    ],
  },
  {
    title: '10. Website Use',
    content: [
      'You may use this website for lawful purposes only. You must not:',
      '• Use the site in any way that violates applicable local, national, or international laws',
      '• Attempt to gain unauthorised access to any part of the website or its related systems',
      '• Transmit unsolicited commercial communications or spam',
      'We reserve the right to restrict or terminate access to the website at our discretion.',
    ],
  },
  {
    title: '11. Changes to These Terms',
    content: [
      'We may update these Terms of Service from time to time. Changes will be posted on this page with an updated effective date. Continued use of our website or services after changes have been posted constitutes your acceptance of the revised terms.',
    ],
  },
  {
    title: '12. Governing Law',
    content: [
      'These Terms of Service are governed by and construed in accordance with the laws of the Republic of South Africa. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the South African courts.',
    ],
  },
  {
    title: '13. Contact',
    content: [
      'If you have any questions about these Terms of Service, please reach out:',
      'Email: admin@zizi.co.za',
      'Phone: +27 68 154 5803',
    ],
  },
]

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-16 px-6 lg:px-12">
        <div className="absolute inset-0 grid-texture opacity-30 pointer-events-none" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(244,245,60,0.05) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-display text-xs tracking-widest uppercase text-white/40 hover:text-[#f4f53c] transition-colors mb-8"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M13 3L3 13M3 13H11M3 13V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Back to Home
          </Link>
          <p className="font-display text-xs tracking-[0.4em] uppercase mb-4" style={{ color: '#f4f53c' }}>
            Legal
          </p>
          <h1
            className="font-display font-black leading-none tracking-tight text-white mb-6"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', lineHeight: '0.92' }}
          >
            TERMS OF<br />
            <span style={{ color: 'var(--yellow-neon)' }}>SERVICE_</span>
          </h1>
          <p className="text-white/40 text-sm">
            Effective date: <span className="text-white/60">1 March 2026</span>
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 lg:px-12 pb-10">
        <div
          className="rounded-xl p-8 border border-white/5"
          style={{ background: 'rgba(244,245,60,0.03)' }}
        >
          <p className="text-white/60 text-sm leading-relaxed">
            These Terms of Service govern your use of the Zizi Solutions website and any services we provide. Please read them carefully before engaging with us. These terms apply to all visitors, clients, and users of our services.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="max-w-4xl mx-auto px-6 lg:px-12 pb-32 flex flex-col gap-10">
        {sections.map((s) => (
          <div
            key={s.title}
            className="border-b border-white/5 pb-10"
          >
            <h2 className="font-display font-black text-white text-xl uppercase tracking-widest mb-5">
              {s.title}
            </h2>
            <div className="flex flex-col gap-3">
              {s.content.map((line, i) => (
                <p key={i} className="text-white/50 text-sm leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}

        <div className="flex gap-4 pt-4 flex-wrap">
          <Link
            href="/privacy-policy"
            className="font-display text-xs font-black tracking-widest uppercase px-6 py-3 border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all duration-300"
          >
            Privacy Policy →
          </Link>
          <Link
            href="/contact"
            className="font-display text-xs font-black tracking-widest uppercase px-6 py-3 bg-[#f4f53c] text-black hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
