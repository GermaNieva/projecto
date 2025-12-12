import Hero from './components/hero.jsx'
import TwoColumn from './components/TwoColumn.jsx'
import ServicesPage from './components/ServicesPage.jsx'
import BenefitsPage from './components/BenefitsPage.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const onServicesPage = typeof window !== 'undefined' && window.location.pathname.startsWith('/servicios')
  const onBenefitsPage = typeof window !== 'undefined' && window.location.pathname.startsWith('/beneficios')

  if (onServicesPage) {
    return (
      <>
        <ServicesPage />
        <Footer />
      </>
    )
  }

  if (onBenefitsPage) {
    return (
      <>
        <BenefitsPage />
        <Footer />
      </>
    )
  }

  return (
    <div>
      <Hero />
      <TwoColumn />
      <Footer />
    </div>
  )
}

export default App
