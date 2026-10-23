"use client";

import { useRef } from "react";
import gsap from "gsap";
import { backendWritings, type Writing, type WritingBlock } from "@/lib/content";
import { useGsap } from "../shared/gsap";

function renderBody(w: Writing) {
  if (w.blocks?.length) return <WritingBlocks blocks={w.blocks} />;
  return (
    <div className="mt-7 max-w-[640px] space-y-5">
      {w.body.map((p, i) => (
        <p key={i} className="text-[14.5px] leading-[1.85] text-muted">
          {p}
        </p>
      ))}
    </div>
  );
}

function WritingBlocks({ blocks }: { blocks: WritingBlock[] }) {
  return (
    <div className="mt-7 flex flex-col gap-6">
      {blocks.map((b, i) => {
        switch (b.kind) {
          case "h":
            return (
              <h3
                key={i}
                className="mt-8 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-ink"
              >
                <span className="mr-3 text-blue">/</span>
                {b.text}
              </h3>
            );
          case "bullets":
            return (
              <ul key={i} className="flex max-w-[640px] flex-col gap-2.5">
                {b.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-[14.5px] leading-[1.75] text-muted">
                    <span aria-hidden className="mt-[9px] size-[5px] shrink-0 rounded-[1px] bg-[#C9F26A]" />
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="max-w-[640px] border-l-2 border-[#C9F26A] pl-5 font-serif text-[clamp(21px,2.3vw,28px)] leading-[1.3] text-ink"
              >
                {b.text}
              </blockquote>
            );
          case "code":
            return (
              <figure key={i} className="max-w-[720px] overflow-hidden rounded-md border border-line bg-[#141312]">
                <figcaption className="flex items-center justify-between border-b border-line px-4 py-2 font-mono text-[9px] tracking-[0.12em] text-label">
                  <span>{b.lang.toUpperCase()}</span>
                  <span aria-hidden>● ● ●</span>
                </figcaption>
                <pre className="overflow-x-auto px-4 py-3.5 font-mono text-[11.5px] leading-[1.75] text-[#c9c8c2]">
                  {b.lines.join("\n")}
                </pre>
              </figure>
            );
          case "table":
            return (
              <div key={i} className="max-w-[720px] overflow-x-auto">
                <table className="w-full border-collapse text-left font-mono text-[11px] text-muted">
                  <thead>
                    <tr>
                      {b.headers.map((h) => (
                        <th
                          key={h}
                          className="min-w-[140px] border-b border-line px-3 py-2.5 align-bottom font-semibold text-[10px] tracking-[0.1em] text-ink"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((row, j) => (
                      <tr key={j} className="border-b border-hair align-top">
                        {row.map((cell, k) => (
                          <td key={k} className={`px-3 py-2.5 leading-[1.6] ${k === 0 ? "text-ink" : ""}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default:
            return (
              <p key={i} className="max-w-[640px] text-[14.5px] leading-[1.85] text-muted">
                {b.text}
              </p>
            );
        }
      })}
    </div>
  );
}

export function Writings() {
  const ref = useRef<HTMLElement>(null);

  useGsap(() => {
    const q = gsap.utils.selector(ref.current!);

    gsap.from(q(".wr-head"), {
      opacity: 0,
      y: 20,
      duration: 0.75,
      stagger: 0.08,
      ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 85%" },
    });

    q(".writing").forEach((p) => {
      gsap.from(p, {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: p, start: "top 92%" },
      });
    });
  }, ref);

  return (
    <section ref={ref} className="px-6 pb-32 pt-10 md:px-14">
      <div className="wr-head mb-16 flex flex-wrap items-end justify-between gap-8">
        <div>
          <span className="font-mono text-[10px] tracking-[0.08em] text-label">
            (BACKEND) — WRITINGS · NO VIDEOS
          </span>
          <h1 className="statement mt-4 text-[clamp(44px,6.2vw,96px)]">
            The quiet part,
            <br className="hidden md:block" /> written down.
          </h1>
          <p className="mt-6 max-w-[58ch] font-mono text-[11px] leading-[1.9] text-muted">
            Case files and field notes from the systems behind the screens — cron
            infra, queues, Postgres and deploys. Read instead of watch.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 font-mono text-[10px] tracking-[0.08em] text-label">
          <span>INDEX · 0{backendWritings.length} ENTRIES</span>
          <span>2025—2026 · ACCRA, GHANA</span>
          <a href="/home#contact" className="text-blue transition-opacity hover:opacity-60">
            NEED THIS BUILT? →
          </a>
        </div>
      </div>

      {backendWritings.map((w) => (
        <article key={w.no} className="writing border-t border-line py-14 md:py-16">
          <div className="flex flex-wrap items-baseline justify-between gap-4 font-mono text-[10px] tracking-[0.08em] text-label">
            <span className="flex items-baseline gap-3">
              <span className="text-[13px] text-ink">{w.no}</span>
              {w.kicker} · {w.date} · {w.read}
            </span>
            <span className="flex flex-wrap gap-2">
              {w.tags.map((t) => (
                <span key={t} className="rounded-full border border-hair px-2.5 py-1 text-[9px]">
                  {t}
                </span>
              ))}
            </span>
          </div>

          <h2 className="mt-7 max-w-[26ch] font-display text-[clamp(30px,4.4vw,58px)] font-bold leading-[0.98] tracking-[-0.03em]">
            {w.title}
          </h2>

          <p className="mt-6 max-w-[62ch] font-serif text-[clamp(19px,2vw,23px)] leading-[1.35] text-ink">
            {w.lede}
          </p>

          <div className="mt-7">{renderBody(w)}</div>

          <p className="mt-9 font-mono text-[10px] tracking-[0.1em] text-label">
            — E. ACQUAH
          </p>
        </article>
      ))}

      <div className="writing border-t border-line pt-14">
        <p className="max-w-[52ch] font-mono text-[11px] leading-[1.9] text-muted">
          New entries land whenever a system ships. The backlog is the good kind
          of long.
        </p>
        <a
          href="/home#contact"
          className="mt-8 inline-flex items-center gap-3 border border-line px-5 py-3 font-mono text-[10px] tracking-[0.1em] transition-colors hover:bg-ink hover:text-bg"
        >
          START A PROJECT →
        </a>
      </div>
    </section>
  );
}
