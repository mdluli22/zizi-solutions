import { pageMetadata } from '../lib/seo'

export const metadata = pageMetadata("Websites, Business Automation & Data Analytics", "Attract customers, save time and understand your business with website development and SEO, business automation and AI integration, and data dashboards and reporting.", "/")

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
