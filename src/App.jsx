import Nav from "./components/Nav"
import About from "./sections/About"
import Contacts from "./sections/Contacts"
import Hero from "./sections/Hero"

function App() {

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Contacts />
      </main>
    </>
  )
}

export default App
