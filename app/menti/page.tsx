import FindYourselfWidget from "@/components/landing/FindYourselfWidget"
import MentorsGallery from "@/components/landing/MentorsGallery"
import StepsWhatYouGet from "@/components/landing/StepsWhatYouGet"
import ProjectsGallery from "@/components/landing/ProjectsGallery"
import StickyCTA from "@/components/landing/StickyCTA"
import FinalCTA from "@/components/landing/FinalCTA"

export default function MentiPage() {
  return (
    <div className="min-h-screen bg-[#2A2A2A] text-white">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-10 pb-28">
        {/* Виджет "Найди себя" */}
        <FindYourselfWidget />

        {/* Блок доверия с галереей менторов */}
        <section className="mt-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">От человека к человеку</h2>
          <p className="text-white/80 mt-3 max-w-3xl text-lg">
            Из девиза появился проект Nea. Здесь ты решаешь реальные бизнес-задачи и перенимаешь опыт у менторов, профессионалов в своей профессии. Только через практику можно быстрее выйти на оффер
          </p>
          <MentorsGallery className="mt-6" />
        </section>

        {/* Что конкретно я получу (step by step) */}
        <StepsWhatYouGet />

        {/* Галерея проектов */}
        <ProjectsGallery className="mt-12" />

        {/* Финальный блок CTA без фона/рамок */}
        <div className="mt-8 mb-8">
          <FinalCTA />
        </div>
      </main>
      {/* Всегда видимый нижний CTA */}
      <StickyCTA />
    </div>
  )
}
