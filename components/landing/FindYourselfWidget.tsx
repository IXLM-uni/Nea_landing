"use client"

import React, { useEffect, useMemo, useRef, useState } from "react"
import { Briefcase, GraduationCap, Users } from "lucide-react"

// Виджет "Найди себя"
// - Ширина ~90vw, высота ~100svh минус хедер
// - Фон совпадает с задником страницы, поверх — два радиальных источника света, центр ровно на верхней границе
// - Волнистая линия (тонкая, фирменный цвет), 3 шага с иконками и заголовками

const VB_WIDTH_DEFAULT = 1518
const VB_HEIGHT_DEFAULT = 335

// Базовая кривая (fallback), если не загрузится внешний SVG
const PATH_D_DEFAULT =
  "M1 271.001C110.5 308.501 294.5 369.623 437 307.001C548.5 258.002 645.386 45.891 807.5 5.00079C976 -37.5001 1069 244.501 1161 241.501C1253 238.501 1362 83.0021 1415 76.5021C1457.4 71.3021 1501 85.6687 1517.5 93.5021"

const BRAND = "#40758C" // фирменный цвет (из хедера)
const BLUE = "#3DA5F5" // дополнительный синий для свечения

// Точные позиции маркеров вдоль длины пути: 20%, 50%, 80%
const STEP_POS_PCT = [0.2, 0.5, 0.8]

type Pt = { x: number; y: number }

