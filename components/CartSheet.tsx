"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useCart } from "@/store/cart";
import { formatINR } from "@/lib/pricing";
import Link from "next/link";
import { useState } from "react";

type Props = { open: boolean; onOpenChange: (v: boolean) => void };

export default function CartSheet({ open, onOpenChange }: Props) {
  const { items, remove, setPromo, promoCode, totals } = useCart();
  const t = totals();
  const [promoInput, setPromoInput] = useState(promoCode ?? "");

  function applyPromo() {
    const code = promoInput.trim().toUpperCase();
    if (code === "ASTROFIRST") {
      setPromo(code);
      try { localStorage.setItem("pt-promo", code); } catch {}
    } else {
      setPromo(null);
      try { localStorage.removeItem("pt-promo"); } catch {}
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60" />
        <Dialog.Content className="fixed inset-x-0 bottom-0 md:right-4 md:bottom-4 md:top-4 md:w-[480px] card p-5 rounded-t-2xl md:rounded-2xl">
          <div className="flex items-center justify-between">
            <Dialog.Title className="text-zinc-100 font-semibold text-base">Your Cart</Dialog.Title>
            <Dialog.Close className="btn-ghost px-3 py-1" aria-label="Close">ESC</Dialog.Close>
          </div>

          <div className="mt-4 space-y-3 max-h-[45vh] md:max-h-[60vh] overflow-auto pr-1">
            {items.length === 0 && (
              <div className="text-sm text-zinc-400">Your cart is empty.</div>
            )}
            {items.map((it) => (
              <div key={it.id} className="flex items-center justify-between border-b border-[color:var(--color-border)] pb-3">
                <div>
                  <div className="text-sm text-zinc-100">{it.title}</div>
                  <div className="text-xs text-zinc-400">{it.category}</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-sm text-zinc-300">₹299</div>
                  <button className="btn-ghost px-3 py-1" onClick={() => remove(it.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center justify-between"><span className="text-zinc-400">Subtotal</span><span className="text-zinc-200">{formatINR(t.subtotal)}</span></div>
            {t.bundleDiscount > 0 && (
              <div className="flex items-center justify-between text-cyan-300"><span>Bundle Saver</span><span>-{formatINR(t.bundleDiscount)}</span></div>
            )}
            <div className="flex items-center justify-between">
              <span className="text-zinc-400">Promo code</span>
              <div className="flex gap-2">
                <input
                  aria-label="Promo code"
                  className="px-3 py-2 rounded-xl bg-transparent border border-[color:var(--color-border)] text-zinc-200 text-sm"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  placeholder="ASTROFIRST"
                />
                <button className="btn-ghost" onClick={applyPromo}>Apply</button>
              </div>
            </div>
            {t.promoDiscount > 0 && (
              <div className="flex items-center justify-between text-cyan-300"><span>Promo</span><span>-{formatINR(t.promoDiscount)}</span></div>
            )}
            <div className="flex items-center justify-between text-zinc-100 text-base font-semibold mt-2"><span>Total</span><span>{formatINR(t.total)}</span></div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-3">
            <Dialog.Close asChild>
              <button className="btn-ghost w-full">Continue</button>
            </Dialog.Close>
            <Link href="/checkout" className="btn-primary w-full text-center" onClick={() => onOpenChange(false)}>Checkout</Link>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}


