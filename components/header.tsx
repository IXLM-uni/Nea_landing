"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const NAV_ITEMS = [
  { label: "Менти", href: "/menti" },
  { label: "Менторам", href: "/mentors" },
  { label: "Профориентация", href: "/proforientation" },
]

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-[#2A2A2A] border-b border-white/10">
      <div className="w-full pr-4 sm:pr-6 pl-8 md:pl-36 relative">
        <div className="flex h-16 items-center md:gap-12 justify-start">
          {/* Логотип слева */}
          <Link href="/" className="flex items-center gap-2 select-none">
            <Image src="/images/LOGO.png" alt="NEA" width={110} height={26} priority />
          </Link>

          {/* Навигация (desktop) */}
          <nav className="hidden md:flex items-center gap-12 text-lg md:text-xl font-bold relative z-30">
            {NAV_ITEMS.map((item) => {
              const active =
                pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href))
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    "transition-colors " + (active ? "text-[#40758C]" : "text-white")
                  }
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Кнопка-бургер (mobile) */}
          <button
            aria-label="Открыть меню"
            className="ml-auto p-2 text-white"
            onClick={() => setOpen((v) => !v)}
         >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Мобильное меню */}
          {open && (
            <div className="absolute right-4 top-16 z-50 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-lg p-2">
              <ul className="min-w-[200px] py-1">
                {NAV_ITEMS.map((item) => {
                  const active = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href))
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block px-4 py-3 text-base font-light ${active ? "text-[#40758C]" : "text-white"}`}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
