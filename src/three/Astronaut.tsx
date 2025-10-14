import { Float, useGLTF } from '@react-three/drei'
import type { Group } from 'three'

export default function Astronaut() {
  // Reliable public asset from modelviewer.dev
  const src = 'https://modelviewer.dev/shared-assets/models/Astronaut.glb'
  const { scene } = useGLTF(src) as unknown as { scene: Group }
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
      <primitive object={scene} scale={1.3} position={[0, -0.8, 0]} />
    </Float>
  )
}

useGLTF.preload('https://modelviewer.dev/shared-assets/models/Astronaut.glb')
