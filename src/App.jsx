import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Resources from "./components/Resources";

function App() {
  return (
    <main className="app">
      <Navbar />

      <section className="hero-wrapper">
        <Hero />
      </section>

      <About />
      <Services />
      <WhyChooseUs />
      <Resources />
    </main>
  );
}

export default App;