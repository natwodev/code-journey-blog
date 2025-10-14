import { Stars } from '@react-three/drei'

export default function StarsBackdrop() {
  return (
    <Stars radius={60} depth={50} count={2000} factor={4} fade speed={0.6} />
  )
}

