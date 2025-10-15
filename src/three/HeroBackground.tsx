import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Lighting from './Lighting'
import StarsBackdrop from './StarsBackdrop'
import Particles from './Particles'
import { OrbitControls } from '@react-three/drei'

type Mode = 'hero' | 'footer'

export default function HeroBackground({ mode = 'hero' }: { readonly mode?: Mode }) {
  const mask = mode === 'hero'
    ? 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 78%, rgba(0,0,0,0.2) 95%, rgba(0,0,0,0) 100%)'
    : 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 82%, rgba(0,0,0,0) 100%)'

  const overlay = mode === 'hero'
    ? 'bg-gradient-to-b from-black/40 via-black/20 to-black/50'
    : 'bg-gradient-to-t from-black/40 via-black/20 to-black/50'

  const edgeFadeStyle = mode === 'hero'
    ? { position: 'absolute' as const, insetInline: 0, bottom: 0, height: '160px', background: 'linear-gradient(to bottom, rgba(0,0,0,0), var(--color-brand-dark))' }
    : { position: 'absolute' as const, insetInline: 0, top: 0, height: '80px', background: 'linear-gradient(to top, rgba(0,0,0,0), var(--color-brand-dark))' }

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0" style={{ WebkitMaskImage: mask, maskImage: mask }}>
        <Canvas camera={{ position: [3, 2.5, 4.5], fov: 55 }}>
          <Suspense fallback={null}>
            <Lighting />
            <StarsBackdrop />
            <Particles />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.35} enablePan={false} />
          </Suspense>
        </Canvas>
      </div>
      <div className={`absolute inset-0 ${overlay}`} />
      <div style={edgeFadeStyle as React.CSSProperties} />
    </div>
  )
}
