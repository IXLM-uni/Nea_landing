"use client"

import React from "react"
import { Send, FileCheck2, Brain } from "lucide-react"

// Простой финальный блок без фонов и рамок — только текст и три кнопки
export default function FinalCTA() {
  return (
    <section className="relative mx-auto w-[90vw] max-w-[1000px] mt-12" aria-label="Финальный CTA">
      <div className="px-4 md:px-6 py-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Понравилось? Сделай следующий шаг</h1>
        <p className="text-white/80 text-lg mt-3 max-w-2xl mx-auto">
          Подписывайся на Telegram‑канал, подавайся на проект и пройди нашу профориентацию — собери своё портфолио и выйди на оффер быстрее.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="https://t.me/neamentor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#305869] hover:bg-[#40758C] transition text-white font-semibold px-6 py-3 shadow-[0_2px_10px_rgba(0,0,0,.25)] hover:shadow-[0_0_22px_rgba(64,117,140,.55)] hover:scale-[1.02]"
          >
            <Send size={18} /> Подписаться на Telegram
          </a>

          <a
            href="https://forms.yandex.ru/cloud/68e0ee7e90fa7b5c04e1733b/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#305869] hover:bg-[#40758C] transition text-white font-semibold px-6 py-3 shadow-[0_2px_10px_rgba(0,0,0,.25)] hover:shadow-[0_0_22px_rgba(64,117,140,.55)] hover:scale-[1.02]"
          >
            <FileCheck2 size={18} /> Принять участие в проекте
          </a>

          <a
            href="https://t.me/NewEmploymentAdvisorBot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#305869] hover:bg-[#40758C] transition text-white font-semibold px-6 py-3 shadow-[0_2px_10px_rgba(0,0,0,.25)] hover:shadow-[0_0_22px_rgba(64,117,140,.55)] hover:scale-[1.02]"
          >
            <Brain size={18} /> Пройти профориентацию
          </a>
        </div>
      </div>
    </section>
  )
}
