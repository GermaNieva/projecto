import { useEffect } from 'react'
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './pages/Home/HomePage.jsx'
import ServicesPage from './pages/Services/ServicesPage.jsx'
import BenefitsPage from './pages/Benefits/BenefitsPage.jsx'
import ContactPage from './pages/Contact/ContactPage.jsx'
import Footer from './components/Footer/Footer.jsx'

function ScrollToHash() {
  const { hash } = useLocation()

  // React Router no hace scroll automático al hash.
  // Esto mantiene el comportamiento tipo anchor sin recargar.
  // Sin animación para no cambiar UX.
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!hash) return

    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView()
  }, [hash])

  return null
}

function AppLayout() {
  return (
    <>
      <ScrollToHash />
      <Outlet />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/beneficios" element={<BenefitsPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default App
