import { Helmet } from 'react-helmet-async'
import SmoothScroll from './components/SmoothScroll'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Academics from './components/Academics'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CurtainIntro from './components/CurtainIntro'

function App() {
    return (
        <SmoothScroll>
            <Helmet>
                <title>Ayush Arora | AI Engineer & Full Stack Developer</title>
                <meta name="description" content="Portfolio of Ayush Arora, an AI Engineer and Full Stack Developer based in India, specializing in machine learning, scalable systems, and intelligent solutions." />
            </Helmet>
            {/* Background elements */}
            <div className="bg-mesh" />

            {/* Global UI */}
            <CurtainIntro />
            <NavBar />

            {/* Main Content Area */}
            <main className="w-full relative z-10 selection:bg-amber-400/30">
                <Hero />
                <About />
                <Academics />
                <Skills />
                <Projects />
                <Contact />
            </main>
        </SmoothScroll>
    )
}

export default App
