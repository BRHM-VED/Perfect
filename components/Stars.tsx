type Props = { value: number; count?: number; className?: string };

export default function Stars({ value, count, className }: Props) {
  const rounded = Math.round(value * 2) / 2;
  return (
    <div className={className} aria-label={`Rating ${value} out of 5`} role="img">
      <div className="flex items-center gap-1 text-yellow-400">
        {Array.from({ length: 5 }).map((_, i) => {
          const full = i + 1 <= Math.floor(rounded);
          const half = !full && i + 0.5 === rounded;
          return (
            <span key={i} aria-hidden>
              {full ? "★" : half ? "☆" : "☆"}
            </span>
          );
        })}
        {typeof count === "number" && (
          <span className="ml-1 text-xs text-zinc-400">({count})</span>
        )}
      </div>
    </div>
  );
}