export function FindYourselfWidget() {
  const svgRef = useRef<SVGSVGElement | null>(null)
  const pathRef = useRef<SVGPathElement | null>(null)
  const [points, setPoints] = useState<Pt[] | null>(null)
  const [vbWidth, setVbWidth] = useState<number>(VB_WIDTH_DEFAULT)
  const [vbHeight, setVbHeight] = useState<number>(VB_HEIGHT_DEFAULT)
  const [pathD, setPathD] = useState<string>(PATH_D_DEFAULT)

  // Описания шагов
  const steps = useMemo(
    () => [
      {
        title: "Обучись практическим навыкам",
        desc: "Решай реальные задачи, которые пригодятся в карьере",
        Icon: GraduationCap,
        place: "top" as const,
      },
      {
        title: "Работай с лучшими специалистами",
        desc: "Задавай вопросы ментору и получи оценку своей работы",
        Icon: Users,
        place: "bottom" as const,
      },
      {
        title: "Получи первый оффер в компанию",
        desc: "При успешном выполнении задач получи оффер в компанию",
        Icon: Briefcase,
        place: "top" as const,
      },
    ],
    []
  )

  // Подхватываем внешний SVG из public/images/Vector 452.svg (если есть)
  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch("/images/Vector 452.svg")
        if (!res.ok) return
        const txt = await res.text()
        const parser = new DOMParser()
        const doc = parser.parseFromString(txt, "image/svg+xml")
        const path = doc.querySelector("path")
        const svg = doc.querySelector("svg")
        if (path && svg && !cancelled) {
          const vb = svg.getAttribute("viewBox")
          if (vb) {
            const parts = vb.trim().split(/\s+/)
            const w = parseFloat(parts[2])
            const h = parseFloat(parts[3])
            if (!Number.isNaN(w) && !Number.isNaN(h)) {
              setVbWidth(w)
              setVbHeight(h)
            }
          } else {
            const w = parseFloat(svg.getAttribute("width") || "")
            const h = parseFloat(svg.getAttribute("height") || "")
            if (!Number.isNaN(w) && !Number.isNaN(h)) {
              setVbWidth(w)
              setVbHeight(h)
            }
          }
          setPathD(path.getAttribute("d") || PATH_D_DEFAULT)
        }
      } catch (_) {
        // ignore
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  // Рассчитать координаты точек вдоль пути — по фиксированным долям длины
  useEffect(() => {
    const calc = () => {
      const svg = svgRef.current
      const path = pathRef.current
      if (!svg || !path) return
      const rect = svg.getBoundingClientRect()
      const total = path.getTotalLength()
      const pts = STEP_POS_PCT.map((p) => {
        const pt = path.getPointAtLength(total * p)
        return {
          x: (pt.x / vbWidth) * rect.width,
          y: (pt.y / vbHeight) * rect.height,
        }
      })
      setPoints(pts)
    }
    calc()
    const ro = new ResizeObserver(() => calc())
    if (svgRef.current) ro.observe(svgRef.current)
    return () => ro.disconnect()
  }, [vbWidth, vbHeight, pathD])

  return (
    <section
      className="relative mx-auto w-[90vw] max-w-[1200px] mt-0 md:mt-12"
      aria-label="Найди себя — 3 шага"
    >
      {/* Карточка‑контейнер */}
      <div
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#2A2A2A]/60 backdrop-blur-2xl"
        style={{ minHeight: "calc(70svh - 96px)" }}
      >
        {/* Световые источники: оба наверху, центр лежит на верхней границе контейнера */}
        <div className="pointer-events-none absolute inset-0">
          {/* Левый радиальный источник — сильнее центр, шире охват */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(60% 36% at 25% 0%, ${hexA(BRAND, 0.58)} 0%, ${hexA(
                BRAND,
                0
              )} 55%)`,
              filter: "blur(32px)",
            }}
          />
          {/* Правый радиальный источник — сильнее центр, шире охват */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(60% 36% at 75% 0%, ${hexA(BLUE, 0.52)} 0%, ${hexA(
                BLUE,
                0
              )} 55%)`,
              filter: "blur(36px)",
            }}
          />
          {/* Лёгкий затемняющий градиент для контраста текста */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.06), rgba(0,0,0,0.00) 30%, rgba(0,0,0,0.08) 100%)",
            }}
          />
        </div>

        {/* Заголовок */}
        <div className="relative z-10 px-6 md:px-10 pt-8 md:pt-12 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Найди себя
          </h2>
        </div>

        {/* Вертикальная колонка: линия + иконки + заголовки справа */}
        <div className="relative z-10 px-6 md:px-10 pt-8 md:pt-12 pb-12">
          <div className="relative mx-auto max-w-[900px]">
            {/* Вертикальная линия: тоньше у начала и конца + мягкое свечение */}
            <div className="absolute top-0 bottom-0 left-[28px] w-[2px]">
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to bottom, ${hexA(BRAND, 0.0)}, ${hexA(BRAND, 0.9)} 20%, ${hexA(
                    BRAND,
                    0.9
                  )} 80%, ${hexA(BRAND, 0.0)})`,
                }}
              />
              {/* свечение у концов */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 size-3 rounded-full" style={{
                background: `radial-gradient(circle, ${hexA(BRAND, 0.75)} 0%, ${hexA(BRAND, 0)} 70%)`, filter: 'blur(3px)'
              }} />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 size-3 rounded-full" style={{
                background: `radial-gradient(circle, ${hexA(BRAND, 0.75)} 0%, ${hexA(BRAND, 0)} 70%)`, filter: 'blur(3px)'
              }} />
            </div>

            <div className="flex flex-col divide-y divide-white/5">
              {steps.map((s, i) => (
                <div key={i} className="grid grid-cols-[56px_1fr] gap-x-6 items-center py-8">
                  {/* Иконка */}
                  <div className="relative grid place-items-center">
                    <div className="relative grid place-items-center size-14 rounded-full bg-black border-2 border-[#40758C] shadow-[0_8px_24px_rgba(0,0,0,.35)]">
                      <s.Icon className="text-white" size={26} />
                      {/* внешнее фирменное свечение */}
                      <div className="absolute -inset-2 rounded-full" style={{
                        background: `radial-gradient(circle, ${hexA(BRAND, 0.35)} 0%, ${hexA(BRAND, 0)} 70%)`, filter: 'blur(6px)'
                      }} />
                    </div>
                  </div>
                  {/* Заголовок и описание справа */}
                  <div>
                    <div className="text-white font-normal text-2xl md:text-3xl leading-tight">
                      {s.title}
                    </div>
                    <div className="text-white/70 text-base md:text-lg leading-snug mt-2 max-w-prose">
                      {s.desc}
                    </div>
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

function StepMarker({
  idx,
  p,
  title,
  place,
  Icon,
}: {
  idx: number
  p: Pt
  title: string
  place: "top" | "bottom"
  Icon: React.ComponentType<{ size?: number; className?: string }>
}) {
  // Смещение подписи относительно центра иконки (увеличено для крупного текста)
  const labelTop = place === "top" ? -120 : 76

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: p.x, top: p.y }}
    >
      {/* Иконка с подсветкой */}
      <div className="relative">
        {/* Свет вокруг иконки */}
        <div
          className="absolute -inset-6 rounded-full"
          style={{
            background:
              idx % 2 === 0
                ? `radial-gradient(40% 40% at 50% 50%, ${hexA(BRAND, 0.35)} 0%, ${hexA(BRAND, 0)} 70%)`
                : `radial-gradient(40% 40% at 50% 50%, ${hexA("#3DA5F5", 0.28)} 0%, ${hexA("#3DA5F5", 0)} 70%)`,
            filter: "blur(10px)",
          }}
        />
        <div className="relative grid place-items-center size-14 md:size-16 rounded-full bg-white border border-white/20 shadow-[0_8px_24px_rgba(0,0,0,.35)]">
          <Icon className="text-[#40758C]" size={26} />
        </div>
      </div>

      {/* Окно-заголовок, центр окна по X совпадает с центром иконки */}
      <div
        className="absolute text-white font-normal text-2xl md:text-3xl leading-tight select-none text-left -translate-x-1/2"
        style={{ left: 0, top: labelTop }}
      >
        <div className="max-w-[380px] md:max-w-[460px] bg-white/8 backdrop-blur-sm border border-white/10 rounded-lg px-5 py-4 shadow-[0_6px_18px_rgba(0,0,0,.28)]">
          {title}
        </div>
      </div>
    </div>
  )}

// Утилита для добавления альфы к HEX
function hexA(hex: string, a: number) {
  const h = hex.replace("#", "")
  const bigint = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

export default FindYourselfWidget
