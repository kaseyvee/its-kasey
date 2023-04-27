import Nav from "./components/Nav"
import About from "./sections/About"
import Contacts from "./sections/Contacts"
import Hero from "./sections/Hero"
import WhyCompany from "./sections/WhyCompany"
import WhyMe from "./sections/WhyMe"

function App() {

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <WhyCompany />
        <WhyMe />
        <Contacts />
      </main>
    </>
  )
}

export default App
