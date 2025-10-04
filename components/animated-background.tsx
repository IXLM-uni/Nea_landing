"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight // Use full document height instead of viewport height
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("scroll", resizeCanvas)

    const dots: Array<{ x: number; y: number; baseY: number; phase: number }> = []
    const dotSpacing = 25 // Slightly smaller spacing for denser dot pattern
    const waveAmplitude = 12 // Reduced amplitude for subtler wave effect
    const waveSpeed = 0.015 // Slower wave speed for more elegant animation

    // Create dot grid
    for (let x = 0; x < canvas.width + dotSpacing; x += dotSpacing) {
      for (let y = 0; y < canvas.height + dotSpacing; y += dotSpacing) {
        dots.push({
          x,
          y,
          baseY: y,
          phase: Math.random() * Math.PI * 2,
        })
      }
    }

    let animationFrame: number
    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      time += waveSpeed

      dots.forEach((dot) => {
        // Create wave effect
        const wave = Math.sin(time + dot.x * 0.008 + dot.phase) * waveAmplitude // Adjusted wave frequency
        dot.y = dot.baseY + wave

        const opacity = 0.08 + (Math.sin(time + dot.x * 0.008 + dot.phase) + 1) * 0.04 // Reduced opacity for subtler effect
        ctx.fillStyle = `rgba(95, 95, 95, ${opacity})`
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, 1.2, 0, Math.PI * 2) // Slightly larger dots
        ctx.fill()
      })

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("scroll", resizeCanvas) // Clean up scroll listener
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: "transparent",
        height: "100%", // Ensure canvas covers full height
      }}
    />
  )
}
