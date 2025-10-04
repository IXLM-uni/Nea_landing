"use client"

import React from "react"
import { Send, FileCheck2, Brain } from "lucide-react"

// Финальный CTA для страницы менторов: без фонов и рамок — только текст и три кнопки
export default function MentorFinalCTA() {
  return (
    <section className="relative mx-auto w-[90vw] max-w-[1000px] mt-12" aria-label="Финальный CTA — менторы">
      <div className="px-4 md:px-6 py-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Понравилось? Сделай следующий шаг</h1>
        <p className="text-white/80 text-lg mt-3 max-w-2xl mx-auto">
          Подписывайтесь на Telegram‑канал, становитесь ментором и подключайтесь к сообществу практиков.
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
            href="https://forms.yandex.ru/cloud/68e0f7121f1eb5078c1f2833/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#305869] hover:bg-[#40758C] transition text-white font-semibold px-6 py-3 shadow-[0_2px_10px_rgba(0,0,0,.25)] hover:shadow-[0_0_22px_rgba(64,117,140,.55)] hover:scale-[1.02]"
          >
            <FileCheck2 size={18} /> Стать ментором
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
