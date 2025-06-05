'use client'
import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function SpinningCube() {
  const ref = useRef<THREE.Mesh>(null!)
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01
      ref.current.rotation.y += 0.01
    }
  })
  return (
    <mesh ref={ref}>
      <boxGeometry args={[1,1,1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

export default function Cube() {
  return (
    <Canvas style={{height: '300px'}}>
      <ambientLight />
      <pointLight position={[10,10,10]} />
      <SpinningCube />
    </Canvas>
  )
}
