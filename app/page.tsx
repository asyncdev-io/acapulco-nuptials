import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="mx-auto container w-full h-full">
      <Navbar />
      <Hero />
      <AboutUs />
      <Menu />
      <Services />
    </main>
  );
}
