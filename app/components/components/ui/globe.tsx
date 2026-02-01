"use client"

import { useContext, useEffect, useMemo, useRef } from "react"
import createGlobe, { COBEOptions } from "cobe"
import { useMotionValue, useSpring } from "motion/react"

import { cn } from "../lib/utils"
import { ThemeContext } from "@/context/ThemeContext"

const BASE_ROTATION_SPEED = 0.0025
const START_ROTATION_SPEED = 0.01

const WHITE: [number, number, number] = [1, 1, 1]
const DARK_BASE: [number, number, number] = [0.1686, 0.1686, 0.1686]
const DARK_GLOW: [number, number, number] = [43 / 255, 43 / 255, 43 / 255]
const ORANGE: [number, number, number] = [251 / 255, 100 / 255, 21 / 255]
const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: WHITE,
  markerColor: ORANGE,
  glowColor: WHITE,
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
  onReady,
}: {
  className?: string
  config?: COBEOptions
  onReady?: () => void
}) {
  const { theme } = useContext(ThemeContext)
  let phi = 0
  let width = 0
  const rotationSpeed = useRef(START_ROTATION_SPEED)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const r = useMotionValue(0)
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  })

  const resolvedConfig = useMemo(() => {
    if (theme === "dark") {
      return {
        ...config,
        dark: 0.15,
        baseColor: DARK_BASE,
        glowColor: DARK_GLOW,
        mapBrightness: 10,
        mapBaseBrightness: 0,
        diffuse: 1.2,
      }
    }

    return {
      ...config,
      dark: 0,
      baseColor: WHITE,
      glowColor: WHITE,
      mapBrightness: 1.2,
      diffuse: 0.4,
    }
  }, [config, theme])

  useEffect(() => {
    let globe: ReturnType<typeof createGlobe> | null = null
    let cancelled = false

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth
      }
    }

    window.addEventListener("resize", onResize)
    onResize()

    const initGlobe = async () => {
      if (cancelled || !canvasRef.current) return

      canvasRef.current.style.opacity = "0"

      const options: COBEOptions & { map?: HTMLImageElement } = {
        ...resolvedConfig,
        width: width * 2,
        height: width * 2,
        onRender: (state) => {
          rotationSpeed.current += (BASE_ROTATION_SPEED - rotationSpeed.current) * 0.08
          phi += rotationSpeed.current
          state.phi = phi + rs.get()
          state.width = width * 2
          state.height = width * 2
        },
      }

      globe = createGlobe(canvasRef.current, options)

      requestAnimationFrame(() => {
        if (cancelled) return
        if (canvasRef.current) canvasRef.current.style.opacity = "1"
        onReady?.()
      })
    }

    void initGlobe()
    return () => {
      cancelled = true
      globe?.destroy()
      window.removeEventListener("resize", onResize)
    }
  }, [rs, resolvedConfig, onReady])

  return (
    <div
      className={cn(
        "absolute mx-auto aspect-[1/1] w-full max-w-none overflow-hidden",
        className
      )}
    >
      <canvas
        className={cn(
          "pointer-events-none size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        )}
        style={{ transitionTimingFunction: "cubic-bezier(0.2, 0, 0.38, 0.9)" }}
        ref={canvasRef}
      />
    </div>
  )
}
