'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

interface MorphingButtonProps {
  label: string
  icon?: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export function MorphingButton({
  label,
  icon,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
}: MorphingButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const svgRef = useRef<SVGPathElement>(null)

  const variantStyles = {
    primary: 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/50',
    secondary: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50',
    outline: 'bg-transparent border-2 border-blue-400 text-blue-400 hover:shadow-lg hover:shadow-blue-500/30',
  }

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  }

  const handleMouseEnter = () => {
    setIsHovered(true)

    // GSAP morph animation
    if (svgRef.current) {
      gsap.to(svgRef.current, {
        attr: {
          d: 'M 10,50 Q 50,10 90,50 T 170,50',
        },
        duration: 0.6,
        ease: 'elastic.out(1.2, 0.75)',
      })
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)

    // GSAP morph back
    if (svgRef.current) {
      gsap.to(svgRef.current, {
        attr: {
          d: 'M 10,50 L 170,50',
        },
        duration: 0.4,
        ease: 'power2.inOut',
      })
    }
  }

  return (
    <motion.button
      ref={buttonRef}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative rounded-full font-bold transition-all duration-300
        flex items-center gap-2 justify-center
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
        group
      `}
    >
      {/* Background glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-full blur-xl opacity-0 -z-10"
        animate={{
          opacity: isHovered ? 0.5 : 0,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ duration: 0.3 }}
        style={{
          background: variant === 'primary' ? '#0066ff' : variant === 'secondary' ? '#a855f7' : 'transparent',
        }}
      />

      {/* Morphing SVG line */}
      <svg width="180" height="100" className="absolute inset-0 w-full h-full pointer-events-none">
        <path
          ref={svgRef}
          d="M 10,50 L 170,50"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity="0.3"
          className="group-hover:opacity-60 transition-opacity"
        />
      </svg>

      {/* Icon */}
      {icon && (
        <motion.div
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.6 }}
        >
          {icon}
        </motion.div>
      )}

      {/* Label */}
      <span className="relative z-10">{label}</span>

      {/* Ripple effect on click */}
      <motion.div
        className="absolute inset-0 rounded-full bg-white/10"
        initial={{ scale: 0, opacity: 1 }}
        whileTap={{ scale: 2, opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
    </motion.button>
  )
}
