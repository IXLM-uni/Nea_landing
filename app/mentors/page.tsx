import MentorsGallery from "@/components/landing/MentorsGallery"
import ProjectsGallery from "@/components/landing/ProjectsGallery"
import MentorWhatYouGet from "@/components/landing/MentorWhatYouGet"
import MentorFinalCTA from "@/components/landing/MentorFinalCTA"
import MentorStickyCTA from "@/components/landing/MentorStickyCTA"

export default function MentorsPage() {
  return (
    <div className="min-h-screen bg-[#2A2A2A] text-white">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 pt-24 pb-28">
        {/* Intro — Кто мы и какую проблему решаем */}
        <section>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Создай проект — передай опыт</h1>
          <p className="text-white/80 mt-4 max-w-3xl text-lg">
            Мы помогаем экспертам запускать короткие реальные проекты с командой мотивированных участников. За 2 недели
            вы передаёте опыт, проверяете гипотезу и прокачиваете управленческие навыки.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Проблемы менторов */}
            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <div className="text-white/90 text-lg font-medium mb-2">С какими запросами приходят менторы</div>
              <ul className="space-y-2 text-white/80">
                <li>— Я не расту</li>
                <li>— Я не умею управлять людьми</li>
                <li>— Я не умею доносить мысли чётко</li>
              </ul>
            </div>
            {/* Результаты/статусы */}
            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <div className="text-white/90 text-lg font-medium mb-2">Что получите</div>
              <ul className="space-y-2 text-white/80">
                <li>— Научитесь выстраивать процесс и давать понятную обратную связь</li>
                <li>— Последователи: команда, которая разделяет подход</li>
                <li>— Команда для пилота вашей гипотезы</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm">Статус ментора</span>
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm">Ролевая модель в профессии</span>
              </div>
            </div>
          </div>
        </section>

        {/* Trust — Почему мне доверять */}
        <section className="mt-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Почему мне доверять?</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <div className="text-white/90 text-lg font-medium">Кто к нам приходит</div>
              <p className="text-white/80 mt-2">Талантливые участники из топ‑вузов, уже с практическим опытом.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <div className="text-white/90 text-lg font-medium">Что уже сделали</div>
              <p className="text-white/80 mt-2">Покажем примеры решённых кейсов и метрики по завершённым проектам.</p>
            </div>
          </div>

          {/* Витрина менторов как социальное доказательство */}
          <MentorsGallery className="mt-8" />
        </section>

        {/* WhatYouGet — Что конкретно я получу (в стиле FindYourselfWidget) */}
        <MentorWhatYouGet />

        {/* Projects + Testimonials — Кто уже прошёл путь */}
        <section className="mt-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Кто уже прошёл этот путь</h2>
          <p className="text-white/80 mt-3 max-w-3xl">Снизу — реальные проекты, которые делали наши команды с менторами.</p>
          <ProjectsGallery className="mt-8" />

          {/* Отзывы менторов */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <blockquote className="rounded-2xl border border-white/10 bg-black/20 p-6 text-white/80">
              «За две недели мы провалидировали гипотезу и собрали первые метрики. Команда — заряженная, с хорошей дисциплиной.»
              <div className="mt-3 text-white/60 text-sm">— Ментор проекта в FinTech</div>
            </blockquote>
            <blockquote className="rounded-2xl border border-white/10 bg-black/20 p-6 text-white/80">
              «Классный формат: быстро, по делу, с понятными артефактами. Взял одного участника к себе на стажировку.»
              <div className="mt-3 text-white/60 text-sm">— Ментор в продуктовой команде</div>
            </blockquote>
          </div>
        </section>

        {/* Финальный CTA — менторы */}
        <MentorFinalCTA />
      </main>
      {/* Всегда видимая нижняя кнопка — менторы */}
      <MentorStickyCTA />
    </div>
  )
}
