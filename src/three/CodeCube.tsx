import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type * as THREE from 'three'

export default function CodeCube() {
  const ref = useRef<THREE.Mesh | null>(null)
  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * 0.4
    ref.current.rotation.y += delta * 0.5
  })
  return (
    <mesh ref={ref} position={[0, 0.2, 0]}> 
      <boxGeometry args={[1.6, 0.1, 1.1]} />
      <meshStandardMaterial color="#0EA5E9" emissive="#00C9A7" emissiveIntensity={0.25} metalness={0.5} roughness={0.2} />
    </mesh>
  )
}
