import { Menu, Sparkles, ShoppingBag, Layers3, Trophy } from "lucide-react";

function Navbar() {
  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-indigo-500 p-[2px]">
            <div className="h-full w-full rounded-[10px] bg-slate-900/80 backdrop-blur group-hover:bg-slate-900/60 transition" />
          </div>
          <div>
            <p className="text-white font-extrabold tracking-tight text-xl leading-none">Nova TCG</p>
            <p className="text-xs text-slate-300/80">Play • Trade • Collect</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-slate-200">
          <a href="#cards" className="hover:text-white transition flex items-center gap-2"><Layers3 size={18}/> Cards</a>
          <a href="#packs" className="hover:text-white transition flex items-center gap-2"><ShoppingBag size={18}/> Packs</a>
          <a href="#leaderboard" className="hover:text-white transition flex items-center gap-2"><Trophy size={18}/> Leaderboard</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-fuchsia-500 to-indigo-500 shadow-[0_8px_30px_rgb(99,102,241,0.35)] hover:opacity-95 active:scale-[0.99] transition">
            <Sparkles size={16}/> Play Now
          </button>
          <button className="md:hidden p-2 rounded-lg border border-white/10 text-white/90"><Menu/></button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;