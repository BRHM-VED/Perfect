export default function Steps() {
  const steps = [
    { title: "Ask", desc: "Choose your question(s) from the catalog.", num: 1 },
    { title: "Share Details", desc: "Enter birth data and contact info.", num: 2 },
    { title: "Get Your Answer", desc: "Receive timing, remedies, and a plan.", num: 3 },
  ];
  return (
    <section id="how" className="container px-4 py-12">
      <div className="grid gap-6 sm:grid-cols-3">
        {steps.map((s) => (
          <div key={s.num} className="card p-6">
            <div className="text-cyan-400 text-sm font-semibold">Step {s.num}</div>
            <div className="text-zinc-100 text-lg font-semibold mt-2">{s.title}</div>
            <p className="text-zinc-400 text-sm mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


