"use client";

import { useCart } from "@/store/cart";
import { formatINR } from "@/lib/pricing";
import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";

const CartSheet = dynamic(() => import("./CartSheet"), { ssr: false });

export default function StickyCartBar() {
  const { items, totals } = useCart();
  const t = totals();
  const [open, setOpen] = useState(false);

  if (items.length === 0) return null;

  return (
    <div className="fixed left-0 right-0 bottom-0 z-40">
      <div className="pointer-events-none px-4 pb-[env(safe-area-inset-bottom)]">
        <div className="pointer-events-auto mx-auto max-w-3xl mb-4 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] backdrop-blur shadow-xl">
          <div className="flex items-center justify-between p-3 gap-3">
            <div className="text-sm text-zinc-200">
              <span className="font-semibold">{items.length} question{items.length>1?'s':''}</span>
              <span className="mx-2">•</span>
              <span className="text-zinc-300">{formatINR(t.total)}</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="btn-ghost" onClick={() => setOpen(true)}>View Cart</button>
              <Link className="btn-primary" href="/checkout">Checkout</Link>
            </div>
          </div>
        </div>
      </div>
      <CartSheet open={open} onOpenChange={setOpen} />
    </div>
  );
}


