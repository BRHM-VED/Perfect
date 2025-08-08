"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCart } from "@/store/cart";
import { bundleDiscount, computeSubtotal, promoDiscount, total, formatINR } from "@/lib/pricing";
import { buildWhatsAppMessage } from "@/lib/whatsapp";
import { useEffect, useState } from "react";

const schema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().optional(),
  gender: z.enum(["Male", "Female", "Other"] as const, { message: "Required" }),
  dob: z.string().min(1, "Required"),
  timeHH: z
    .string()
    .regex(/^\d{1,2}$/,{ message: "00-12" })
    .refine((v) => {
      const n = Number(v);
      return Number.isFinite(n) && n >= 0 && n <= 12;
    }, "00-12"),
  timeMM: z
    .string()
    .regex(/^\d{1,2}$/,{ message: "00-59" })
    .refine((v) => {
      const n = Number(v);
      return Number.isFinite(n) && n >= 0 && n <= 59;
    }, "00-59"),
  timeAP: z.enum(["AM", "PM"] as const, { message: "Required" }),
  city: z.string().min(1, "Required"),
  state: z.string().optional(),
  country: z.string().min(1, "Required"),
  email: z.string().email("Invalid email"),
  phone: z.string().regex(/^\+?[0-9]{7,15}$/,{ message: "Invalid phone" }),
  language: z.enum(["Hindi", "English"] as const, { message: "Required" }),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function CheckoutForm() {
  const { items, promoCode, clear } = useCart();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Reserve space to avoid CLS if needed
  }, []);

  const t = {
    subtotal: computeSubtotal(items),
    bundleDiscount: bundleDiscount(items),
    promoDiscount: promoDiscount(items, promoCode),
    total: total(items, promoCode),
  };

  async function onSubmit(data: FormData) {
    setError(null);
    const payload = {
      items,
      pricing: { ...t, promoCode },
      customer: data,
      createdAt: new Date().toISOString(),
    };

    const webhook = process.env.NEXT_PUBLIC_PT_CHECKOUT_WEBHOOK;
    const wa = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    try {
      if (webhook) {
        const res = await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(`Webhook ${res.status}`);
        setSuccess("Thank you! We will contact you shortly.");
        clear();
      } else if (wa) {
        const msg = buildWhatsAppMessage(payload);
        const url = `https://wa.me/${wa}?text=${encodeURIComponent(msg)}`;
        window.open(url, "_blank");
        setSuccess("Order received on WhatsApp. We will confirm and share the payment link.");
        clear();
      } else {
        throw new Error("No checkout method configured");
      }
    } catch (e: unknown) {
      setError((e as Error).message || "Something went wrong");
    }
  }

  if (items.length === 0) {
    return <div className="card p-6 text-sm text-zinc-300">Your cart is empty.</div>;
  }

  if (success) {
    return <div className="card p-6 text-sm text-zinc-300">{success}</div>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
      <div className="card p-6">
        <h3 className="text-zinc-100 font-semibold">Selected Questions</h3>
        <ul className="mt-3 space-y-2 text-sm text-zinc-300">
          {items.map((it) => (
            <li key={it.id}>
              <span className="text-zinc-100">{it.title}</span> <span className="text-zinc-400">— {it.category}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="card p-6">
        <h3 className="text-zinc-100 font-semibold">Your Details</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Field label="First name" error={errors.firstName?.message}>
            <input {...register("firstName")} className="w-full px-3 py-2 rounded-xl bg-transparent border border-[color:var(--color-border)] text-sm" />
          </Field>
          <Field label="Last name" error={errors.lastName?.message}>
            <input {...register("lastName")} className="w-full px-3 py-2 rounded-xl bg-transparent border border-[color:var(--color-border)] text-sm" />
          </Field>
          <Field label="Gender" error={errors.gender?.message}>
            <select {...register("gender")} className="w-full px-3 py-2 rounded-xl bg-transparent border border-[color:var(--color-border)] text-sm">
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </Field>
          <Field label="Date of birth" error={errors.dob?.message}>
            <input type="date" {...register("dob")} className="w-full px-3 py-2 rounded-xl bg-transparent border border-[color:var(--color-border)] text-sm" />
          </Field>
          <Field label="Time (HH/MM + AM/PM)" error={errors.timeHH?.message || errors.timeMM?.message || errors.timeAP?.message}>
            <div className="flex gap-2">
              <input placeholder="HH" {...register("timeHH")} className="w-16 px-3 py-2 rounded-xl bg-transparent border border-[color:var(--color-border)] text-sm" />
              <input placeholder="MM" {...register("timeMM")} className="w-16 px-3 py-2 rounded-xl bg-transparent border border-[color:var(--color-border)] text-sm" />
              <select {...register("timeAP")} className="px-3 py-2 rounded-xl bg-transparent border border-[color:var(--color-border)] text-sm">
                <option>AM</option>
                <option>PM</option>
              </select>
            </div>
          </Field>
          <Field label="Place of birth — City" error={errors.city?.message}>
            <input {...register("city")} className="w-full px-3 py-2 rounded-xl bg-transparent border border-[color:var(--color-border)] text-sm" />
          </Field>
          <Field label="State/Region" error={errors.state?.message}>
            <input {...register("state")} className="w-full px-3 py-2 rounded-xl bg-transparent border border-[color:var(--color-border)] text-sm" />
          </Field>
          <Field label="Country" error={errors.country?.message}>
            <input {...register("country")} className="w-full px-3 py-2 rounded-xl bg-transparent border border-[color:var(--color-border)] text-sm" />
          </Field>
          <Field label="Email" error={errors.email?.message}>
            <input type="email" {...register("email")} className="w-full px-3 py-2 rounded-xl bg-transparent border border-[color:var(--color-border)] text-sm" />
          </Field>
          <Field label="WhatsApp phone" error={errors.phone?.message}>
            <input placeholder="e.g. +919876543210" {...register("phone")} className="w-full px-3 py-2 rounded-xl bg-transparent border border-[color:var(--color-border)] text-sm" />
          </Field>
          <Field label="Language" error={errors.language?.message}>
            <select {...register("language")} className="w-full px-3 py-2 rounded-xl bg-transparent border border-[color:var(--color-border)] text-sm">
              <option value="">Select</option>
              <option>Hindi</option>
              <option>English</option>
            </select>
          </Field>
          <div className="sm:col-span-2">
            <Field label="Notes (optional)" error={errors.notes?.message}>
              <textarea rows={4} {...register("notes")} className="w-full px-3 py-2 rounded-xl bg-transparent border border-[color:var(--color-border)] text-sm" />
            </Field>
          </div>
        </div>
      </div>

      <div className="card p-6">
        <div className="flex items-center justify-between text-sm text-zinc-300">
          <div>Payable</div>
          <div className="text-zinc-100 text-lg font-semibold">{formatINR(t.total)}</div>
        </div>
        {error && <div className="mt-3 text-sm text-red-400">{error}</div>}
        <button type="submit" disabled={isSubmitting} className="btn-primary w-full mt-4">
          Pay & Submit — {formatINR(t.total)}
        </button>
      </div>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="text-zinc-300">{label}</span>
      {children}
      {error && <span className="text-red-400 text-xs">{error}</span>}
    </label>
  );
}


