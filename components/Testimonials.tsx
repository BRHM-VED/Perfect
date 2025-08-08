import Stars from "./Stars";

const testimonials = [
  { name: "Ananya", city: "Mumbai", text: "Got exact windows and remedies. It worked!", rating: 5 },
  { name: "Rohit", city: "Bengaluru", text: "No fluff. Clear timing for my job change.", rating: 5 },
  { name: "Sara", city: "London", text: "Very accurate and compassionate guidance.", rating: 4.5 },
  { name: "Ishita", city: "Jaipur", text: "Loved the depth and practicality.", rating: 4.5 },
];

export default function Testimonials() {
  return (
    <section className="container px-4 py-12">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((t, i) => (
          <figure key={i} className="card p-6">
            <Stars value={t.rating} />
            <blockquote className="mt-3 text-sm text-zinc-300">“{t.text}”</blockquote>
            <figcaption className="mt-4 text-xs text-zinc-400">{t.name} — {t.city}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}


