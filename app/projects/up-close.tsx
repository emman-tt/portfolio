"use client";

import { useRef } from "react";
import Image from "next/image";
import { covers } from "@/lib/content";
import { gsap, useGsap } from "../shared/gsap";

export function UpClose() {
  const ref = useRef<HTMLElement>(null);

  useGsap(() => {
    const q = gsap.utils.selector(ref.current!);

    gsap.from(q(".strip-item"), {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.06,
      ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 88%" },
    });
  }, ref);

  return (
    <section ref={ref} className="pb-20 pt-2">
      <div className="flex items-center justify-between px-6 font-mono text-[10px] tracking-[0.08em] text-label md:px-14">
        <span>(UP CLOSE) — DRAG OR SCROLL →</span>
        <span className="hidden sm:block">SCROLLABLE · 5 CARDS · 4×5 LOOP</span>
      </div>
      <div className="strip mt-5 flex gap-5 overflow-x-auto px-6 md:px-14">
        {covers.map((c, i) => (
          <figure key={i} className="strip-item w-[290px] shrink-0 sm:w-[350px]">
            <div className="overflow-hidden rounded-md">
              <Image
                src={c.src}
                alt={c.caption}
                width={720}
                height={1000}
                className="h-[500px] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
            <figcaption className="pt-3 font-mono text-[10px]">{c.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
