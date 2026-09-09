import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <main className="app">
      <section className="hero-wrapper">
        <Hero />
        <Navbar />
      </section>
    </main>
  );
}

export default App;