import HeroSection from '../components/home/HeroSection'
import FullPageGradient from '../components/home/FullPageGradient'

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <FullPageGradient />
      <HeroSection />
    </div>
  )
}
