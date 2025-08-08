export const BASE_PRICE_INR = 299;

export type CartItem = {
  id: string;
  title: string;
  category: string;
};

export function computeSubtotal(items: CartItem[]): number {
  return items.length * BASE_PRICE_INR;
}

export function bundleDiscount(items: CartItem[]): number {
  const subtotal = computeSubtotal(items);
  if (items.length >= 3) {
    return Math.round(0.15 * subtotal);
  }
  return 0;
}

export function promoDiscount(
  items: CartItem[],
  promoCode: string | null
): number {
  const subtotal = computeSubtotal(items);
  const bundle = bundleDiscount(items);
  if (promoCode && promoCode.toUpperCase() === "ASTROFIRST") {
    return Math.round(0.1 * (subtotal - bundle));
  }
  return 0;
}

export function total(
  items: CartItem[],
  promoCode: string | null
): number {
  const subtotal = computeSubtotal(items);
  const bundle = bundleDiscount(items);
  const promo = promoDiscount(items, promoCode);
  return Math.max(0, subtotal - bundle - promo);
}

export function formatINR(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}


