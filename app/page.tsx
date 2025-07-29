import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About"

export default function Home() {
  return (
    <div className="">  
      <Navbar />
      <main className="">
        <div className="blur-overlay"></div>
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  );
}
