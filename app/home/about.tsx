"use client";

import { Fragment, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { statementLines } from "@/lib/content";
import { useGsap } from "../shared/gsap";

if (typeof window !== "undefined") gsap.registerPlugin(SplitText);

/* flatten the statement into words, then regroup into staircase rows —
   visual breaks, not sentence breaks */
const WORDS = statementLines.flat(); // [text, blur, delay][] flattened
const ROW_SIZE = [3, 3, 3, 4, 3, 3, 3];
const ROWS: Array<Array<(typeof WORDS)[number]>> = (() => {
  const rows: Array<Array<(typeof WORDS)[number]>> = [];
  let w = 0;
  for (const n of ROW_SIZE) {
    rows.push(WORDS.slice(w, w + n));
    w += n;
  }
  return rows;
})();

/* each row is a step: offset, tilt, and a growing size */
const ROW_STYLE = [
  { step: "0%", tilt: "-1.2deg", size: "clamp(40px, 5.9vw, 134px)" },
  { step: "9%", tilt: "1.1deg", size: "clamp(43px, 6.4vw, 146px)" },
  { step: "4%", tilt: "-1.6deg", size: "clamp(46px, 6.9vw, 158px)" },
  { step: "14%", tilt: "1.3deg", size: "clamp(49px, 7.35vw, 170px)" },
  { step: "7%", tilt: "-1deg", size: "clamp(52px, 7.95vw, 180px)" },
  { step: "8%", tilt: "1.5deg", size: "clamp(55px, 8.6vw, 195px)" },
  { step: "11%", tilt: "-1.4deg", size: "clamp(58px, 9.45vw, 216px)" },
];

/* a few words set in serif — the editorial accent inside the display type */
const SERIF = new Set(["Emmanuel.", "move,", "respond", "feel"]);

export function About() {
  const ref = useRef<HTMLElement>(null);

  useGsap(() => {
    const q = gsap.utils.selector(ref.current!);
    gsap.from(q(".about-note"), {
      opacity: 0,
      y: 10,
      duration: 0.7,
      ease: "power2.out",
      delay: 0.35,
    });

    // statement — SplitText chars, pinned section, ink fills in as you scroll.
    // every char starts faded on the paper and settles to full black,
    // staggered left→right across the staircase
    let revert: (() => void) | undefined;
    let dead = false;
    (document.fonts?.ready ?? Promise.resolve()).then(() => {
      if (dead) return;
      const target = q(".statement-steps")[0] as HTMLElement | undefined;
      if (!target) return;
      const split = SplitText.create(target, { type: "chars", autoSplit: true });

      gsap.fromTo(
        split.chars,
        { opacity: 0.12 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.03,
          scrollTrigger: {
            trigger: ref.current,
            start: "top top",
            end: "+=200%",
            pin: true,
            scrub: 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        },
      );
      revert = () => split.revert();
    });

    return () => {
      dead = true;
      revert?.();
    };
  }, ref);

  let wi = 0;
  return (
    <section id="about" ref={ref} className="overflow-hidden px-6 pb-8 pt-10 md:px-14">
      <span className="font-mono text-[10px] text-muted">[HELLO]</span>
      <div className="mt-8">
        <p className="statement-steps mx-auto max-w-none text-ink">
          {ROWS.map((row, ri) => (
            <span
              key={ri}
              className="step-line"
              style={
                {
                  "--step": ROW_STYLE[ri].step,
                  "--tilt": ROW_STYLE[ri].tilt,
                  fontSize: ROW_STYLE[ri].size,
                } as React.CSSProperties
              }
            >
              {row.map((parts, i) => (
                <Fragment key={parts[0] + String(wi++)}>
                  <span className={SERIF.has(parts[0]) ? "font-serif" : undefined}>
                    {parts[0]}
                  </span>
                  {i < row.length - 1 ? " " : null}
                </Fragment>
              ))}
            </span>
          ))}
        </p>

        <p className="about-note mt-8 text-center font-mono text-[9px] text-muted">
          (SCROLL — THE INK SETTLES)
        </p>
      </div>
    </section>
  );
}
