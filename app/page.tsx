import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Navbar />
      <Hero />
      <AboutUs />
      <Menu />
      <Services />
      <Footer />
    </main>
  );
}
