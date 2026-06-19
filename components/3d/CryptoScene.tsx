'use client'

import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, Sphere, useTexture } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedCrypto({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001
      meshRef.current.rotation.y += 0.002
      meshRef.current.position.x = position[0] + (mouse.x - 0.5) * 0.5
      meshRef.current.position.y = position[1] + (mouse.y - 0.5) * 0.5
    }
  })

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1, 4]} />
        <meshPhongMaterial
          color="#0066ff"
          emissive="#a855f7"
          wireframe={false}
          shininess={100}
        />
      </mesh>

      {/* Orbital rings */}
      <mesh rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[2, 0.08, 16, 100]} />
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.6} />
      </mesh>

      <mesh rotation={[0, Math.PI / 3, 0]}>
        <torusGeometry args={[1.8, 0.06, 16, 100]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.5} />
      </mesh>

      {/* Glow sphere */}
      <mesh>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshBasicMaterial color="#0066ff" transparent opacity={0.1} />
      </mesh>
    </group>
  )
}

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null)

  const particleCount = 200
  const positions = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 20
    positions[i + 1] = (Math.random() - 0.5) * 20
    positions[i + 2] = (Math.random() - 0.5) * 20
  }

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x += 0.0001
      particlesRef.current.rotation.y += 0.0002
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={particleCount} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#00d4ff" size={0.1} sizeAttenuation transparent opacity={0.6} />
    </points>
  )
}

export function CryptoScene({ mobile = false }: { mobile?: boolean }) {
  if (mobile) {
    return (
      <div className="w-full h-80 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl flex items-center justify-center backdrop-blur-sm">
        <div className="text-center">
          <div className="text-4xl font-bold gradient-text mb-2">اتریوم نت</div>
          <div className="text-sm text-slate-400">3D Scene</div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-96 rounded-2xl overflow-hidden border border-white/10 glass">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, 10]} color="#a855f7" intensity={0.8} />

        <AnimatedCrypto position={[-1.5, 0, 0]} />
        <AnimatedCrypto position={[0, 0, 0]} />
        <AnimatedCrypto position={[1.5, 0, 0]} />

        <FloatingParticles />
      </Canvas>
    </div>
  )
}
