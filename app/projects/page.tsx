import type { Metadata } from "next";
import { ProjectsGrid } from "./projects-grid";
import { UpClose } from "./up-close";
import { SiteFooter } from "../shared/footer";

export const metadata: Metadata = {
  title: "Projects — Emmanuel Acquah",
  description: "Selected builds — live platforms, storefronts, church sites and dashboards — made in Ghana.",
};

export default function ProjectsPage() {
  return (
    <main className="overflow-x-clip">
      <ProjectsGrid />
      <UpClose />
      <SiteFooter />
    </main>
  );
}
