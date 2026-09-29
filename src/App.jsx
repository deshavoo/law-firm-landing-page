import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import PracticeAreas from "./components/PracticeAreas";
import WhyUs from "./components/WhyUs";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      dir="rtl"
      className="min-h-screen overflow-x-hidden bg-[#0b0b0b] text-[#f5f0e8]"
    >
      <Navbar />

      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <WhyUs />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
