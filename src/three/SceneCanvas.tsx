import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Lighting from './Lighting.tsx'
import Particles from './Particles.tsx'
import StarsBackdrop from './StarsBackdrop'
import { OrbitControls } from '@react-three/drei'
import Astronaut from './Astronaut'

export default function SceneCanvas() {
  return (
    <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden bg-black/40">
      <Canvas camera={{ position: [3, 2.5, 4.5], fov: 55 }}>
        <Suspense fallback={null}>
          <Lighting />
          <StarsBackdrop />
          <Astronaut />
          <Particles />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.4} enablePan={false} />
        </Suspense>
      </Canvas>
    </div>
  )
}
