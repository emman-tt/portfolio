"use client";

import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGsap } from "./gsap";

if (typeof window !== "undefined") gsap.registerPlugin(SplitText);

export function SiteFooter() {
  const ref = useRef<HTMLElement>(null);

  useGsap(() => {
    const q = gsap.utils.selector(ref.current!);

    gsap.from(q(".foot-fade"), {
      opacity: 0,
      y: 14,
      duration: 0.7,
      stagger: 0.08,
      ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 90%" },
    });

    // LET'S TALK — same char-mask slide as the hero name
    let revert: (() => void) | undefined;
    let dead = false;
    (document.fonts?.ready ?? Promise.resolve()).then(() => {
      if (dead) return;
      const cta = q(".footer-cta")[0] as Element | undefined;
      if (!cta) return;
      const split = SplitText.create(cta, {
        type: "chars",
        mask: "chars",
        autoSplit: true,
      });
      gsap.from(split.chars, {
        yPercent: 120,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.024,
        scrollTrigger: { trigger: cta, start: "top 90%" },
      });
      revert = () => split.revert();
    });

    return () => {
      dead = true;
      revert?.();
    };
  }, ref);

  return (
    <footer ref={ref} className="border-t border-line bg-bg px-6 pb-8 pt-14 text-ink md:px-14">
      <span className="foot-fade inline-block rounded bg-blue px-[10px] py-[6px] font-mono text-[9px] tracking-[0.1em] text-[#f4f2ec]">
        GOT SOMETHING IN MIND?
      </span>
      <a
        href="mailto:emmanuelacquah.dev@gmail.com"
        className="footer-cta mt-14 block font-display text-[clamp(56px,13.2vw,190px)] font-bold leading-[0.9] tracking-[-0.026em]"
      >
        LET&apos;S TALK
      </a>
      <div className="mt-14 flex flex-wrap items-center justify-between gap-6 font-mono text-[10px] text-muted">
        <div className="flex flex-wrap gap-6">
          <a href="mailto:emmanuelacquah.dev@gmail.com" className="foot-fade transition-colors hover:text-ink">
            emmanuelacquah.dev@gmail.com
          </a>
          <a href="#top" className="foot-fade transition-colors hover:text-ink">
            LinkedIn ↗
          </a>
          <a href="#top" className="foot-fade transition-colors hover:text-ink">
            Github ↗
          </a>
          <a
            href="https://gen.emmanverse.uk/Emmanuel_Acquah.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="foot-fade transition-colors hover:text-ink"
          >
            Résumé ↗
          </a>
        </div>
        <a href="#top" className="foot-fade transition-colors hover:text-ink">
          Accra • +233 54 744 2943 • ↑
        </a>
      </div>
    </footer>
  );
}
