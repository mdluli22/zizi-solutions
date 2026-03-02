import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import WhatWeDoSection from '@/components/WhatWeDoSection'
import ServicesSection from '@/components/ServicesSection'
import Footer from '@/components/Footer'

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
