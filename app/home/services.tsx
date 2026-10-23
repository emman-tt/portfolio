"use client";

import { useId, useRef } from "react";
import gsap from "gsap";
import { tickets } from "@/lib/content";
import { useGsap } from "../shared/gsap";

/* ---------- lanyard hardware ---------- */

/** Black side-release buckle, lit from the top-left. */
function Buckle() {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  return (
    <svg
      aria-hidden
      viewBox="0 0 40 46"
      width="40"
      height="46"
      className="relative z-[3] -my-px shrink-0"
      style={{ filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.28))" }}
    >
      <defs>
        <linearGradient id={`bk-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#56564f" />
          <stop offset=".14" stopColor="#30302d" />
          <stop offset=".4" stopColor="#171716" />
          <stop offset=".58" stopColor="#3c3c38" />
          <stop offset=".8" stopColor="#1d1d1b" />
          <stop offset="1" stopColor="#0d0d0c" />
        </linearGradient>
        <linearGradient id={`sh-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".4" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`sl-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#000" />
          <stop offset="1" stopColor="#2c2c29" />
        </linearGradient>
      </defs>

      {/* female housing */}
      <rect x="1" y="0.8" width="38" height="21.4" rx="4.6" fill={`url(#bk-${uid})`} stroke="#080807" strokeWidth=".8" />
      {/* side release buttons */}
      <rect x="3.6" y="6.4" width="3.4" height="9.4" rx="1.6" fill={`url(#sl-${uid})`} />
      <rect x="33" y="6.4" width="3.4" height="9.4" rx="1.6" fill={`url(#sl-${uid})`} />
      {/* centre slot the strap returns through */}
      <rect x="14.4" y="7" width="11.2" height="4.2" rx="1.4" fill={`url(#sl-${uid})`} />
      <rect x="14.4" y="12.8" width="11.2" height="3.2" rx="1.2" fill="#101010" opacity=".9" />

      {/* male prong */}
      <path
        d="M9 21h22v17.6c0 3.6-2.6 6.2-6.2 6.2h-9.6c-3.6 0-6.2-2.6-6.2-6.2V21Z"
        fill={`url(#bk-${uid})`}
        stroke="#080807"
        strokeWidth=".8"
      />
      <path d="M12 24h16v13.8c0 1.6-1.2 2.8-2.8 2.8h-10.4c-1.6 0-2.8-1.2-2.8-2.8V24Z" fill="#0f0f0e" opacity=".55" />
      <path d="M12.6 24.6h14.8" stroke="#fff" strokeOpacity=".12" strokeWidth=".8" />

      {/* top bevel + parting line */}
      <path d="M5.6 1.4h28.8c2.4 0 4.1 1.7 4.1 4.1v2.2H1.5V5.5c0-2.4 1.7-4.1 4.1-4.1Z" fill={`url(#sh-${uid})`} />
      <path d="M1 21.2h38" stroke="#050505" strokeWidth="1.1" />
      <path d="M1 22h38" stroke="#fff" strokeOpacity=".09" strokeWidth=".7" />
    </svg>
  );
}

/** Steel D-ring + swivel snap hook, chrome-shaded. */
function SwivelClip() {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 52"
      width="24"
      height="52"
      className="relative z-[2] -mt-[7px] shrink-0"
      style={{ filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.28))" }}
    >
      <defs>
        <linearGradient id={`me-${uid}`} x1="0" y1="0" x2="1" y2=".15">
          <stop offset="0" stopColor="#5e5e59" />
          <stop offset=".14" stopColor="#b9b9b2" />
          <stop offset=".28" stopColor="#fbfbf7" />
          <stop offset=".46" stopColor="#c7c7c0" />
          <stop offset=".58" stopColor="#8e8e88" />
          <stop offset=".75" stopColor="#e8e8e1" />
          <stop offset=".9" stopColor="#9d9d96" />
          <stop offset="1" stopColor="#55554f" />
        </linearGradient>
        <linearGradient id={`mg-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8a8a83" />
          <stop offset=".5" stopColor="#4c4c47" />
          <stop offset="1" stopColor="#232321" />
        </linearGradient>
      </defs>
      {/* D-ring */}
      <rect
        x="4.2"
        y="1.2"
        width="15.6"
        height="16.6"
        rx="5.4"
        fill="none"
        stroke={`url(#me-${uid})`}
        strokeWidth="2.5"
      />
      <rect
        x="4.2"
        y="1.2"
        width="15.6"
        height="16.6"
        rx="5.4"
        fill="none"
        stroke="#fff"
        strokeOpacity=".28"
        strokeWidth=".7"
      />
      {/* swivel collar + barrel */}
      <rect x="9" y="16" width="6" height="5.4" rx="1.4" fill={`url(#me-${uid})`} stroke="#3a3a36" strokeWidth=".5" />
      <rect x="7.6" y="20.4" width="8.8" height="6.4" rx="2.4" fill={`url(#me-${uid})`} stroke="#454540" strokeWidth=".5" />
      {/* snap hook */}
      <rect
        x="7"
        y="27.2"
        width="10"
        height="22.6"
        rx="5"
        fill="none"
        stroke={`url(#me-${uid})`}
        strokeWidth="2.1"
      />
      <path d="M12 29.6v16.4" stroke={`url(#mg-${uid})`} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 30.6v14.6" stroke="#f3f3ed" strokeOpacity=".65" strokeWidth=".55" strokeLinecap="round" />
      <path
        d="M8.2 32.6c-.7 1.6-.9 3.2-.9 5.2"
        stroke="#fff"
        strokeOpacity=".55"
        strokeWidth=".8"
        strokeLinecap="round"
      />
    </svg>
  );
}

const BARS = [2, 3, 1.5, 4, 2.5, 1, 3.5, 2, 4.5, 1.5, 3, 2, 4, 1, 3.5, 2.5, 1.5, 4, 2, 3];

/* ---------- hanging lanyard card with pendulum physics ---------- */
type Ticket = (typeof tickets)[number];

function Hanger({
  t,
  idx,
  strapLen,
  compact = false,
  pos,
}: {
  t: Ticket;
  idx: number;
  strapLen: number;
  compact?: boolean;
  pos: React.CSSProperties;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const swayRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGsap(() => {
    const sway = swayRef.current!;
    const card = cardRef.current!;
    const inner = card.firstElementChild as HTMLElement;
    const root = rootRef.current!;

    // start swung so the cards arrive already alive, then settle
    let th1 = (idx % 2 ? 1 : -1) * (0.10 + idx * 0.02);
    let om1 = 0;
    let prevOm1 = 0;
    let th2 = 0;
    let om2 = 0;
    let dragging = false;
    let target = th1; // pointer drag target (rad), eased into by a stiff spring
    let pointerVel = 0; // smoothed pointer angular velocity, carried into the fling
    let lastMoveT = 0;
    const phase = idx * 1.7;
    const cl = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

    const tick = (_time: number, deltaMS: number) => {
      const dt = Math.min(deltaMS, 50) / 1000;

      if (dragging) {
        // stiff, nearly-critically-damped spring toward the pointer: responsive
        // but weighted, and its momentum flows straight into the release
        om1 += ((target - th1) * 300 - om1 * 33) * dt;
        th1 += om1 * dt;
      } else {
        // free pendulum: gravity spring + air drag + faint ambient breeze,
        // softly contained so the strap can never wrap over the rail
        om1 += (-th1 * 6.5 - om1 * 1.35) * dt;
        om1 +=
          Math.sin(gsap.ticker.time * 0.55 + phase) *
          0.16 *
          dt *
          Math.max(0, 1 - Math.abs(om1) * 2.5);
        if (Math.abs(th1) > 0.92) om1 += (Math.sign(th1) * 0.92 - th1) * 42 * dt;
        th1 += om1 * dt;
      }

      // the card is a second weight hung off the strap: its own gravity spring,
      // a lean that follows the strap direction, and an inertial kick from the
      // strap's angular acceleration (it lags the other way, like real cordage)
      const acc1 = dt > 0 ? (om1 - prevOm1) / dt : 0;
      prevOm1 = om1;
      om2 += (-th2 * 9 - om2 * 2.2) * dt;
      om2 += (th1 * 1.3 - th2) * 1.35 * dt;
      om2 -= acc1 * 0.16 * dt;
      th2 += om2 * dt;

      // pseudo-3D: the card twists around its vertical axis with its own motion
      const oy = cl(om2 * 9, -15, 15);
      sway.style.transform = `rotate(${th1}rad)`;
      card.style.transform = `perspective(700px) rotate(${th2}rad) rotateY(${oy}deg)`;
    };
    gsap.ticker.add(tick);

    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      const now = performance.now();
      const dt = Math.max(now - lastMoveT, 8) / 1000;
      const rect = root.getBoundingClientRect();
      const ax = rect.left + rect.width / 2;
      const next = cl(
        (e.clientX - ax) / (strapLen + (compact ? 250 : 340)),
        -0.85,
        0.85,
      );
      // smooth the pointer velocity so fractional hand jitter doesn't fling it
      pointerVel = pointerVel * 0.6 + ((next - target) / dt) * 0.4;
      target = next;
      lastMoveT = now;
    };
    const onDown = (e: PointerEvent) => {
      e.preventDefault();
      dragging = true;
      lastMoveT = performance.now();
      pointerVel = 0;
      target = th1; // no snap on grab — the spring takes over from where it hangs
      om1 += 0.1; // a small "give" when you take hold of it
      root.classList.add("cursor-grabbing");
      gsap.fromTo(
        inner,
        { scale: 0.97 },
        { scale: 1.03, duration: 0.25, ease: "back.out(2.2)", overwrite: true },
      );
      window.addEventListener("pointermove", onMove);
      (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    };
    const onUp = () => {
      if (!dragging) return;
      dragging = false;
      om1 = cl(pointerVel * 0.9, -3.6, 3.6); // release momentum = the fling
      root.classList.remove("cursor-grabbing");
      gsap.to(inner, {
        scale: 1,
        duration: 0.9,
        ease: "elastic.out(1, 0.38)",
        overwrite: true,
      });
      window.removeEventListener("pointermove", onMove);
    };
    // brushing past a card nudges it — the whole rail feels touchable
    const onEnter = (e: PointerEvent) => {
      if (dragging) return;
      const rect = card.getBoundingClientRect();
      om2 += e.clientX > rect.left + rect.width / 2 ? -0.35 : 0.35;
    };

    card.addEventListener("pointerdown", onDown);
    card.addEventListener("pointerenter", onEnter);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);

    return () => {
      gsap.ticker.remove(tick);
      card.removeEventListener("pointerdown", onDown);
      card.removeEventListener("pointerenter", onEnter);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  });

  const cardW = compact ? "w-[218px]" : "w-[268px]";
  const cardH = compact ? "h-[264px]" : "h-[300px]";
  const ink = "#17160f";
  const face = `linear-gradient(153deg, color-mix(in srgb, ${t.accent} 92%, #ffffff) 0%, ${t.accent} 40%, color-mix(in srgb, ${t.accent} 88%, #000000) 100%)`;

  return (
    <div ref={rootRef} className="hanger pointer-events-auto" style={pos}>
      {/* rotates around the rail anchor */}
      <div
        ref={swayRef}
        className="flex flex-col items-center"
        style={{ transformOrigin: "top center" }}
      >
        {/* strap threaded through a steel eyelet on the rail */}
        <span className="rail-eye" />
        <span className="lanyard-strap -mt-[5px]" style={{ height: strapLen }} />

        {/* buckle breaks up the strap, like a real lanyard */}
        <Buckle />
        <span className={`lanyard-strap ${compact ? "h-[30px]" : "h-[38px]"}`} />

        {/* folded, stitched end wrapped around the D-ring */}
        <span className="lanyard-hem" />
        <SwivelClip />

        {/* ID card — hangs off the clip, counter-sways on its own spring */}
        <div
          ref={cardRef}
          className="relative z-0 -mt-[20px] cursor-grab touch-pan-y select-none active:cursor-grabbing"
          style={{ transformOrigin: "top center" }}
        >
          <div
            className={`id-card ${cardW} ${cardH} overflow-hidden`}
            style={{ background: face, color: ink }}
          >
            <span className="card-grain" />
            <span className="card-gloss" />
            <span className="punch" />

            {/* big ghosted pass number */}
            <span
              aria-hidden
              className="pointer-events-none absolute -right-3 top-[33%] select-none font-display text-[124px] font-extrabold leading-none tracking-[-0.07em] opacity-[0.09]"
            >
              {t.no.replace(/\D/g, "")}
            </span>

            <div className={`relative z-[2] flex h-full flex-col px-5 ${compact ? "pt-10" : "pt-11"}`}>
              {/* header */}
              <div className="flex items-start justify-between font-mono text-[8px] leading-[1.45] tracking-[0.15em]">
                <span className="flex items-center gap-1.5">
                  <span className="size-[5px] rounded-[1px] bg-current opacity-80" />
                  <span>
                    EMMANUEL
                    <br />
                    ACQUAH
                  </span>
                </span>
                <span className="text-right">
                  SERVICES
                  <br />
                  {t.no}
                </span>
              </div>

              {/* stamped seal */}
              <span
                className={`absolute ${compact ? "left-4 top-[41%]" : "left-5 top-[43%]"} flex -rotate-[8deg] items-center gap-1 rounded-full border px-3 py-1.5 font-mono text-[8.5px] tracking-[0.16em]`}
                style={{
                  borderColor: "rgba(23,22,15,.55)",
                  background: "rgba(255,255,255,.26)",
                  boxShadow: "0 2px 0 rgba(0,0,0,.12), 0 6px 12px -4px rgba(0,0,0,.3), inset 0 1px 0 rgba(255,255,255,.5)",
                }}
              >
                <span className="text-[10px] leading-none">✓</span>
                {t.stamp.toUpperCase()}
              </span>

              {/* service title */}
              <div className={`absolute inset-x-5 ${compact ? "bottom-[70px]" : "bottom-[80px]"}`}>
                <span className="block font-mono text-[8px] tracking-[0.16em] opacity-60">
                  {t.tag}
                </span>
                <span
                  className={`mt-1.5 block font-display font-extrabold leading-[0.9] tracking-[-0.04em] ${compact ? "text-[30px]" : "text-[34px]"}`}
                >
                  {t.title}
                </span>
              </div>

              {/* barcode strip */}
              <div className="absolute inset-x-5 bottom-4">
                <div className="mb-1.5 flex items-center justify-between font-mono text-[7px] tracking-[0.16em] opacity-60">
                  <span>ALL ACCESS</span>
                  <span>EAC · 2026</span>
                </div>
                <div className="flex h-6 items-stretch justify-between gap-[2px] opacity-80">
                  {BARS.map((w, i) => (
                    <span
                      key={i}
                      className="rounded-[.5px] bg-current"
                      style={{ flexGrow: w, opacity: w > 3 ? 0.95 : 0.5 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  const ref = useRef<HTMLElement>(null);

  useGsap(() => {
    const q = gsap.utils.selector(ref.current!);

    gsap.from(q(".services-head"), {
      opacity: 0,
      y: 14,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 86%" },
    });

    gsap.from(q(".hanger"), {
      y: -26,
      opacity: 0,
      duration: 0.8,
      stagger: 0.09,
      ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 84%" },
    });
  }, ref);

  const straps = [64, 118, 88, 148];

  return (
    <section
      id="services"
      ref={ref}
      className="relative overflow-hidden px-6 pb-32 pt-8 md:px-14"
    >
      <div className="services-head relative
      mb-12 flex items-center justify-between 
      font-mono text-[10px] tracking-[0.08em]">
        <span className="text-muted">WHAT I DO</span>
        <span className="text-ink">ALL SERVICES →</span>
      </div>

      {/* desktop — one rail, four hangers */}
      <div className="relative mx-auto hidden h-[640px] max-w-[1320px] md:block">
        <div className="absolute inset-x-8 top-[3px] border-t border-line" />
        {tickets.map((t, i) => (
          <div
            key={t.no}
            className="absolute top-0 h-full"
            style={{ left: `${12 + i * 25.5}%`, translate: "-50% 0" }}
          >
            <Hanger t={t} idx={i} strapLen={straps[i]} pos={{ position: "relative" }} />
          </div>
        ))}
      </div>

      {/* mobile — stacked rails */}
      <div className="relative flex flex-col gap-10 md:hidden">
        {[30, 64, 46, 84].map((strap, i) => {
          const t = tickets[i];
          return (
            <div
              key={t.no}
              className="relative overflow-visible"
              style={{ height: strap + 406 }}
            >
              <div className="absolute inset-x-6 top-[3px] border-t border-line" />
              <Hanger t={t} idx={i} strapLen={strap} compact pos={{ position: "absolute", left: "50%", translate: "-50% 0" }} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
