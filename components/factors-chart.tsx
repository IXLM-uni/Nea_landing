"use client"

import { motion, useInView, useAnimationControls } from "framer-motion"
import { useEffect, useRef } from "react"

interface ChartData {
  name: string
  value: number
  label: string
}

interface FactorsChartProps {
  data: ChartData[]
}

export function FactorsChart({ data }: FactorsChartProps) {
  const maxValue = Math.max(...data.map((item) => item.value))

  const totalValue = data.reduce((sum, item) => sum + item.value, 0)
  const calculateHours = (value: number) => {
    const hours = (value / totalValue) * 12
    return hours.toFixed(1)
  }

  // Создаем ref для отслеживания видимости компонента
  const chartRef = useRef(null)

  // Используем хук useInView для определения, когда компонент в поле зрения
  // once: true - анимация сработает только один раз
  // amount: 0.3 - анимация начнется, когда 30% виджета станет видно
  const isInView = useInView(chartRef, { once: true, amount: 0.3 })

  // Создаем контроллер для ручного запуска анимации
  const mainControls = useAnimationControls()

  // Используем useEffect для запуска анимации, как только компонент становится видимым
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  // Варианты анимации для контейнера, чтобы дочерние элементы появлялись поочередно
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Задержка между анимацией каждой полосы
      },
    },
  }

  // Варианты анимации для каждой отдельной полосы
  const barVariants = {
    hidden: { opacity: 0, width: "0%" }, // Начальное состояние: невидима и нулевая ширина
    visible: (customWidth: string) => ({
      // Конечное состояние
      opacity: 1,
      width: customWidth, // Ширина, которую мы передадим динамически
      transition: {
        duration: 0.8,
        ease: "easeOut", // Плавный выход из анимации
      },
    }),
  }

  return (
    // Привязываем ref и передаем анимационные пропсы в motion.div
    <motion.div
      ref={chartRef}
      className="space-y-1"
      variants={containerVariants}
      initial="hidden"
      animate={mainControls}
    >
      {data.map((item) => (
        <motion.div
          key={item.name}
          className="bg-gradient-to-r from-[#2A2A2A] to-[#305869]"
          style={{
            borderRight: "2px solid white",
          }}
          // Передаем варианты анимации для полосы
          variants={barVariants}
          // Передаем динамическую ширину в 'visible' состояние через custom
          custom={`${(item.value / maxValue) * 100}%`}
        >
          <div className="px-4 py-5 text-white text-right whitespace-nowrap leading-7">
            {/* Используем clamp для плавного изменения размера шрифта от 14px до 18px */}
            <span className="font-bold text-[clamp(0.875rem,2.5vw,1.125rem)]">{item.name}</span>
            {/* Для второго блока можно задать свой диапазон, например от 12px до 16px */}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
