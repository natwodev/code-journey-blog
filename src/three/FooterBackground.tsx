import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Lighting from './Lighting'
import StarsBackdrop from './StarsBackdrop'
import Particles from './Particles'

export default function FooterBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0" style={{ WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 82%, rgba(0,0,0,0) 100%)', maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 82%, rgba(0,0,0,0) 100%)' }}>
        <Canvas camera={{ position: [2.5, 2.2, 4], fov: 55 }}>
          <Suspense fallback={null}>
            <Lighting />
            <StarsBackdrop />
            <Particles />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/50" />
      <div className="absolute inset-x-0 top-0 h-20" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0), var(--color-brand-dark))' }} />
    </div>
  )
}
