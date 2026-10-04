import './App.css'

import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/Navbar/sections/HeroSection/HeroSection'
import AboutSection from './components/Navbar/sections/HeroSection/AboutSection/AboutSection'
import WhyTIS from './components/Navbar/sections/HeroSection/WhyTIS/WhyTIS'
import Academics from './components/Navbar/Academics/Academics'
import Campus from './components/Campus/Campus'
import Admissions from './components/Navbar/sections/HeroSection/Admissions/Admissions'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyTIS />
      <Academics />
      <Campus />
      <Admissions />
      <Footer />
    </div>
  )
}

export default App