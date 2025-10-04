"use client"

export function ProfessionSlider() {
  const professions = [
    [
      "Разработчик",
      "Дизайнер",
      "Маркетолог",
      "Аналитик",
      "Менеджер",
      "Консультант",
      "Data Scientist",
      "DevOps",
      "Тестировщик",
    ],
    ["Предприниматель", "Психолог", "Учитель", "Врач", "Юрист", "Архитектор", "Социолог", "Логист", "Экономист"],
    ["Журналист", "Фотограф", "Переводчик", "HR-специалист", "Финансист", "Инженер", "Биолог", "Химик", "Физик"],
    ["Копирайтер", "SMM-менеджер", "Продюсер", "Режиссер", "Актер", "Музыкант", "Художник", "Скульптор", "Танцор"],
  ]
return (
    <section className="py-3 overflow-hidden">
      <div className="space-y-2">
        {professions.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            <div
              className={`flex items-center space-x-3 ${
                rowIndex % 2 === 1 || rowIndex % 2 === 3 ? "animate-scroll-right" : "animate-scroll"
              }`}
              style={{
                animationDuration: `${150 + rowIndex * 50}s`,
                transform: rowIndex % 2 === 1 ? "translateX(100px)" : "translateX(0)",
              }}
            >
              {[...row, ...row, ...row].flatMap((profession, index, array) => {
                const elements = [
                  <div
                    key={`profession-${index}`}
                    // Удалены классы hover:scale-105 и cursor-pointer для отключения интерактивности
                    className="flex-shrink-0 px-5 py-3 md:px-6 md:py-2 lg:px-4 lg:py-2 xl:px-4 xl:py-4 bg-transparent text-white rounded-full text-sm md:text-base lg:text-lg xl:text-xl font-medium whitespace-nowrap transition-all duration-300"
                  >
                    {profession}
                  </div>
                ];

                if (index < array.length - 1) {
                  elements.push(
                    <div
                      key={`dot-${index}`}
                      className="w-2 h-2 bg-[#305869] rounded-full flex-shrink-0"
                    ></div>
                  );
                }
                return elements;
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
