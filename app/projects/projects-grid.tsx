"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/content";
import { ArrowUpRight } from "@/app/shared/icons";
import { gsap, useGsap } from "../shared/gsap";

export function ProjectsGrid() {
  const ref = useRef<HTMLElement>(null);

  useGsap(() => {
    const q = gsap.utils.selector(ref.current!);

    gsap.from(q(".pg-head"), {
      opacity: 0,
      y: 20,
      duration: 0.75,
      stagger: 0.08,
      ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 85%" },
    });

    q(".proj").forEach((p) => {
      gsap.from(p, {
        y: 80,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: p, start: "top 92%" },
      });
    });
  }, ref);

  return (
    <section ref={ref} className="px-6 pb-28 pt-10 md:px-14">
      <div className="pg-head mb-14 flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className="font-mono text-[10px] tracking-[0.08em] text-label">(ALL WORKS)</span>
          <h1 className="statement mt-4 text-[clamp(44px,6.2vw,96px)]">Selected projects.</h1>
        </div>
        <span className="font-mono text-[10px] tracking-[0.08em] text-label">INDEX · 04 BUILDS · 2025—2028</span>
      </div>

      <div className="grid gap-x-6 gap-y-14 md:grid-cols-2">
        {projects.map((p) => (
          <Link
            key={p.no}
            href="/#contact"
            className={`proj group block ${p.wide ? "md:col-span-2" : ""}`}
          >
            <div className={`relative overflow-hidden rounded-lg ${p.wide ? "h-[420px] md:h-[560px]" : "h-[380px]"}`}>
              <Image
                src={p.cover}
                alt={p.name}
                fill
                sizes={p.wide ? "100vw" : "50vw"}
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <span className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-bg text-ink opacity-0 transition-opacity group-hover:opacity-100">
                <ArrowUpRight className="size-4" />
              </span>
            </div>
            <div className="mt-5 flex items-start justify-between gap-6 border-t border-hair pt-4">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[11px] text-label">{p.no}</span>
                <span className="font-display text-[clamp(20px,2.4vw,30px)] font-bold tracking-tight">{p.name}</span>
                <span className="text-[13px] text-muted">{p.kind}</span>
              </div>
              <div className="hidden text-right sm:block">
                <span className="font-mono text-[11px] text-label">{p.year}</span>
                <p className="font-mono text-[11px] text-muted">{p.stack}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
