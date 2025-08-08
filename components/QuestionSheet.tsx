"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Question } from "@/data/questions";
import Stars from "./Stars";
import { useCart } from "@/store/cart";

type Props = { open: boolean; onOpenChange: (v: boolean) => void; q: Question };

export default function QuestionSheet({ open, onOpenChange, q }: Props) {
  const add = useCart((s) => s.add);
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 data-[state=open]:animate-in data-[state=closed]:animate-out" />
        <Dialog.Content className="fixed inset-x-0 bottom-0 md:inset-auto md:right-4 md:bottom-4 md:top-4 md:w-[420px] card p-5 rounded-t-2xl md:rounded-2xl focus-ring outline-none">
          <div className="flex items-center justify-between">
            <Dialog.Title className="text-zinc-100 font-semibold text-base">{q.title}</Dialog.Title>
            <Dialog.Close className="btn-ghost px-3 py-1" aria-label="Close">ESC</Dialog.Close>
          </div>
          <div className="mt-2 text-xs text-cyan-300">{q.category}</div>
          <div className="mt-3"><Stars value={q.rating} count={q.reviews} /></div>
          <div className="mt-4 text-sm text-zinc-300 space-y-2">
            <p>What you’ll receive:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Exact timing window(s)</li>
              <li>Remedies to strengthen outcomes</li>
              <li>Clear action plan</li>
            </ul>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="text-zinc-300 text-sm">₹299 per question</div>
            <button
              className="btn-primary"
              onClick={() => {
                add({ id: q.id, title: q.title, category: q.category });
                onOpenChange(false);
                const live = document.getElementById("cart-live-region");
                if (live) live.textContent = "Added to cart";
              }}
            >
              Add to Cart
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}


