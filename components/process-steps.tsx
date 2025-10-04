"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function ProcessSteps() {
  const steps = [
    {
      title: "Пройди тестирование и получи персональный отчет",
      items: ["Узнай, какая профессия тебе подходит, какие сильные стороны надо развивать"],
    },
    {
      title: "Выбери проект",
      items: ["Реализуй под руководством ментора интересный проект"],
    },
    {
      title: "Найди призвание",
      items: ["После реализации проекта в команде пойми свои сильные стороны и получи рекомендации от ментора"],
    },
  ]

  // Создаем ref для отслеживания видимости секции
  const ref = useRef(null)

  // Используем хук useInView, чтобы определить, когда секция в поле зрения
  // once: true - анимация сработает только один раз
  const isInView = useInView(ref, { once: true })

  // Определяем варианты анимации для контейнера и дочерних элементов
  const containerVariants = {
    hidden: { opacity: 0 },
    // Свойство 'visible' будет унаследовано дочерними элементами
    visible: {
      opacity: 1,
      transition: {
        // Задержка между анимациями дочерних элементов для эффекта "волны"
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    // Начальное состояние: элемент смещен вниз на 30px и полностью прозрачен
    hidden: { y: 30, opacity: 0 },
    // Конечное состояние: элемент на своей исходной позиции и полностью видим
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5, // Продолжительность анимации для одного элемента
        ease: "easeOut",
      },
    },
  }

  return (
    // Оборачиваем секцию в motion.section и привязываем ref

    <motion.section
      className="px-4 py-0"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      // Запускаем анимацию, когда элемент становится видимым
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="font-bold text-white text-center text-3xl py-4">Этапы работы с Nea</h2>
      </div>

      <div className="grid gap-4 max-w-4xl mx-auto">
        {/* Я добавил gap-4 для лучшего вида */}
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-b from-[#305869] to-[#2A2A2A] rounded-2xl p-6"
            variants={itemVariants}
          >
            <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
            <ul className="space-y-2">
              {step.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-white flex items-start">
                  <span className="text-white mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
