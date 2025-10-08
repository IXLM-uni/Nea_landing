import MentorsGallery from "@/components/landing/MentorsGallery"
import ProjectsGallery from "@/components/landing/ProjectsGallery"
import MentorWhatYouGet from "@/components/landing/MentorWhatYouGet"
import MentorFinalCTA from "@/components/landing/MentorFinalCTA"
import MentorRequirements from "@/components/landing/MentorRequirements"
import MentorStickyCTA from "@/components/landing/MentorStickyCTA"

export default function MentorsPage() {
  return (
    <div className="min-h-screen bg-[#2A2A2A] text-white">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 pt-24 pb-28">
        {/* WhatYouGet — Что конкретно я получу (поднято наверх, минимальный отступ) */}
        <MentorWhatYouGet className="mt-4" />

        {/* Короткий Intro — кто мы */}
        <section className="mt-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Создай проект — передай опыт</h1>
          <p className="text-white/80 mt-4 max-w-3xl text-lg">
            Мы помогаем экспертам запускать короткие реальные проекты с командой мотивированных участников. За 2 недели
            вы передаёте опыт, проверяете гипотезу и прокачиваете управленческие навыки.
          </p>
        </section>

        {/* Trust — Почему мне доверять */}
        <section className="mt-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Нам доверяют</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          </div>

          {/* Витрина менторов как социальное доказательство */}
          <MentorsGallery className="mt-8" />
        </section>

        {/* WhatYouGet — Что конкретно я получу (в стиле FindYourselfWidget) */}
        <MentorWhatYouGet />

        {/* Requirements — Что требуется от ментора */}
        <MentorRequirements />

        {/* Финальный CTA — менторы */}
        <MentorFinalCTA />
      </main>
      {/* Всегда видимая нижняя кнопка — менторы */}
      <MentorStickyCTA />
    </div>
  )
}
