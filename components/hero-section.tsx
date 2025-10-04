import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative px-4 py-8 text-center">
      {/* Декоративные изображения временно отключены до добавления файлов в /public/images */}

      <div className="relative z-10 max-w-4xl mx-auto animate-fade-in">
        <div className="mb-2">
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-white py-12">{"Nea\n"}</h1>
        </div>

        <div className="mb-3">
          <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 text-balance">
            {"Новый формат профориентации:\n cоздание проектов вместе с опытными специалистами"}
          </h2>
          <div className="text-lg md:text-xl text-[#B0AEB1] space-y-1 mt-4">
            <p>Найди ментора | Узнай свои сильные стороны | Реализуй проекты </p>
          </div>
        </div>

        <a href="https://t.me/NewEmploymentAdvisorBot" target="_blank" rel="noopener noreferrer">
          <Button className="bg-[#305869] hover:bg-[#305869]/90 text-white rounded-full text-lg font-medium animate-glow transition-all duration-300 hover:scale-105 px-10 sm:px-16 py-4 mt-6">
            <span>Пройти тестирование </span>
            <span className="text-gray-400">5 минут</span>
          </Button>
        </a>
      </div>
    </section>
  )
}
