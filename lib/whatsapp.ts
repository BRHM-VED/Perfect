import { CartItem } from "./pricing";

export type OrderPayload = {
  items: CartItem[];
  pricing: {
    subtotal: number;
    bundleDiscount: number;
    promoCode: string | null;
    promoDiscount: number;
    total: number;
  };
  customer: Record<string, unknown>;
  createdAt: string;
};

export function buildWhatsAppMessage(payload: OrderPayload): string {
  const { items, pricing, customer, createdAt } = payload;
  const lines: string[] = [];
  lines.push("Perfect Timing — New Order");
  lines.push(`Created: ${createdAt}`);
  lines.push("");
  lines.push("Questions:");
  items.forEach((q, i) => lines.push(`${i + 1}. [${q.category}] ${q.title}`));
  lines.push("");
  lines.push("Pricing:");
  lines.push(`Subtotal: ₹${pricing.subtotal}`);
  if (pricing.bundleDiscount > 0) lines.push(`Bundle Saver: -₹${pricing.bundleDiscount}`);
  if (pricing.promoDiscount > 0)
    lines.push(`Promo ${pricing.promoCode ?? ""}: -₹${pricing.promoDiscount}`);
  lines.push(`Total: ₹${pricing.total}`);
  lines.push("");
  lines.push("Customer:");
  Object.entries(customer).forEach(([k, v]) => {
    if (v !== undefined && v !== "") {
      lines.push(`${k}: ${String(v)}`);
    }
  });
  return lines.join("\n");
}


