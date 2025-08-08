"use client";

import Stars from "./Stars";
import { useState } from "react";
import QuestionSheet from "./QuestionSheet";
import { Question } from "@/data/questions";

type Props = {
  q: Question;
};

export default function QuestionCard({ q }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card p-4 flex flex-col justify-between">
      <div>
        <div className="text-xs text-cyan-300">{q.category}</div>
        <h3 className="mt-2 text-zinc-100 font-semibold">{q.title}</h3>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <Stars value={q.rating} count={q.reviews} />
        <button className="btn-ghost" onClick={() => setOpen(true)}>View</button>
      </div>
      <QuestionSheet open={open} onOpenChange={setOpen} q={q} />
    </div>
  );
}


