import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const sections = [
  {
    title: '1. Information We Collect',
    content: [
      'When you use our website or contact us through our forms, we may collect the following personal information:',
      '• Name and contact details (email address, phone number)',
      '• Company or organisation name',
      '• Information you provide in messages or enquiry forms',
      '• Technical data such as IP address, browser type, and pages visited (via analytics tools)',
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: [
      'We use the information we collect to:',
      '• Respond to your enquiries and communicate about potential or active projects',
      '• Provide, manage, and improve our services',
      '• Send relevant updates or service information (only where you have consented)',
      '• Comply with legal obligations',
      'We do not sell, rent, or trade your personal information to third parties.',
    ],
  },
  {
    title: '3. Legal Basis for Processing',
    content: [
      'We process your personal data on the following grounds:',
      '• Contractual necessity — to fulfil a service agreement with you',
      '• Legitimate interests — to respond to enquiries and improve our services',
      '• Consent — where you have explicitly opted in',
      '• Legal obligation — where required by applicable law',
    ],
  },
  {
    title: '4. Data Storage & Security',
    content: [
      'Your data is stored securely and we take reasonable technical and organisational measures to protect it from unauthorised access, loss, or disclosure.',
      'We retain your personal data only for as long as necessary for the purposes outlined in this policy, or as required by law.',
    ],
  },
  {
    title: '5. Sharing Your Information',
    content: [
      'We may share your data with trusted third-party service providers (e.g. email platforms, cloud hosting) solely to operate our business and deliver our services. These parties are contractually bound to handle your data securely and only for the purpose specified.',
      'We will never share your information with advertisers or unrelated third parties.',
    ],
  },
  {
    title: '6. Cookies & Analytics',
    content: [
      'Our website may use cookies or similar tracking technologies to understand how visitors interact with our site and improve the user experience.',
      'You can control cookie preferences through your browser settings. Note that disabling cookies may affect some site functionality.',
    ],
  },
  {
    title: '7. Your Rights',
    content: [
      'You have the right to:',
      '• Access the personal data we hold about you',
      '• Request correction of inaccurate data',
      '• Request deletion of your data (subject to legal obligations)',
      '• Object to or restrict certain processing',
      '• Withdraw consent at any time where processing is based on consent',
      'To exercise any of these rights, please contact us at admin@zizi.co.za.',
    ],
  },
  {
    title: '8. Third-party Links',
    content: [
      'Our website may contain links to external websites. We are not responsible for the privacy practices or content of those sites and encourage you to review their privacy policies independently.',
    ],
  },
  {
    title: '9. Changes to This Policy',
    content: [
      'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Continued use of our website after changes constitutes acceptance of the updated policy.',
    ],
  },
  {
    title: '10. Contact Us',
    content: [
      'If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us:',
      'Email: admin@zizi.co.za',
      'Phone: +27 68 154 5803',
    ],
  },
]

export default function PrivacyPolicyPage() {
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
            PRIVACY<br />
            <span style={{ color: 'var(--yellow-neon)' }}>POLICY_</span>
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
            Zizi Solutions (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website or engage with our services. By using our website, you agree to the terms outlined in this policy.
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
            href="/terms-of-service"
            className="font-display text-xs font-black tracking-widest uppercase px-6 py-3 border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all duration-300"
          >
            Terms of Service →
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
