import { useState } from 'react'
import Hero from './component/Hero'
import Feature from './component/Feature'
import Price from './component/Price' 
import Contacte from './component/Contacte'
import Footer from './component/Footer'
import BMICalculator from './component/BMICalculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Feature />
      <BMICalculator />
      <Price />
      <Contacte />
      <Footer />
    </main>
  )
}

export default App
