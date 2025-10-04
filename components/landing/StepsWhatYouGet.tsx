"use client"

import React from "react"

const BRAND = "#305869" // фирменный темноморской
const GREY1 = "#9CA3AF" // серый (Tailwind gray-400)
const GREY2 = "#6B7280" // серый (Tailwind gray-500)

export default function StepsWhatYouGet() {

  const roles = [
    "Product Manager",
    "Project Manager",
    "UX/UI Designer",
    "Frontend-разработчик",
    "Backend-разработчик",
    "Full‑stack разработчик",
    "QA Engineer",
    "DevOps",
    "Data Analyst",
    "Data Scientist",
    "Data Engineer",
    "Business Analyst",
    "Product Marketing Manager",
    "Performance‑маркетолог",
    "SMM‑менеджер",
    "Контент‑маркетолог",
    "SEO‑специалист",
    "Motion/Video Designer",
    "iOS/Android разработчик",
    "Python Developer",
  ]

  const skills: string[] = [
    "Unit-экономика",
    "A/B-тестирование",
    "JTBD",
    "CustDev",
    "CJM",
    "SQL",
    "Python",
    "Git",
    "Agile/Scrum",
    "Jira",
    "Notion",
    "Figma",
    "UX Research",
    "Прототипирование",
    "Дизайн-система",
    "Data Visualization",
    "Power BI",
    "Google Analytics",
    "Yandex Metrica",
    "SEO",
    "PPC/Performance",
    "Retention/CRM",
    "Email/SMS/Push",
    "GitHub",
    "CI/CD",
    "Docker",
    "Kubernetes",
    "REST/GraphQL",
    "API-интеграции",
  ]

  const sprints = [
    { name: "Спринт 1", dates: "Пн — Ср" },
    { name: "Спринт 2", dates: "Ср — Сб" },
    { name: "Спринт 3", dates: "Пн — Ср" },
    { name: "Спринт 4", dates: "Ср — Сб" },
  ]

  return (
    <section className="relative mx-auto w-[90vw] max-w-[1200px] mt-16" aria-label="Что конкретно я получу — шаг за шагом">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#2A2A2A]/60 backdrop-blur-2xl">
        {/* Фоновые радиальные источники */}
        <div className="pointer-events-none absolute inset-0">
          {/* Верхние серые импульсы */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(60% 36% at 25% 0%, ${hexA(GREY1, 0.35)} 0%, ${hexA(GREY1, 0)} 55%)`,
              filter: "blur(26px)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(60% 36% at 75% 0%, ${hexA(GREY2, 0.28)} 0%, ${hexA(GREY2, 0)} 55%)`,
              filter: "blur(28px)",
            }}
          />
          {/* Нижний фирменный импульс */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(60% 36% at 50% 100%, ${hexA(BRAND, 0.42)} 0%, ${hexA(BRAND, 0)} 60%)`,
              filter: "blur(26px)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.06), rgba(0,0,0,0) 30%, rgba(0,0,0,0.08) 100%)" }}
          />
        </div>

        <div className="relative z-10 px-6 md:px-10 py-10">
          {/* Заголовок и подзаголовок */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">От выбора роли — до кейса и оффера за 2 недели</h2>
            <p className="text-white/80 text-lg mt-4 max-w-3xl mx-auto">
              Чёткий маршрут: определяешь сильные стороны, выбираешь проект и роль, работаешь в спринтах с ментором и
              получаешь портфолио‑кейс с оценкой. В конце — шанс на оффер.
            </p>
          </div>

          {/* Основная сетка: слева «Что заберёшь», справа — роли */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-[minmax(0,520px)_1fr] gap-8">
            {/* Что ты заберёшь с собой */}
            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <div className="text-white/90 text-base md:text-lg mb-3">Что ты заберёшь с собой</div>
              <ul className="space-y-2 text-white/80">
                <li>— Сертификат о прохождении проекта и строчка в резюме</li>
                <li>— Оценка работы от ментора (по рубрикатору) и рекомендации</li>
                <li>— Готовый кейс с артефактами в портфолио</li>
                <li>— Нетворк с ментором и командой</li>
                <li>— Шанс на оффер при успешном выполнении задач</li>
              </ul>
            </div>

            {/* Роли и направления */}
            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <div className="text-white/90 text-base md:text-lg mb-3">Роли и направления</div>
              <div className="flex flex-wrap gap-2 max-h-56 overflow-y-auto pr-1 md:max-h-none md:overflow-visible">
                {roles.map((r) => (
                  <span key={r} className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Ниже: слева «Спринты», справа — «Навыки и инструменты» */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Спринты / длительность */}
            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <div className="text-white/90 text-base md:text-lg">Как устроена работа</div>
              <ul className="mt-3 space-y-2 text-white/80">
                <li>— Проект длится 2 недели и включает 4 спринта по ~3 дня</li>
                <li>— Спринты: Понедельник–Среда и Среда–Суббота (командная работа)</li>
                <li>— Нагрузка: ориентир ~10 часов на весь период</li>
              </ul>
            </div>

            {/* Навыки и инструменты */}
            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <div className="text-white/90 text-base md:text-lg mb-3">Навыки и инструменты</div>
              <div className="flex flex-wrap gap-2 max-h-56 overflow-y-auto pr-1 md:max-h-none md:overflow-visible">
                {skills.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// Локальная утилита для rgba из HEX
function hexA(hex: string, a: number) {
  const h = hex.replace("#", "")
  const bigint = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return `rgba(${r}, ${g}, ${b}, ${a})`
}
