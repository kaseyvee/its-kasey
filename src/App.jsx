import Nav from "./components/Nav"
import Hero from "./sections/Hero"
import About from "./sections/About"
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
        <Projects />
        <Skills />
        <WhyMe />
        <Contacts />
      </main>
    </>
  )
}

export default App
