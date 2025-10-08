/* eslint-disable react/no-unescaped-entities */
"use client"

import { motion } from "framer-motion"

export function TrustSection({ hideStats = false, compact = false }: { hideStats?: boolean; compact?: boolean }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Задержка между появлением дочерних элементов
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className={`px-4 ${compact ? "py-4" : "py-8"}`}>
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Анимация сработает один раз, когда 20% элемента будет видно
        variants={containerVariants}
      >
        <motion.h3 variants={itemVariants} className="font-bold mb-8 text-3xl">
          Мы помогаем реализоваться
        </motion.h3>

        <motion.div
          variants={itemVariants}
          className={`bg-[#1a1a1a] rounded-2xl p-8 border border-[#305869]/20 ${compact ? "mb-4" : "mb-8"}`}
        >
          <p className="text-[#B0AEB1] leading-relaxed mb-6">
            Большинство людей проводят на работе до <b>80%</b> своей жизни, и одно из самых больших сожалений многих людей — что они
            занимались не тем, чем хотели. Большинство тестов по профориентации не дают ответа на главный вопрос: "Кем
            мне быть?". Понять, что тебе действительно подходит, можно только на практике.
          </p>
        </motion.div>

        {!hideStats && (
          <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-4">
            {" "}
            {/* Увеличил gap для лучшего вида */}
            <motion.div variants={itemVariants} className="bg-gradient-to-b from-[#305869] to-[#2A2A2A] rounded-2xl p-6">
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-[#B0AEB1]">Менторов</div>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-gradient-to-b from-[#305869] to-[#2A2A2A] rounded-2xl p-6">
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-[#B0AEB1]">Проектов создано</div>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-gradient-to-b from-[#305869] to-[#2A2A2A] rounded-2xl p-6">
              <div className="text-3xl font-bold text-white mb-2">80%</div>
              <div className="text-[#B0AEB1]">{"Нашли свою профессию"}</div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
