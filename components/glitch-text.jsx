"use client"

import { useEffect, useRef, useState } from "react"

export default function GlitchText({ text, className }) {
  const canvasRef = useRef(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const updateCanvasSize = () => {
      const container = canvas.parentElement
      if (!container) return

      canvas.width = container.clientWidth
      canvas.height = Math.min(container.clientWidth * 0.4, 500)

      drawGlitchText()
    }

    const drawGlitchText = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const fontSize = Math.min(canvas.width * 0.2, 280)
      ctx.font = `bold ${fontSize}px Arial, sans-serif`
      ctx.textBaseline = "middle"

      const textMetrics = ctx.measureText(text)
      const textWidth = textMetrics.width
      const x = (canvas.width - textWidth) / 2
      const y = canvas.height / 2

      // Main text
      ctx.fillStyle = "#ffffff"
      ctx.fillText(text, x, y)

      // Glitch effect
      applyGlitchEffect(ctx, x, y, textWidth, fontSize, text)
    }

    const applyGlitchEffect = (ctx, x, y, width, fontSize, text) => {
      const sliceCount = 8
      const sliceHeight = fontSize / sliceCount

      for (let i = 0; i < sliceCount; i++) {
        if (Math.random() > 0.7) {
          const sliceY = y - fontSize / 2 + i * sliceHeight
          const offsetX = (Math.random() - 0.5) * 15

          ctx.save()
          ctx.beginPath()
          ctx.rect(x - 10, sliceY, width + 20, sliceHeight)
          ctx.clip()

          ctx.fillStyle = "#ffffff"
          ctx.fillText(text, x + offsetX, y)

          ctx.restore()
        }
      }

      if (Math.random() > 0.6) {
        ctx.save()
        ctx.globalCompositeOperation = "screen"
        ctx.fillStyle = "#22c55e"
        ctx.fillText(text, x + (Math.random() - 0.5) * 8, y)
        ctx.restore()
      }

      if (Math.random() > 0.6) {
        ctx.save()
        ctx.globalCompositeOperation = "screen"
        ctx.fillStyle = "#ef4444"
        ctx.fillText(text, x - (Math.random() - 0.5) * 8, y)
        ctx.restore()
      }
    }

    setTimeout(() => {
      updateCanvasSize()
    }, 100)

    window.addEventListener("resize", updateCanvasSize)

    let animationId
    const animate = () => {
      if (Math.random() > 0.5) {
        drawGlitchText()
      }
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", updateCanvasSize)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [text, mounted])

  return (
    <div className={className}>
      <canvas ref={canvasRef} className="w-full" />
    </div>
  )
}
