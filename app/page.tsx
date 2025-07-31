import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import RotatingCube from "./components/RotatingCube";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <div className="blur-overlay"></div>
        <RotatingCube />
        <div className="mt-65">
          <Hero />
        </div>
        <About />
      </main>
      <Footer />
    </div>
  );
}
