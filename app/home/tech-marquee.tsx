import { marqueeTech } from "@/lib/content";

function Row({ k }: { k: string }) {
  return (
    <div key={k} className="flex items-center gap-[34px] pr-[34px]">
      {marqueeTech.map((t) => (
        <span key={t + k} className="flex items-center gap-[34px]">
          <span className="font-mono text-[14px] font-medium">{t}</span>
          <span className="size-[13px] rotate-45 bg-ink/85" />
        </span>
      ))}
    </div>
  );
}

export function TechMarquee() {
  return (
    <section className="marquee-card overflow-hidden bg-surface py-[20px] text-ink">
      <div className="marquee">
        <Row k="a" />
        <Row k="b" />
      </div>
    </section>
  );
}
