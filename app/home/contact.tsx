"use client";

import { useState } from "react";

const inputCls =
  "w-full border-b border-hair bg-transparent py-3 font-body outline-none transition-colors focus:border-ink";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="grid gap-14 px-6 pb-24 pt-16 sm:gap-20 sm:pb-28 sm:pt-24 md:grid-cols-[470px_1fr] md:px-14">
      <div className="pt-3">
        <span className="font-mono text-[10px] tracking-[0.14em] text-label">GET IN TOUCH</span>
        <h2 className="statement mt-5 text-[clamp(44px,5.3vw,78px)]">Speak to us.</h2>
        <p className="mt-6 max-w-[340px] text-[13.5px] leading-[1.6] text-muted">
          If you want to start a project, share an idea or simply say hi, we want to hear from you.
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
        className="flex flex-col gap-10 sm:gap-12"
      >
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-16">
          <Field label="First name" name="first" defaultValue="" />
          <Field label="Last name" name="last" defaultValue="" />
        </div>
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-16">
          <Field label="Email Address" name="email" type="email" defaultValue="" className="text-[24px]" />
          <Field label="Phone number" name="phone" defaultValue="" className="text-[26px]" />
        </div>
        <Field label="Project details" name="details" className="text-[32px]" />

        <div className="flex items-center gap-6">
          <button
            type="submit"
            className="group flex items-center gap-4 self-start rounded-full bg-accent py-3.5 pl-6 pr-3.5 font-mono text-[11px] tracking-[0.12em] text-accent-ink transition-transform hover:-translate-y-0.5"
          >
            {sent ? "SENT ✓" : "SEND ENQUIRY"}
            <span className="grid size-[30px] place-items-center rounded-full bg-bg text-ink transition-transform group-hover:rotate-45">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-[15px]">
                <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
          {sent && <span className="font-mono text-[10px] text-muted">Thanks — I&apos;ll reply within 24h.</span>}
        </div>
      </form>
    </section>
  );
}

function Field({
  label, name, defaultValue = "", type = "text", className = "text-[30px]",
}: {
  label: string;
  name: string;
  defaultValue?: string;
  type?: string;
  className?: string;
}) {
  return (
    <label className="flex flex-col gap-3">
      <span className="font-mono text-[9.5px] tracking-[0.08em] text-label">{label}</span>
      <input type={type} name={name} defaultValue={defaultValue} className={`${inputCls} ${className}`} />
    </label>
  );
}
