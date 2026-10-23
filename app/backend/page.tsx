import type { Metadata } from "next";
import { Writings } from "./writings";
import { SiteFooter } from "../shared/footer";

export const metadata: Metadata = {
  title: "Backend writings — Emmanuel Acquah",
  description:
    "Case files and essays from the systems behind the screens — cron infra, queues, Postgres, AWS and deploys. FreeCron, and how I think about cloud without the crutch. No videos, just writing.",
};

export default function BackendPage() {
  return (
    <main className="overflow-x-clip">
      <Writings />
      <SiteFooter />
    </main>
  );
}
