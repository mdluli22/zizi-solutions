import { pageMetadata } from '../lib/seo'

export const metadata = pageMetadata("Website Development & Custom Software", "Zizi Solutions builds websites and custom software, with brand identity, data analytics and AI integration services for businesses.", "/")

import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import WhatWeDoSection from '../components/WhatWeDoSection'
import ServicesSection from '../components/ServicesSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <WhatWeDoSection />
      <ServicesSection />
      <Footer />
    </main>
  )
}
