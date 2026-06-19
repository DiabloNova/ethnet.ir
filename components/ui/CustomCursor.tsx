'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [trailPositions, setTrailPositions] = useState<Array<{ x: number; y: number }>>([])

  const cursorRef = useRef({ x: 0, y: 0 })
  const trailRef = useRef<Array<{ x: number; y: number }>>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY }
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Add to trail
      trailRef.current.push({ x: e.clientX, y: e.clientY })
      if (trailRef.current.length > 15) {
        trailRef.current.shift()
      }
      setTrailPositions([...trailRef.current])

      // Check if hovering over interactive elements
      const element = document.elementFromPoint(e.clientX, e.clientY)
      const isInteractive = element?.matches('button, a, [role="button"], input, textarea')
      setIsHovering(!!isInteractive)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
        input, textarea {
          cursor: text !important;
        }
      `}</style>

      {/* Trail effect */}
      {trailPositions.map((pos, i) => (
        <div
          key={i}
          className="fixed pointer-events-none"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            width: '8px',
            height: '8px',
            background: `rgba(0, 102, 255, ${0.3 - i * 0.02})`,
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            filter: `blur(${i * 0.5}px)`,
          }}
        />
      ))}

      {/* Main cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: 'spring',
          stiffness: isHovering ? 100 : 200,
          damping: isHovering ? 20 : 10,
          mass: 0.5,
        }}
      >
        {/* Outer ring */}
        <motion.div
          className="absolute w-6 h-6 border-2 border-blue-400 rounded-full"
          style={{
            left: '-12px',
            top: '-12px',
          }}
          animate={{
            scale: isHovering ? 1.5 : 1,
            borderColor: isHovering ? '#a855f7' : '#0066ff',
          }}
          transition={{ duration: 0.2 }}
        />

        {/* Inner dot */}
        <motion.div
          className="absolute w-1.5 h-1.5 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full"
          style={{
            left: '-3px',
            top: '-3px',
          }}
          animate={{
            scale: isHovering ? 1.3 : 1,
            boxShadow: isHovering ? '0 0 20px rgba(168, 85, 247, 0.8)' : '0 0 10px rgba(0, 102, 255, 0.5)',
          }}
          transition={{ duration: 0.2 }}
        />

        {/* Glow effect */}
        <motion.div
          className="absolute w-8 h-8 rounded-full pointer-events-none"
          style={{
            left: '-16px',
            top: '-16px',
            background: 'radial-gradient(circle, rgba(0, 102, 255, 0.1) 0%, transparent 70%)',
          }}
          animate={{
            scale: isHovering ? 1.8 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </>
  )
}
