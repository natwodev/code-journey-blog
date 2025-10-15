import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/common/Navbar'
import FooterSwitch from './components/common/FooterSwitch'
import ScrollToTop from './components/common/ScrollToTop'
import { BrowserRouter } from 'react-router-dom'
import DisableContextMenu from './components/common/DisableContextMenu'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Navbar />
          <ScrollToTop />
          <DisableContextMenu />
          <App />
          <FooterSwitch />
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
)
