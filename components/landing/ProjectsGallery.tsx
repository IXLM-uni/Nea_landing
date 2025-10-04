"use client"

import React, { useMemo, useState } from "react"

const BRAND = "#40758C"

type Project = {
  id: string
  mentor: {
    name: string
    role: string
    company: string
    companyLogo?: string
  }
  headline: string
  introBullets: string[]
  achievements?: string[]
  whatYouGet: string[]
  project: {
    title: string
    company: string
    description: string
    problem: string
    solution: string
  }
  roles: Array<{
    role: string
    bullets: string[]
  }>
  metrics?: string[]
  deliverables?: string[]
}

export default function ProjectsGallery({ className = "" }: { className?: string }) {
  const projects = useMemo<Project[]>(
    () => [
      {
        id: "larin",
        mentor: {
          name: "Алексей Ларин",
          role: "Product Marketing Lead",
          company: "СберЗдоровье",
          companyLogo: "/images/Companies_logos/Sber_health_logo.png",
        },
        headline: "Проект в сфере телемедицины: профилактические чекапы",
        introBullets: ["Кейс про лидогенерацию и упаковку ценности продукта"],
        whatYouGet: [
          "Сильный реальный кейс в портфолио",
          "Честный фидбэк от опытного специалиста",
          "Прямой выход на ментора для лучших участников",
        ],
        project: {
          title: "Привлечение аудитории в телемедицину для профилактических чекапов",
          company: "СберЗдоровье",
          description:
            "Фокус: привлечение новой аудитории за счёт смещения акцента с лечения острых заболеваний на профилактику",
          problem:
            "Пользователи обращаются к телемедицине при «горящих» проблемах, а не для профилактики. На рынке мало удобных комплексных продуктов",
          solution:
            "Разработать и протестировать 3–4 пакетных «теле‑чекапа», чтобы привлечь новый сегмент и сформировать привычку регулярного использования",
        },
        roles: [
          {
            role: "Продакт/Проектный менеджер",
            bullets: [
              "Координация команды, достижение результата",
              "Выделение конкурентных преимуществ",
              "Тестирование гипотез на реальном рынке",
            ],
          },
          {
            role: "Маркетолог",
            bullets: [
              "Создание креативов для каналов привлечения",
              "Поиск ЦА, готовой платить за продукт",
              "Анализ результатов кампаний на основе цифр",
            ],
          },
          {
            role: "UI/UX‑дизайнер",
            bullets: [
              "Визуализация ценности продукта",
              "Фокус внимания на ключевых элементах интерфейса",
              "Создание лендинга",
            ],
          },
          {
            role: "Аналитик",
            bullets: [
              "Расчёт unit‑экономики",
              "Формулирование выводов для всей команды",
              "Определение ключевых метрик",
            ],
          },
        ],
        deliverables: [
          "MVP 3–4 пакетных «теле‑чекапов»",
          "Лендинг/презентация ценности",
          "Первые метрики интереса и конверсий",
        ],
      },
      {
        id: "falkov",
        mentor: {
          name: "Никита Фальков",
          role: "Product Manager / BizDev",
          company: "Salmon",
          companyLogo: "/images/Companies_logos/Salmon_logo.png",
        },
        headline: "FinTech: реферальная программа для снижения CAC",
        introBullets: ["Задача на рост через органический канал привлечения"],
        whatYouGet: [
          "Сильный реальный кейс в портфолио",
          "Фидбэк от человека из индустрии",
          "Рекомендация и шанс попасть в команду Salmon для лучших",
        ],
        project: {
          title: "Запуск реферальной программы для снижения CAC",
          company: "Salmon (FinTech)",
          description:
            "Компания предоставляет потребительские кредиты и BNPL через мобильное приложение",
          problem:
            "Растущая стоимость привлечения из традиционной рекламы ухудшает экономику продукта",
          solution:
            "Внедрить реферальную программу: B2B‑клиенты (владельцы магазинов) получают бонусы за приглашения, что создаёт более дешёвый канал",
        },
        roles: [
          {
            role: "Продакт‑менеджер",
            bullets: [
              "Анализ 5 конкурентов ЮВА по реферальным программам",
              "5–7 CustDev‑интервью с лояльными клиентами",
              "Изучение вариантов онбординга через ИИ‑агентов",
            ],
          },
          {
            role: "UI/UX‑дизайнер",
            bullets: [
              "User Flow и прототип экрана реферальной программы",
              "3 визуальных референса для промо внутри приложения",
            ],
          },
          {
            role: "Аналитик",
            bullets: [
              "Проектирование воронки и требования к трекингу для уникальных кодов",
              "Прогноз экономического эффекта",
              "Создание тестового UI‑компонента на одном из экранов",
            ],
          },
          {
            role: "Маркетолог",
            bullets: [
              "3 текста для анонса (push/email/соцсети)",
              "Сегментация текущей базы для первого анонса",
            ],
          },
        ],
        metrics: [
          "Share Rate (отправившие приглашение) > 10%",
          "CR приглашённых в клиента > 2%",
        ],
        deliverables: [
          "MVP реферальной программы",
          "Прототип экрана реферальной программы",
          "Система трекинга реферальных кодов",
          "Тексты анонса (push/email/соцсети)",
        ],
      },
    ],
    []
  )

  const [active, setActive] = useState(0)
  const p = projects[active]

  return (
    <section className={`relative mx-auto w-[90vw] max-w-[1200px] ${className}`} aria-label="Галерея проектов">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#2A2A2A]/60 backdrop-blur-xl">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,520px)_1fr] gap-8 p-6 md:p-10 items-start">
          {/* Левая колонка: карточка проекта */}
          <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-center">
            <div className="flex items-center justify-center gap-3">
              {p.mentor.companyLogo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.mentor.companyLogo} alt={p.project.company} className="h-10 md:h-12 object-contain" />
              ) : null}
              <div className="text-white/90 font-bold text-2xl md:text-4xl leading-tight">{p.project.company}</div>
            </div>
            <h3 className="mt-3 text-2xl text-white leading-tight">{p.project.title}</h3>
            <p className="mt-2 text-white/80">{p.project.description}</p>
            <ul className="mt-3 space-y-1 text-white/80 text-sm md:text-base text-left md:text-center">
              {p.introBullets.map((b) => (
                <li key={b}>— {b}</li>
              ))}
            </ul>
            <div className="mt-3 grid gap-2 text-white/80 text-left md:text-center">
              <div><span className="text-white/60">Проблема:</span> {p.project.problem}</div>
              <div><span className="text-white/60">Решение:</span> {p.project.solution}</div>
            </div>
          </div>

          {/* Правая колонка: описание проекта и роли */}
          <div className="min-w-0">
            <div className="text-white/90 text-lg md:text-xl">Роли и задачи</div>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 max-h-80 overflow-y-auto pr-1 md:max-h-none md:overflow-visible">
              {p.roles.map((r) => (
                <div key={r.role} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="font-medium">{r.role}</div>
                  <ul className="mt-2 space-y-1 text-white/80 text-sm">
                    {r.bullets.map((b) => (
                      <li key={b}>• {b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Схема и CTA убраны по просьбе пользователя */}
          </div>
        </div>

        {/* Нижняя лента превью проектов: логотипы компаний */}
        <div className="border-t border-white/10 bg-black/10">
          <div className="flex gap-4 overflow-x-auto p-4">
            {projects.map((pp, i) => (
              <button
                key={pp.id}
                onClick={() => setActive(i)}
                className={`relative shrink-0 overflow-hidden rounded-lg h-24 w-36 md:h-28 md:w-44 transition ring-2 ${active === i ? "ring-[#40758C]" : "ring-transparent hover:ring-white/30"}`}
              >
                <div className="absolute inset-0 grid place-items-center bg-white/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {pp.mentor.companyLogo && <img src={pp.mentor.companyLogo} alt={pp.project.company} className="h-10 md:h-12 object-contain" />}
                </div>
                <div className="absolute left-2 bottom-2 right-2 text-xs font-medium text-white/90 truncate">{pp.project.title}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
