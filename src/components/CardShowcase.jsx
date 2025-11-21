import { motion } from 'framer-motion';
import { Sparkles, Shield, Flame, Zap } from 'lucide-react';

const cards = [
  {
    id: 1,
    name: 'Astra Mage',
    element: 'Arcane',
    power: 92,
    rarity: 'Mythic',
    color: 'from-fuchsia-500 to-violet-500',
    icon: Sparkles,
  },
  {
    id: 2,
    name: 'Obsidian Golem',
    element: 'Earth',
    power: 86,
    rarity: 'Legendary',
    color: 'from-indigo-500 to-cyan-500',
    icon: Shield,
  },
  {
    id: 3,
    name: 'Inferno Whelp',
    element: 'Fire',
    power: 79,
    rarity: 'Epic',
    color: 'from-amber-500 to-red-500',
    icon: Flame,
  },
  {
    id: 4,
    name: 'Storm Dancer',
    element: 'Air',
    power: 83,
    rarity: 'Legendary',
    color: 'from-sky-500 to-blue-600',
    icon: Zap,
  },
];

function GlassCard({ name, element, power, rarity, color, icon: Icon }) {
  return (
    <motion.div
      whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
      className="group relative rounded-3xl p-5 bg-white/5 backdrop-blur border border-white/10 overflow-hidden"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition`} />
      <div className="absolute -inset-16 bg-[conic-gradient(from_140deg,rgba(255,255,255,0.15),transparent_40%)] opacity-0 group-hover:opacity-100 transition" />

      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-white/60">{rarity}</p>
          <h3 className="mt-1 text-xl font-bold text-white">{name}</h3>
          <p className="text-sm text-white/70">{element} • Power {power}</p>
        </div>
        <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${color} p-[2px]`}>
          <div className="h-full w-full rounded-[10px] bg-slate-900/80 flex items-center justify-center">
            <Icon className="text-white" size={20} />
          </div>
        </div>
      </div>

      <div className="mt-4 h-28 rounded-2xl bg-black/40 border border-white/10 overflow-hidden">
        <div className={`h-full w-full bg-gradient-to-br ${color} opacity-20`} />
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-white/70">
        <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1">Foil</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1">Season 02</span>
        <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1">ID #{Math.floor(Math.random()*9999)}</span>
      </div>
    </motion.div>
  );
}

function CardShowcase() {
  return (
    <section id="cards" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Featured Cards</h2>
            <p className="text-slate-300/80 mt-2">A sneak peek at some of the heroes in Nova TCG</p>
          </div>
          <a href="#" className="text-fuchsia-300 hover:text-fuchsia-200 text-sm">See all</a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c) => (
            <GlassCard key={c.id} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardShowcase;