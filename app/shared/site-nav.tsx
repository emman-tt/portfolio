import { NavClock } from "./nav-clock";

export function SiteNav() {
  return (
    <header id="top" className="flex items-center justify-between gap-4 px-6 py-[26px] md:grid md:grid-cols-[auto_1fr_auto] md:px-14 md:py-[34px]">
      <a href="/home" className="flex items-baseline gap-2 justify-self-start">
        <span className="font-mono text-[13px] font-semibold tracking-[0.09em] text-ink">EMMANUEL</span>
        <span className="font-serif text-[16px] italic text-ink">Acquah</span>
      </a>
      <div className="justify-self-center">
        <NavClock />
      </div>
      <nav className="flex items-center gap-9 justify-self-end">
        <div className="hidden gap-6 font-mono text-[10px] tracking-[0.1em] text-ink md:flex">
          {(
            [
              ["Work", "/home#work"],
              ["Backend", "/backend"],
            ] as const
          ).map(([label, href]) => (
            <a key={label} href={href} className="transition-opacity hover:opacity-60">
              {label.toUpperCase()}
            </a>
          ))}
          <a
            href="https://gen.emmanverse.uk/Emmanuel_Acquah.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-60"
          >
            RÉSUMÉ&nbsp;↗
          </a>
        </div>
        <a
          href="/home#contact"
          className="flex items-center whitespace-nowrap rounded-full bg-blue px-[14px] py-[9px] font-mono text-[9px] tracking-[0.08em] text-[#f4f2ec] transition-transform hover:-translate-y-0.5 sm:px-5 sm:py-[11px] sm:text-[10px]"
        >
          START A PROJECT
        </a>
      </nav>
    </header>
  );
}
