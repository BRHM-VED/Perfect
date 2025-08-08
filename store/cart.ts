"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { bundleDiscount, computeSubtotal, promoDiscount, total } from "@/lib/pricing";

export type CartQuestion = {
  id: string;
  title: string;
  category: string;
};

type CartState = {
  items: CartQuestion[];
  promoCode: string | null;
  add: (q: CartQuestion) => void;
  remove: (id: string) => void;
  clear: () => void;
  setPromo: (code: string | null) => void;
  totals: () => {
    subtotal: number;
    bundleDiscount: number;
    promoDiscount: number;
    total: number;
  };
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      promoCode: null,
      add: (q) => {
        const exists = get().items.some((i) => i.id === q.id);
        if (!exists) set({ items: [...get().items, q] });
      },
      remove: (id) => set({ items: get().items.filter((i) => i.id !== id) }),
      clear: () => set({ items: [], promoCode: null }),
      setPromo: (code) => set({ promoCode: code }),
      totals: () => {
        const items = get().items;
        const promoCode = get().promoCode;
        const subtotal = computeSubtotal(items);
        const bundle = bundleDiscount(items);
        const promo = promoDiscount(items, promoCode);
        const grand = total(items, promoCode);
        return {
          subtotal,
          bundleDiscount: bundle,
          promoDiscount: promo,
          total: grand,
        };
      },
    }),
    {
      name: "pt-cart",
      partialize: (state) => ({ items: state.items, promoCode: state.promoCode }),
      version: 1,
    }
  )
);


