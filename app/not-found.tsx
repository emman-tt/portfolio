import { SiteFooter } from "./shared/footer";

export default function NotFound() {
  return (
    <main className="grid min-h-svh bg-bg text-ink">
      <section className="flex flex-1 flex-col justify-center px-6 py-24 md:px-14">
        <span className="font-mono text-[10px] tracking-[0.14em] text-label">[ 404 ]</span>
        <h1 className="statement mt-4 text-[clamp(56px,9vw,140px)]">Lost this page.</h1>
        <p className="mt-5 max-w-[360px] text-[13.5px] leading-[1.6] text-muted">
          The URL you followed doesn&apos;t exist — or it moved while the ink was still wet.
        </p>
        <a
          href="/home"
          className="mt-10 w-fit border-b border-ink/40 pb-1 font-mono text-[10px] font-semibold tracking-[0.12em] transition-opacity hover:opacity-60"
        >
          BACK TO THE WORK →
        </a>
      </section>
      <SiteFooter />
    </main>
  );
}
