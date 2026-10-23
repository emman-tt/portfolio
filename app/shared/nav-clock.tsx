"use client";

import { useEffect, useState } from "react";

/** ACCRA, GHANA / HH:MM — hydrates to a live clock and keeps the SSR value before that. */
export function NavClock() {
  const [time, setTime] = useState("22:52");

  useEffect(() => {
    const tick = () => {
      try {
        setTime(
          new Intl.DateTimeFormat("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
            timeZone: "Africa/Accra",
          }).format(new Date())
        );
      } catch {}
    };
    tick();
    const t = setInterval(tick, 30_000);
    return () => clearInterval(t);
  }, []);

  return (
    <span className="hidden font-mono text-[10px] tracking-[0.08em] text-muted lg:block">
      ACCRA, GHANA / {time}
    </span>
  );
}
