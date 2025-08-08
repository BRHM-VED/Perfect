export default function HeroCover() {
  return (
    <div
      aria-hidden
      className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[#091124]"
    >
      <div className="absolute inset-0" aria-hidden>
        {/* Concentric glow */}
        <div className="absolute inset-[-10%] bg-radial [--color:rgba(34,211,238,0.25)]" />
        <div className="absolute inset-0">
          <svg viewBox="0 0 100 100" className="w-full h-full block">
            <defs>
              <radialGradient id="g" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.6" />
                <stop offset="30%" stopColor="#00B3FF" stopOpacity="0.15" />
                <stop offset="70%" stopColor="#0B1220" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="100" height="100" fill="url(#g)" />
            {/* Concentric circles */}
            {[10, 20, 30, 40].map((r) => (
              <circle key={r} cx="50" cy="50" r={r} fill="none" stroke="#0E1930" strokeWidth="0.5" />
            ))}
            {/* Crosshair */}
            <line x1="0" y1="50" x2="100" y2="50" stroke="#123" strokeWidth="0.4" />
            <line x1="50" y1="0" x2="50" y2="100" stroke="#123" strokeWidth="0.4" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center">
          <div className="text-[38px] sm:text-[48px] font-extrabold leading-none tracking-tight text-white">
            PERFECT
          </div>
          <div className="text-[38px] sm:text-[48px] font-extrabold leading-none tracking-tight text-cyan-400">
            TIMING
          </div>
        </div>
      </div>
    </div>
  );
}


