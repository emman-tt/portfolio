"use client";

import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGsap } from "../shared/gsap";

if (typeof window !== "undefined") gsap.registerPlugin(SplitText);

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useGsap((ctx) => {
    const q = gsap.utils.selector(ref.current!);

    gsap.from(q(".hero-fade"), {
      y: 26,
      opacity: 0,
      duration: 0.8,
      stagger: 0.08,
      ease: "power3.out",
      delay: 0.8,
    });

    // split the name once the display font is loaded, then slide chars up
    let revert: (() => void) | undefined;
    let dead = false;
    (document.fonts?.ready ?? Promise.resolve()).then(() => {
      if (dead) return;
      const split = SplitText.create(q(".hero-line"), {
        type: "chars",
        mask: "chars",
        autoSplit: true,
      });
      gsap.from(split.chars, {
        yPercent: 120,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.032,
        delay: 0.15,
      });
      revert = () => split.revert();
    });

    return () => {
      dead = true;
      revert?.();
    };
  }, ref);

  return (
    <section ref={ref} className="px-6 pb-14 pt-10 md:px-14">
      <h1 className="font-display text-[clamp(3.4rem,12.9vw,186px)] font-bold leading-[0.87] tracking-[-0.022em]">
        <span className="hero-line block">EMMANUEL</span>
        <span className="hero-line block">ACQUAH</span>
      </h1>
      <div className="mt-11 flex flex-wrap items-end justify-between gap-8">
        <p className="hero-fade max-w-[300px] text-[13px] leading-[1.55] text-muted">
          Full-stack engineer building ticketing, marketplaces &amp; infra with motion baked in.
        </p>
        <a
          href="#work"
          className="hero-fade font-mono text-[10px] text-muted transition-colors hover:text-ink"
        >
          ↓ Scroll, gently
        </a>
      </div>
    </section>
  );
}
