import './App.css';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Footer from './Components/Footer';
import StarBackground from './Utils/StarBackground';

function App() {
  
  return (
    <>
      <StarBackground />
      <Navbar />
      <HeroSection />
      <Skills />
      <Projects />
      <div className="app-container">
      <Education />
      <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App