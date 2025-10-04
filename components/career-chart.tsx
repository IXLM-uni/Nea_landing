"use client"

import { FactorsChart } from "./factors-chart"
import { motion } from "framer-motion"

export function CareerChart() {
  const professions = [
    {
      name: "Программист",
      percentage: 85,
      description:
        "Написание, тестирование, отладка и поддержка программного кода на различных языках программирования",
      color: "#305869",
    },
    {
      name: "Дизайнер",
      percentage: 65,
      description:
        "Разработка пользовательских интерфейсов (UI) и пользовательского опыта (UX), создание визуальных концепций, макетов и прототипов",
      color: "#305869",
    },
    {
      name: "Аналитик",
      percentage: 45,
      description:
        "Сбор и анализ требований пользователей и бизнес-процессов, выявление потребностей",
      color: "#305869",
    },
  ]

  const careerFactors = [
    { name: "Стратегическое мышление", value: 5 },
    { name: "Навыки переговоров", value: 3.5 },
    { name: "Опыт руководства", value: 2.5 },
    { name: "Навыки работы с ИИ", value: 2 },
    { name: "Эмпатия", value: 1.5 },
  ]

  const chartData = careerFactors.map((factor, index) => ({
    ...factor,
    label: `Топ ${index + 1} фактор`,
  }))

  // Определяем варианты анимации для контейнера и дочерних элементов
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // Задержка между анимациями дочерних элементов
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    // Начальное состояние: элемент смещен вниз и невидим
    hidden: { y: 20, opacity: 0 },
    // Конечное состояние: элемент на своем месте и видим
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring", // Добавляет "пружинный" эффект
        stiffness: 100,
      },
    },
  }

  const barVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="px-4 py-0">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-1"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white text-center py-4 mt-20">Персональный отчет</h2>
        </motion.div>

        {/* Используем motion.div и применяем варианты анимации */}
        <motion.div
          className="grid gap-0" // Увеличил gap для лучшего визуального разделения
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {professions.map((profession) => (
            // Заменяем div на motion.div и применяем варианты для дочерних элементов
            <motion.div
              key={profession.name}
              className="bg-gradient-to-b from-[#305869] to-[#2A2A2A] rounded-2xl p-3"
              variants={itemVariants} // Анимация для каждого блока
            >
              <div className="text-2xl font-bold text-white mb-1">{profession.name}</div>

              <div className="text-[#B0AEB1] mb-1 text-sm leading-relaxed">{profession.description}</div>

              <div className="mb-1">
                <div className="w-full h-3 bg-[#5F5F5F]/30 rounded-full overflow-hidden">
                  {/* Анимация для полосы прогресса */}
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      backgroundColor: profession.color,
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${profession.percentage}%` }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                  />
                </div>
              </div>

              <div className="text-white font-bold text-lg">{profession.percentage}%</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Анимация для второго блока */}
        <motion.div
          className="mt-0"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }} // Небольшая задержка для последовательного появления
        >
          <h3 className="text-2xl font-bold text-white mb-2 text-center">5 Факторов для развития </h3>
          <FactorsChart data={chartData} />
        </motion.div>
      </div>
    </section>
  )
}
