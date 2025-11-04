import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about" className="min-h-screen">
        {/* Conteúdo da seção About */}
      </section>
      <section id="skills" className="min-h-screen">
        {/* Conteúdo da seção Skills */}
      </section>
      <section id="portfolio" className="min-h-screen">
        {/* Conteúdo da seção Portfolio */}
      </section>
      <section id="testimonials" className="min-h-screen">
        {/* Conteúdo da seção Testimonials */}
      </section>
      <section id="contact" className="min-h-screen">
        {/* Conteúdo da seção Contact */}
      </section>
    </>
  );
};
export default App;