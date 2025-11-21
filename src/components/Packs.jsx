import { motion } from 'framer-motion';
import { Gift, PackageOpen, Shuffle, Sparkles } from 'lucide-react';

function Packs() {
  return (
    <section id="packs" className="relative py-24 bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Crack a pack</h2>
          <p className="mt-3 text-slate-300/80">Open mystery packs with animated reveals and chase ultra rare foils.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          <motion.div whileHover={{ y: -6 }} className="rounded-2xl p-5 bg-white/5 border border-white/10">
            <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-fuchsia-500 to-violet-500 p-[2px]">
              <div className="h-full w-full rounded-[10px] bg-slate-900/80 flex items-center justify-center"><Gift className="text-white"/></div>
            </div>
            <h3 className="mt-4 text-white font-bold text-lg">Starter Bundle</h3>
            <p className="text-sm text-white/70">3 packs • Guaranteed Rare</p>
          </motion.div>

          <motion.div whileHover={{ y: -6 }} className="rounded-2xl p-5 bg-white/5 border border-white/10">
            <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 p-[2px]">
              <div className="h-full w-full rounded-[10px] bg-slate-900/80 flex items-center justify-center"><PackageOpen className="text-white"/></div>
            </div>
            <h3 className="mt-4 text-white font-bold text-lg">Pro Pack</h3>
            <p className="text-sm text-white/70">5 packs • 2x Rare chance</p>
          </motion.div>

          <motion.div whileHover={{ y: -6 }} className="rounded-2xl p-5 bg-white/5 border border-white/10">
            <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-amber-500 to-red-500 p-[2px]">
              <div className="h-full w-full rounded-[10px] bg-slate-900/80 flex items-center justify-center"><Shuffle className="text-white"/></div>
            </div>
            <h3 className="mt-4 text-white font-bold text-lg">Chaos Set</h3>
            <p className="text-sm text-white/70">10 packs • Wild odds</p>
          </motion.div>
        </div>

        <div className="mt-10 flex justify-center">
          <button className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 shadow-[0_8px_30px_rgb(99,102,241,0.35)] hover:opacity-95 active:scale-[0.99] transition">
            <Sparkles size={16}/> Open a free pack
          </button>
        </div>
      </div>
    </section>
  );
}

export default Packs;