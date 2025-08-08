"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/30 border-b border-[color:var(--color-border)]">
      <div className="container flex items-center justify-between py-4 px-4">
        <Link href="/" className="text-zinc-100 text-lg font-semibold tracking-tight">
          Perfect <span className="text-cyan-400">Timing</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          <a href="#how" className="hover:text-white focus-ring">How it works</a>
          <a href="#pricing" className="hover:text-white focus-ring">Pricing</a>
          <a href="#faq" className="hover:text-white focus-ring">FAQ</a>
        </nav>
      </div>
    </header>
  );
}


