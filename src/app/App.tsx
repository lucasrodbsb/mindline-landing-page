import { Hero } from "./components/Hero";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Benefits } from "./components/Benefits";
import { OurSpace } from "./components/OurSpace";
import { Contact } from "./components/Contact";
import { NotNormal } from "./components/NotNormal";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { SectionReveal } from "./components/SectionReveal";
import { Map } from "./components/Map";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SectionReveal>
        <About />
      </SectionReveal>
      <SectionReveal delay={0.1}>
        <Benefits />
      </SectionReveal>
      <SectionReveal delay={0.05}>
        <OurSpace />
      </SectionReveal>
      <SectionReveal delay={0.1}>
        <Contact />
      </SectionReveal>
      <SectionReveal>
        <NotNormal />
      </SectionReveal>
      <SectionReveal delay={0.05}>
        <FAQ />
      </SectionReveal>
      <SectionReveal delay={0.05}>
        <Map />
      </SectionReveal>
      <SectionReveal>
        <Footer />
      </SectionReveal>
    </div>
  );
}
