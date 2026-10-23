import { Hero } from "./hero";
import { TechMarquee } from "./tech-marquee";
import { About } from "./about";
import { Services } from "./services";
import { Contact } from "./contact";
import { WorkList } from "../work/work-list";
import { SiteFooter } from "../shared/footer";

export default function HomePage() {
  return (
    <main className="overflow-x-clip">
      <Hero />
      <TechMarquee />
      <WorkList />
      <About />
      <Services />
      <SiteFooter />
      <Contact />
    </main>
  );
}
