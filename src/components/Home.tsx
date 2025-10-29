import { Hero } from "./Hero";
import { About } from "./About";
import { Roadmap } from "./Roadmap";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Roadmap />
      <Contact />
      <Footer />
    </>
  );
}
