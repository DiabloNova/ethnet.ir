'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  duration?: number
  suffix?: string
  prefix?: string
  decimals?: number
  className?: string
}

export function AnimatedCounter({
  value,
  duration = 2,
  suffix = '',
  prefix = '',
  decimals = 0,
  className = '',
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return

    let start = 0
    const increment = value / (duration * 60) // 60fps
    let animationId: NodeJS.Timeout

    const animate = () => {
      start += increment
      if (start >= value) {
        setDisplayValue(value)
      } else {
        setDisplayValue(Math.floor(start * 10 ** decimals) / 10 ** decimals)
        animationId = setTimeout(animate, 1000 / 60)
      }
    }

    animate()

    return () => clearTimeout(animationId)
  }, [inView, value, duration, decimals])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={`inline-block ${className}`}
    >
      <span className="inline-block animate-counter-increment">
        {prefix}
        {displayValue.toFixed(decimals)}
        {suffix}
      </span>
    </motion.div>
  )
}
