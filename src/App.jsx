import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <section id="home" className="min-h-screen">
          <Hero />
        </section>
        <section id="about" className="min-h-screen">
          <About />
        </section>
        <section id="skills" className="min-h-screen">
          <Skills />
        </section>
        <section id="portfolio" className="min-h-screen">
          {/* <Portfolio /> */}
        </section>
        <section id="testimonials" className="min-h-screen">
          {/* <Testimonials /> */}
        </section>
        <section id="contact" className="min-h-screen">
          {/* <Contact /> */}
        </section>
      </main>
    </>
  );
};
export default App;