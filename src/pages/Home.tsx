import HeroSection from '../components/home/HeroSection'
import FullPageGradient from '../components/home/FullPageGradient'
import FeaturedPosts from '../components/home/FeaturedPosts'
import TechStack from '../components/home/TechStack'
import FeaturedProjects from '../components/home/FeaturedProjects'
import ResourceLinks from '../components/home/ResourceLinks'
import Footer from '../components/common/Footer'

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <FullPageGradient />
      <HeroSection />
      <div className="mt-8 space-y-6">
        <FeaturedPosts />
        <FeaturedProjects />
        <TechStack />
        <ResourceLinks />
      </div>
      <Footer />
    </div>
  )
}
