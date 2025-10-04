"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function AnimatedTestButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex justify-center px-4 py-4">
      <div
        className={`transform transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
        }`}
      >
        <a href="https://t.me/NewEmploymentAdvisorBot" target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            className="bg-[#2A4756] hover:bg-[#305869] text-white px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Получить отчет бесплатно
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeWidth="1.7"
                d="M10 7a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm0 10a3 3 0 1 0-6 0 3 3 0 0 0 6 0ZM20 7a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm0 10a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"
              />
            </svg>
          </Button>
        </a>
      </div>
    </div>
  )
}
