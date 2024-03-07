import "./App.scss";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Cursor from "./Components/Cursor/Cursor";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Parallax from "./Components/Parallax/Parallax";
import Portfolio from "./Components/Portfolio/Portfolio";

function App() {
  return (
    <>
      <Cursor />
      <section id="HomePage">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <Parallax type="About" />
      </section>
      <section>
        <About/>
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
