import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link" // Рекомендуется использовать Link из Next.js для навигации

export function ActionButtons() {
  return (
    <section className="px-4 py-8">
      <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 justify-center">
        

        {/* --- НАЧАЛО ИЗМЕНЕНИЙ --- */}
        <a href="https://t.me/NewEmploymentAdvisorBot" target="_blank" rel="noopener noreferrer">
          
        </a>
        {/* --- КОНЕЦ ИЗМЕНЕНИЙ --- */}

      </div>
    </section>
  )
}
