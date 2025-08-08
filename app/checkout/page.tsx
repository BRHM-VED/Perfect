"use client";

import Header from "@/components/Header";
import CheckoutForm from "@/components/forms/CheckoutForm";
import StickyCartBar from "@/components/StickyCartBar";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen pb-28">
      <Header />
      <main className="container px-4 pt-8">
        <h1 className="text-zinc-100 text-2xl font-semibold">Checkout</h1>
        <p className="text-zinc-400 text-sm mt-2">Fill in your birth details and contact info. We deliver within 48 working hours.</p>
        <div className="mt-6 max-w-3xl">
          <CheckoutForm />
        </div>
      </main>
      <StickyCartBar />
    </div>
  );
}


