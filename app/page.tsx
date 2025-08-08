"use client";

import Header from "@/components/Header";
import HeroCover from "@/components/HeroCover";
import Steps from "@/components/Steps";
import Testimonials from "@/components/Testimonials";
import PricingCard from "@/components/PricingCard";
import StickyCartBar from "@/components/StickyCartBar";
import CategoryChips from "@/components/CategoryChips";
import QuestionCard from "@/components/QuestionCard";
import { useMemo, useState } from "react";
import { questions } from "@/data/questions";

export default function Home() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return questions.filter((x) => {
      const okCat = cat === "All" || x.category === cat;
      const okTitle = x.title.toLowerCase().includes(q);
      const trending = x.trend;
      return okCat && okTitle && (q.length > 0 ? true : true);
    });
  }, [query, cat]);

  const trending = useMemo(() => questions.filter((q) => q.trend), []);

  return (
    <div className="min-h-screen pb-28">
      <Header />
      <section className="container px-4 pt-10">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              One Precise Answer — Backed by Vedic Astrology
            </h1>
            <p className="mt-4 text-zinc-300">
              Add your question to cart—love, career, money, property, health—and receive a clear, time-specific answer from your birth chart within 48 working hours. No AI. No fluff. Only AstroVedansh.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-xs">
              <span className="badge">10,000+ answers</span>
              <span className="badge">Private & confidential</span>
              <span className="badge">Exact timing + remedies</span>
            </div>
          </div>
          <HeroCover />
        </div>
        <div className="mt-8 flex gap-3">
          <a href="#browse" className="btn-primary">Browse questions</a>
        </div>
      </section>

      <Steps />

      <section id="browse" className="container px-4 py-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className="text-zinc-100 font-semibold">Browse</h2>
          <input
            placeholder="Search questions..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-4 py-2 rounded-2xl bg-transparent border border-[color:var(--color-border)] text-sm"
            aria-label="Search questions"
          />
        </div>
        <div className="mt-4"><CategoryChips active={cat} onChange={setCat} /></div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((q) => (<QuestionCard key={q.id} q={q} />))}
        </div>
      </section>

      <section className="container px-4 py-6">
        <h2 className="text-zinc-100 font-semibold">Trending Questions</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trending.map((q) => (<QuestionCard key={q.id} q={q} />))}
        </div>
      </section>

      <Testimonials />
      <PricingCard />

      <footer id="faq" className="container px-4 py-12 text-sm text-zinc-400">
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <div className="text-zinc-200 font-semibold">Perfect Timing</div>
            <p className="mt-2">On a mission to help 1 billion people take better decisions with astrological timing.</p>
          </div>
          <div>
            <div className="text-zinc-200 font-semibold">Legal</div>
            <ul className="mt-2 space-y-1">
              <li><a className="hover:text-zinc-200" href="#">Privacy</a></li>
              <li><a className="hover:text-zinc-200" href="#">Refund</a></li>
              <li><a className="hover:text-zinc-200" href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="text-zinc-200 font-semibold">Promo</div>
            <p className="mt-2">Use ASTROFIRST on checkout for an extra 10% off after Bundle Saver.</p>
          </div>
        </div>
      </footer>

      <div id="cart-live-region" className="sr-only" aria-live="polite" aria-atomic="true" />
      <StickyCartBar />
    </div>
  );
}
