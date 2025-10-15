import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/common/Navbar'
import FooterSwitch from './components/common/FooterSwitch'
import ScrollToTop from './components/common/ScrollToTop'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <HashRouter>
          <Navbar />
          <ScrollToTop />
          <App />
          <FooterSwitch />
        </HashRouter>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
)
