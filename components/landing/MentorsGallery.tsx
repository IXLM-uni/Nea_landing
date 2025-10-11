"use client"

import React, { useMemo, useState } from "react"
import Image from "next/image"

type Mentor = {
  name: string
  role: string
  company: string
  companyLogo?: string
  photo: string
  desc: string
}

export default function MentorsGallery({ className = "" }: { className?: string }) {
  const mentors = useMemo<Mentor[]>(
    () => [
      {
        name: "Ирина Митрофанова",
        role: "Директор",
        company: "РБК",
        companyLogo: "/images/Companies_logos/RBK_logo.png",
        photo: "/images/Mentors/Ирина Митрофанова.jpg",
        desc:
          "Бизнес‑девелопмент в медиа: стратегия, запуск проектов, M&A и интеграции. Руководство направлениями и рост через партнёрства.",
      },
      {
        name: "Никита Фальков",
        role: "BizDev",
        company: "Salmon",
        companyLogo: "/images/Companies_logos/Salmon_logo.png",
        photo: "/images/Mentors/Никита Фальков.jpg",
        desc:
          "Product/BizDev: запуск и развитие EdTech/FinTech‑продуктов, рост ключевых метрик, A/B‑тесты. Управление кросс‑функциональными командами 20+.",
      },
      {
        name: "Алексей Ларин",
        role: "Product Marketing Lead",
        company: "Яндекс",
        companyLogo: "/images/Companies_logos/Yandex_logo.png",
        photo: "/images/Mentors/Алексей Ларин.jpg",
        desc:
          "GTM‑стратегии и спецпроекты: вовлечение, retention и рост выручки. Организация команд, запуск федеральных кампаний.",
      },
    ],
    []
  )

  const [active, setActive] = useState(0)
  const m = mentors[active]

  return (
    <section className={`relative mx-auto w-[90vw] max-w-[1200px] ${className}`} aria-label="Галерея менторов">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#2A2A2A]/60 backdrop-blur-xl">
        {/* Контент: фото + описание */}
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,560px)_1fr] gap-8 p-6 md:p-10 items-start md:min-h-[560px]">
          {/* Большое фото активного ментора */}
          <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden">
            {/* Используем next/image, но учитываем внешние домены (как падение — просто <img> */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={m.photo}
              alt={m.name}
              className="absolute inset-0 h-full w-full object-cover"
            />
            
            {/* Плашка с именем */}
            <div className="absolute left-4 bottom-4 flex items-center gap-3 origin-bottom-left scale-[1.0]">
              <div className="rounded-md bg-white/90 px-2 py-1 text-sm font-medium text-[#1d1d1d]">
                {m.name}
              </div>
              <div className="rounded-md bg-black/30 backdrop-blur px-2 py-1 text-sm text-white/90 border border-white/10">
                {m.role}
              </div>
            </div>
          </div>

          {/* Текст и логотип */}
          <div className="min-w-0 md:min-h-[220px]">
            <div className="flex items-center gap-3">
              {/** Логотипы компаний скрыты по запросу */}
              {/**
               * // eslint-disable-next-line @next/next/no-img-element
               * {m.companyLogo && (<img src={m.companyLogo} alt={m.company} className="h-10 md:h-12 object-contain" />)}
               */}
              <div className="h-8 px-2 inline-flex items-center rounded bg-white/10 border border-white/10 text-white/80 text-sm">
                {m.company}
              </div>
              <div className="text-white/90 font-bold text-2xl md:text-4xl leading-tight">{m.company}</div>
            </div>
            <p className="mt-4 text-white/80 text-base md:text-lg leading-relaxed">
              {m.desc}
            </p>
          </div>
        </div>

        {/* Нижняя лента превью */}
        <div className="border-t border-white/10 bg-black/10">
          <div className="flex gap-4 overflow-x-auto p-4">
            {mentors.map((mm, i) => (
              <button
                key={mm.name}
                onClick={() => setActive(i)}
                className={`relative shrink-0 overflow-hidden rounded-lg h-24 w-24 md:h-28 md:w-28 transition ring-2 ${
                  active === i ? "ring-[#40758C]" : "ring-transparent hover:ring-white/30"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={mm.photo} alt={mm.name} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute left-2 bottom-2 text-xs font-medium text-white/90">
                  {mm.name}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
