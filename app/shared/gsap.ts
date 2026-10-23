"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Runs a gsap.context setup on mount (skipped for reduced-motion users).
 * Setup may return its own cleanup (e.g. a SplitText revert) — it runs on unmount.
 */
export function useGsap(
  setup: (ctx: gsap.Context) => void | (() => void),
  scope?: { current: HTMLElement | null },
) {
  useEffect(() => {
    if (prefersReduced()) return;
    const ctx = gsap.context(() => {}, scope?.current ?? undefined);
    let cleanup: void | (() => void);
    ctx.add(() => {
      cleanup = setup(ctx);
    });
    return () => {
      if (typeof cleanup === "function") cleanup();
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export { gsap, ScrollTrigger };
