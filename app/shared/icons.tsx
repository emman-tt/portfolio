export const ArrowRight = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ArrowUpRight = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const PauseBars = ({ className = "" }: { className?: string }) => (
  <svg width="9" height="9" viewBox="0 0 10 10" fill="currentColor" className={className}>
    <rect x="1" y="0" width="3" height="10" />
    <rect x="6" y="0" width="3" height="10" />
  </svg>
);
