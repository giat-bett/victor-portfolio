import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import CV from '../components/CV'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <div className="fixed inset-0 wave-pattern opacity-10 pointer-events-none" />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Projects />
        <Skills />
        <CV />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}


