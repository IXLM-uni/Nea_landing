import type React from "react"
import type { Metadata } from "next"
import { Onest } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { Header } from "@/components/header"

const onest = Onest({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-onest",
})

export const metadata: Metadata = {
  title: "Nea — профориентация",
  description: "Платформа профориентации: Менти, Менторам, Профориентация.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`font-sans ${onest.variable}`}>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
