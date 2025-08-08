"use client";

import { categories } from "@/data/questions";

type Props = {
  active: string;
  onChange: (value: string) => void;
};

export default function CategoryChips({ active, onChange }: Props) {
  return (
    <div className="flex gap-2 flex-wrap">
      {["All", ...categories].map((c) => {
        const isActive = active === c;
        return (
          <button
            key={c}
            onClick={() => onChange(c)}
            className={`badge ${isActive ? "bg-white/10 text-white" : ""}`}
            aria-pressed={isActive}
          >
            {c}
          </button>
        );
      })}
    </div>
  );
}


