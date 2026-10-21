import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { CANON } from "@/lib/canon";
import { Flag } from "@/components/choose/flag";

export function Page({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-4 py-6 sm:px-8 sm:py-10">
      <header className="mb-8 border-b border-line pb-5">
        <p className="font-sans text-xs tracking-widest text-muted uppercase">One channel</p>
        <h1 className="mt-1 flex flex-wrap items-center gap-3 font-title text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
          <Flag />
          Choose America
          <span className="font-sans text-sm font-medium text-oxide">Beta</span>
        </h1>
        <p className="mt-2 max-w-xl text-pretty text-gold">{CANON}</p>
        <nav className="mt-3 flex gap-4 font-sans text-xs tracking-widest text-muted uppercase">
          <Link to="/america">America</Link>
          <Link to="/ethos">Ethos</Link>
          <Link to="/privacy">Privacy</Link>
        </nav>
      </header>
      <h2 className="font-title text-3xl text-fg">{title}</h2>
      <div className="mt-4 max-w-2xl space-y-4 text-pretty text-fg">{children}</div>
    </main>
  );
}
