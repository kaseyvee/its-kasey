import Nav from "./components/Nav"
import Hero from "./sections/Hero"
import About from "./sections/About"
import WhyCompany from "./sections/WhyCompany"
import WhyMe from "./sections/WhyMe"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import Contacts from "./sections/Contacts"

function App() {

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <WhyCompany />
        <WhyMe />
        <Projects />
        <Skills />
        <Contacts />
      </main>
    </>
  )
}

export default App
