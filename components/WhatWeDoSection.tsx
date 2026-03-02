'use client'
import { useEffect, useRef, useState } from 'react'

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let startTime: number
    const animate = (time: number) => {
      if (!startTime) startTime = time
      const progress = Math.min((time - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [started, end, duration])

  return <span ref={ref}>{count}</span>
}

export default function WhatWeDoSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: 'var(--yellow-neon)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div>
            <h2
              className="font-display text-6xl lg:text-8xl font-black leading-none tracking-tight text-black mb-10"
              style={{ lineHeight: '0.92' }}
            >
              WHAT<br />WE DO
            </h2>
            <p className="text-black/60 text-sm leading-relaxed mb-4 max-w-sm">
              We develop digital products and provide consulting services to our clients on digital presence and data solutions.
            </p>
            <p className="text-black/60 text-sm leading-relaxed mb-12 max-w-sm">
              We prioritize helping businesses streamline their daily core operations with technological and digital solutions.
            </p>
            <a
              href="#services"
              className="inline-block font-display text-sm font-black tracking-widest uppercase px-8 py-4 bg-black text-white rounded-full hover:bg-[#1a1a1a] transition-all duration-300 hover:scale-105"
            >
              Learn more
            </a>
          </div>

          {/* Right — About / Why choose me */}
          <div className="flex flex-col gap-6 pt-4 max-w-lg">
            <h3 className="font-display text-2xl font-black text-black mb-4">OUR STORY</h3>
            <p className="text-black/60 text-sm leading-relaxed mb-4">
              Born out of a frustration of the unemployment rate in South Africa, this studio was founded to build focused, practical software and data products that solve real business problems. 
              With fresh new perspectives and hands-on experience across product, engineering and analytics, We blend technical rigor with business sensibility to deliver measurable results.
            </p>

            <h3 className="font-display text-sm font-black text-black mb-3">WHY CHOOSE US</h3>
            <ul className="text-black/60 text-sm leading-relaxed list-disc pl-5 space-y-2">
              <li>Direct access to the person building your product — faster decisions and clear ownership</li>
              <li>Outcome-first engagements — we define success with customer satisfaction in mind</li>
              <li>End-to-end delivery — from discovery and data pipelines to deployment and monitoring</li>
              <li>Lean, flexible teams — tailored to your needs and timelines without excess overhead</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
