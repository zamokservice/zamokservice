import { LangProvider } from './LangContext'
import { PHONE_TEL } from './config'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Prices from './components/Prices'
import HowWeWork from './components/HowWeWork'
import WhyUs from './components/WhyUs'
import Geo from './components/Geo'
import Reviews from './components/Reviews'
import Faq from './components/Faq'
import OrderForm from './components/OrderForm'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {
  return (
    <LangProvider>
      <Header />
      <main>
        <Hero />
        <Services />
        <Prices />
        <HowWeWork />
        <WhyUs />
        <Geo />
        <Reviews />
        <Faq />
        <OrderForm />
        <About />
      </main>
      <Footer />
      <a href={PHONE_TEL} className="fab" aria-label="Call">📞</a>
    </LangProvider>
  )
}
