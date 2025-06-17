import Hero from "@/components/hero"
import Features from "@/components/features"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Classes from "@/components/classes"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Classes />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
