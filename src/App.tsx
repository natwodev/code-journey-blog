import { Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Projects from './pages/Projects'
import About from './pages/About'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
