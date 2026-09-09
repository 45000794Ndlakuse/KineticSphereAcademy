import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";

function App() {
  return (
    <main className="app">
      <Navbar />

      <section className="hero-wrapper">
        <Hero />
      </section>

      <About />
      <Services />
    </main>
  );
}

export default App;