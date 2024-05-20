import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import { ParallaxScroll } from "@/components/ParallaxScroll";
import Services from "@/components/Services";
import { images } from "./data/images";

export default function Home() {
  return (
    <main className="w-full h-full opacity-0">
      <Navbar />
      <Hero />
      <AboutUs />
      <Menu />
      <Services />
      <ParallaxScroll images={images} />
      <Footer />
    </main>
  );
}
