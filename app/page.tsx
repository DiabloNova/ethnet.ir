'use client'

import { CustomCursor } from '@/components/ui/CustomCursor'
import { Navbar } from '@/components/layout/Navbar'
import { HeroSection } from '@/components/sections/HeroSection'
import { InvestmentSection } from '@/components/sections/InvestmentSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { Footer } from '@/components/sections/Footer'

export default function Page() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="relative w-full" style={{ backgroundColor: '#050a1a', color: '#f0f4ff' }}>
        <HeroSection />
        <InvestmentSection />
        <FeaturesSection />
        <Footer />
      </main>
    </>
  )
}
