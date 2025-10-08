export const revalidate = 0
import { HeroSection } from "@/components/hero-section"
import { ProfessionSlider } from "@/components/profession-slider"
import { CareerChart } from "@/components/career-chart"
import { ProcessSteps } from "@/components/process-steps"
import { FreeService } from "@/components/free-service"
import { TrustSection } from "@/components/trust-section"
import { ActionButtons } from "@/components/action-buttons"
import { FixedBottomButton } from "@/components/fixed-bottom-button"
import { AnimatedBackground } from "@/components/animated-background"
import { AnimatedTestButton } from "@/components/animated-test-button"
import FinalCTA from "@/components/landing/FinalCTA"
import Image from "next/image"

export default function ProforientationPage() {
  return (
    <div className="min-h-screen bg-[#2A2A2A] text-white relative overflow-hidden">
      <AnimatedBackground />

      <main className="relative z-10 space-y-4">
        <HeroSection />
        <ProfessionSlider />
        <ProcessSteps />
        <CareerChart />

        <AnimatedTestButton />
        
        <FreeService />
        <TrustSection hideStats />
        <ActionButtons />
      </main>
      <FixedBottomButton />
      <div className="mb-16">
        <FinalCTA />
      </div>
    </div>
  )
}
