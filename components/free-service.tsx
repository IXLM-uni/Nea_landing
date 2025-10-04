"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function FreeService() {
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
    <section className="px-4 py-[0]">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="bg-[#1a1a1a] rounded-2xl p-15 border border-[#F0F0F0]/20 text-center mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Анимация начнется, когда 50% блока будет видно
          variants={itemVariants}
        >
          <div className="flex justify-center mb-6">
            <Image
              src="/images/LOGO.png"
              alt="NEA Logo"
              width={72}
              height={72}
              className="opacity-70"
            />
          </div>

          <h3 className="text-2xl font-bold text-[#F0F0F0] mb-4">Nea доступна всем</h3>

          <p className="text-[#B0AEB1] leading-relaxed">
            Профориентационное тестирование и 2 недели работы с ментором <b>100%</b> бесплатно
          </p>
        </motion.div>
      </div>
    </section>
  )
}
