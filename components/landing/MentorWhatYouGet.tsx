"use client"

import React from "react"
import { Crown, FlaskConical, Users } from "lucide-react"

const BRAND = "#305869"
const BRAND_LIGHT = "#40758C"

export default function MentorWhatYouGet() {
  const items = [
    {
      title: "Навыки управления и лидирования",
      desc: "От постановки целей до обратной связи и синхронизации команды.",
      Icon: Crown,
    },
    {
      title: "Проверенная гипотеза за 2 недели",
      desc: "Запускаем быстрый пилот и собираем метрики, чтобы принять решение.",
      Icon: FlaskConical,
    },
    {
      title: "Последователи",
      desc: "Комьюнити людей, которые разделяют ваш подход и идеи.",
      Icon: Users,
    },
  ]

  return (
    <section className="relative mx-auto w-[90vw] max-w-[1200px] mt-16" aria-label="Что конкретно я получу — для ментора">
      <div className="relative overflow-hidden rounded-2xl border-[0.5px] border-white/10 bg-[#2A2A2A]/60 backdrop-blur-2xl">
        {/* Световые источники */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(60% 36% at 25% 0%, ${hexA(BRAND, 0.5)} 0%, ${hexA(BRAND, 0)} 55%)`,
              filter: "blur(28px)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(60% 36% at 75% 0%, ${hexA(BRAND_LIGHT, 0.42)} 0%, ${hexA(BRAND_LIGHT, 0)} 55%)`,
              filter: "blur(32px)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.06), rgba(0,0,0,0) 30%, rgba(0,0,0,0.08) 100%)" }}
          />
        </div>

        {/* Заголовок */}
        <div className="relative z-10 px-6 md:px-10 pt-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Что конкретно я получу</h2>
        </div>

        {/* Вертикальная линия и элементы */}
        <div className="relative z-10 px-6 md:px-10 pt-6 pb-10">
          <div className="relative mx-auto max-w-[900px]">
            {/* Вертикальная линия со свечением */}
            <div className="absolute top-0 bottom-0 left-[28px] w-[2px]">
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to bottom, ${hexA(BRAND, 0)}, ${hexA(BRAND, 0.9)} 20%, ${hexA(
                    BRAND,
                    0.9
                  )} 80%, ${hexA(BRAND, 0)})`,
                }}
              />
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 size-3 rounded-full"
                style={{ background: `radial-gradient(circle, ${hexA(BRAND, 0.75)} 0%, ${hexA(BRAND, 0)} 70%)`, filter: "blur(3px)" }}
              />
              <div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 size-3 rounded-full"
                style={{ background: `radial-gradient(circle, ${hexA(BRAND, 0.75)} 0%, ${hexA(BRAND, 0)} 70%)`, filter: "blur(3px)" }}
              />
            </div>

            <div className="flex flex-col divide-y divide-white/5">
              {items.map((s, i) => (
                <div key={i} className="grid grid-cols-[56px_1fr] gap-x-6 items-center py-8">
                  <div className="relative grid place-items-center">
                    <div className="relative grid place-items-center size-[44px] md:size-14 rounded-full bg-black border border-[#40758C] shadow-[0_8px_24px_rgba(0,0,0,.35)]">
                      <s.Icon className="text-white" size={22} />
                      <div
                        className="absolute -inset-2 rounded-full"
                        style={{ background: `radial-gradient(circle, ${hexA(BRAND, 0.35)} 0%, ${hexA(BRAND, 0)} 70%)`, filter: "blur(6px)" }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-white font-normal text-2xl md:text-3xl leading-tight">{s.title}</div>
                    <div className="text-white/70 text-base md:text-lg leading-snug mt-2 max-w-prose">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function hexA(hex: string, a: number) {
  const h = hex.replace("#", "")
  const bigint = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return `rgba(${r}, ${g}, ${b}, ${a})`
}
