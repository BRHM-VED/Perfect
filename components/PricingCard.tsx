export default function PricingCard() {
  return (
    <section id="pricing" className="container px-4 py-12">
      <div className="card p-6">
        <h3 className="text-zinc-100 text-xl font-semibold">Pricing</h3>
        <ul className="mt-3 text-sm text-zinc-300 list-disc pl-5 space-y-1">
          <li>₹299 per question</li>
          <li>Bundle Saver: 15% off when you add 3+ questions</li>
          <li>Promo code: <span className="text-white font-semibold">ASTROFIRST</span> for extra 10% off</li>
        </ul>
      </div>
    </section>
  );
}


