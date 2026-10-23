"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { work } from "@/lib/content";
import { gsap, useGsap } from "../shared/gsap";

export function WorkList() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const rowsRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const inlineRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const inlineWrapRefs = useRef<Array<HTMLDivElement | null>>([]);

  // mobile inline previews — the single most-visible frame plays and the
  // rest pause; leaving the frame pauses it. wrappers are display:none on
  // desktop so the observer never promotes anything there
  useEffect(() => {
    const ratios = new Map<number, number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          ratios.set(Number((en.target as HTMLElement).dataset.idx), en.intersectionRatio);
        }
        let best = -1;
        let bi = -1;
        ratios.forEach((r, i) => {
          if (r > best) {
            best = r;
            bi = i;
          }
        });
        inlineRefs.current.forEach((v, i) => {
          if (!v) return;
          if (i === bi && best >= 0.35) {
            if (v.paused) {
              v.currentTime = 0;
              void v.play().catch(() => { });
            }
          } else if (!v.paused) {
            v.pause();
          }
        });
      },
      { threshold: [0, 0.35, 0.6] },
    );
    inlineWrapRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
    // refs are stable after mount — observe once
  }, []);

  // desktop sidebar: the shown demo plays through once; re-activating replays it.
  // mobile inline previews are owned by their own in-view observer below
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === active) {
        v.currentTime = 0;
        void v.play().catch(() => { });
      } else {
        v.pause();
      }
    });
  }, [active]);

  // rows activate as they pass the viewport center, even without a pointer
  useEffect(() => {
    const rows = rowsRef.current;
    if (!rows) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (!en.isIntersecting) continue;
          const no = (en.target as HTMLElement).dataset.no;
          const i = work.findIndex((p) => p.no === no);
          if (i >= 0) setActive(i);
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    rows.querySelectorAll<HTMLElement>(".work-row").forEach((r) => io.observe(r));
    return () => io.disconnect();
  }, []);

  const w = work[active];

  useGsap(() => {
    const q = gsap.utils.selector(ref.current!);
    const follower = q(".view-follower")[0] as HTMLElement | undefined;
    const rows = rowsRef.current;

    if (follower && rows) {
      gsap.set(follower, { xPercent: -50, yPercent: -50, scale: 0.4, opacity: 0 });
      const xTo = gsap.quickTo(follower, "x", { duration: 0.35, ease: "power3" });
      const yTo = gsap.quickTo(follower, "y", { duration: 0.35, ease: "power3" });

      const move = (e: MouseEvent) => {
        xTo(e.clientX);
        yTo(e.clientY + 30);
      };
      const enter = (e: MouseEvent) => {
        gsap.set(follower, { x: e.clientX, y: e.clientY + 30 });
        gsap.to(follower, { opacity: 1, scale: 1, duration: 0.3, ease: "power3.out" });
      };
      const leave = () => {
        gsap.to(follower, { opacity: 0, scale: 0.4, duration: 0.3, ease: "power3.in" });
      };

      rows.addEventListener("mousemove", move);
      rows.addEventListener("mouseenter", enter);
      rows.addEventListener("mouseleave", leave);
      return () => {
        rows.removeEventListener("mousemove", move);
        rows.removeEventListener("mouseenter", enter);
        rows.removeEventListener("mouseleave", leave);
      };
    }

    gsap.from(q(".work-row"), {
      y: 70,
      opacity: 0,
      duration: 0.9,
      stagger: 0.07,
      ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 78%" },
    });
    gsap.from(q(".work-preview"), {
      y: 90,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 70%" },
    });
  }, ref);

  return (
    <section id="work" ref={ref} className="px-6 pb-[110px] pt-24 md:px-14">
      {/* playful caution strip — frontend steals the show, backend does the work.
          the whole strip is clickable */}
      <a href="/backend" className="group mb-10 block" aria-label="Read the backend writings">
        <div aria-hidden className="hazard-tape" />
        <div className="flex flex-col gap-4 bg-[#C9F26A] px-4 py-4 text-[#161510] transition-colors group-hover:bg-[#bde95c] sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-5">
          <div className="flex items-start gap-3.5">
            <span className="mt-0.5 inline-flex shrink-0 -rotate-3 items-center gap-1.5 border border-[#161510]/35 px-2 py-1 font-mono text-[9px] font-semibold tracking-[0.12em] shadow-[2px_2px_0_rgba(22,21,16,0.28)]">
              <span aria-hidden className="text-[11px] leading-none">⚠</span>
              WARNING
            </span>
            <p className="max-w-[78ch] font-mono text-[10.5px] leading-[1.7] tracking-[0.02em]">
              <span className="font-semibold">Lets be real here , frontend always get the compliments.</span>{" "}
              It&apos;s the face ,the awws , the joy , the screenshots
               whiles the  backend does the actual lifting in the dark,
                so it earned its own room: no videos, just writing.
            </p>
          </div>
          <span className="shrink-0 self-start border-b border-[#161510]/40 pb-0.5 font-mono text-[9.5px] font-semibold tracking-[0.1em] sm:self-auto">
            READ THE BACKEND →
          </span>
        </div>
        <div aria-hidden className="hazard-tape" />
      </a>

      <p className="mb-9 font-mono text-[10px] text-muted">
        SELECTED WORK (0{work.length}) — SCROLL / STICK
      </p>

      {/* cursor follower — appears right under the pointer over the rows */}
      <div
        aria-hidden
        className="view-follower pointer-events-none fixed left-0 top-0 z-30 grid size-14 place-items-center rounded-full bg-blue font-mono text-[10px] text-[#f4f2ec] opacity-0"
      >
        VIEW
      </div>

      <div className="flex gap-16">
        {/* rows — two rows fill the viewport */}
        <div ref={rowsRef} className="min-w-0 flex-1 border-b border-line">
          {work.map((row, i) => (
            <article
              key={row.no}
              data-no={row.no}
              onMouseEnter={() => setActive(i)}
              className="work-row group relative flex min-h-[30vh] flex-col justify-center border-t border-line py-10 md:min-h-[50vh] md:py-12"
            >
              <a href={row.href} onFocus={() => setActive(i)} className="flex flex-col gap-4 self-start">
                <div className="flex items-baseline gap-6 md:gap-[34px]">
                  <span className="font-mono text-[11px] text-muted">{row.no}</span>
                  <span
                    className={`work-name text-[clamp(36px,5.3vw,76px)] font-display font-bold leading-[0.95] tracking-[-0.04em] ${i === active ? "is-active" : ""}`}
                  >
                    {row.name}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  <span className="font-mono text-[9.5px] tracking-[0.084em] text-muted">
                    {row.desc}
                  </span>
                  {row.tag && (
                    <span className="font-mono text-[9.5px] tracking-[0.084em] text-blue">
                      {row.tag}
                    </span>
                  )}
                </div>
              </a>

              {/* inline preview — phones only; the desktop uses the fixed sidebar */}
              <div
                ref={(el) => {
                  inlineWrapRefs.current[i] = el;
                }}
                data-idx={i}
                className="mt-6 lg:hidden"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-line/40">
                  {row.video ? (
                    <video
                      ref={(el) => {
                        inlineRefs.current[i] = el;
                      }}
                      src={row.video}
                      muted
                      playsInline
                      preload={i === active ? "auto" : "metadata"}
                      aria-label={`${row.name} — project demo`}
                      className="absolute inset-0 h-full w-full object-contain"
                    />
                  ) : row.cover ? (
                    <Image
                      src={row.cover}
                      alt={row.name}
                      fill
                      sizes="100vw"
                      className="object-contain"
                    />
                  ) : null}
                </div>
                <div className="mt-2 flex items-center justify-between font-mono text-[9px] tracking-[0.06em] text-muted">
                  <span>
                    ({row.no} / {String(work.length).padStart(2, "0")})
                  </span>
                  <span className="flex items-center gap-3">
                    {row.github && !row.githubPrivate && (
                      <a
                        href={row.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-ink/25 underline-offset-4 transition-colors hover:text-ink"
                        onClick={(e) => e.stopPropagation()}
                      >
                        GITHUB ↗
                      </a>
                    )}
                    {row.githubPrivate && <span className="tracking-[0.1em]">GITHUB — PRIVATE</span>}
                    <span>{row.stack}</span>
                  </span>
                </div>
              </div>

              <div className="absolute right-0 top-10 hidden flex-col items-end gap-2.5 sm:flex">
                {row.github && !row.githubPrivate && (
                  <a
                    href={row.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[9.5px] text-muted underline decoration-ink/25 underline-offset-4 transition-colors hover:text-ink"
                  >
                    GITHUB ↗
                  </a>
                )}
                {row.githubPrivate && (
                  <span className="font-mono text-[9px] text-muted">GITHUB — PRIVATE</span>
                )}
                <span className="font-mono text-[9.5px] text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  VIEW PROJECT →
                </span>
                <span className="font-mono text-[9px] text-muted">{row.year}</span>
              </div>
            </article>
          ))}
        </div>

        {/* big centered preview — fixed while the rows move */}
        <div className="hidden w-[35vw] shrink-0 lg:block">
          <div className="work-preview sticky top-[10vh] flex h-[80vh] flex-col">
            <div className="flex gap-1.5 px-1 pb-3 pt-1">
              {[0, 1, 2].map((d) => (
                <span key={d} className={`size-2 rounded-full ${d === active % 3 ? "bg-muted" : "bg-line"}`} />
              ))}
            </div>
            <div className="relative flex-1 overflow-hidden rounded-xl bg-line/40">
              {work.map((p, i) =>
                p.video ? (
                  <video
                    key={p.no}
                    ref={(el) => {
                      videoRefs.current[i] = el;
                    }}
                    src={p.video}
                    muted
                    playsInline
                    preload={i === active ? "auto" : "metadata"}
                    aria-label={`${p.name} — project demo`}
                    className="absolute inset-0 h-full w-full object-contain transition-opacity duration-500"
                    style={{ opacity: i === active ? 1 : 0 }}
                  />
                ) : p.cover ? (
                  <Image
                    key={p.no}
                    src={p.cover}
                    alt={p.name}
                    fill
                    sizes="35vw"
                    className="object-contain transition-opacity duration-500"
                    style={{ opacity: i === active ? 1 : 0 }}
                  />
                ) : null,
              )}
            </div>
            <div className="mt-3 flex items-center justify-between px-1 pb-1 font-mono text-[9px] tracking-[0.08em] text-muted">
              <span>
                ({w.no} / {String(work.length).padStart(2, "0")})
              </span>
              <span>{w.stack}</span>
            </div>
            <div className="h-0.5 w-full rounded-full bg-line" />
          </div>
        </div>
      </div>
    </section>
  );
}
