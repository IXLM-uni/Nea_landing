export default function MentorRequirements() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Что требуется от ментора</h2>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Время и нагрузка */}
        <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
          <div className="text-white/90 text-base md:text-lg mb-2">Время и нагрузка</div>
          <ul className="space-y-2 text-white/80">
            <li>— Проект длится 2 недели.</li>
            <li>— Примерное участие ментора — около 2 часов в неделю.</li>
          </ul>
        </div>

        {/* Формат и площадка */}
        <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
          <div className="text-white/90 text-base md:text-lg mb-2">Формат и где проходит</div>
          <ul className="space-y-2 text-white/80">
            <li>— Онлайн: рабочий чат и короткие созвоны.</li>
            <li>— Материалы храним в общем пространстве (Notion/Google Docs) — по договорённости.</li>
          </ul>
        </div>

        {/* Участие по встречам */}
        <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
          <div className="text-white/90 text-base md:text-lg mb-2">Участие по встречам</div>
          <ul className="space-y-2 text-white/80">
            <li>— Стартовый созвон: 15–30 минут (постановка цели, рамок, артефактов).</li>
            <li>— Промежуточные встречи по итогам спринтов: оценка и фидбэк.</li>
            <li>— Финальная презентация: 15–30 минут (итоги и рекомендации).</li>
          </ul>
        </div>

        {/* Оценка результатов */}
        <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
          <div className="text-white/90 text-base md:text-lg mb-2">Оценка результатов</div>
          <ul className="space-y-2 text-white/80">
            <li>— Экспертная промежуточная оценка по итогам спринтов.</li>
            <li>— Финальная оценка участников и проекта.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
