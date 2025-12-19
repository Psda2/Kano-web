import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Destinations from "@/components/Destinations";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Destinations />
      <Footer />
    </main>
  );
}
