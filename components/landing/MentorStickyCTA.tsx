"use client"

import React from "react"

export default function MentorStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6"
        style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 8px)" }}
      >
        <div className="rounded-t-xl p-3">
          <div className="flex items-center justify-center">
            <a
              href="https://forms.yandex.ru/cloud/68e0f7121f1eb5078c1f2833/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#305869] hover:bg-[#40758C] transition text-white text-base md:text-lg font-semibold px-6 py-3 shadow-[0_2px_10px_rgba(0,0,0,.25)] hover:shadow-[0_0_22px_rgba(64,117,140,.55)] hover:scale-[1.02]"
            >
              Стать ментором
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
