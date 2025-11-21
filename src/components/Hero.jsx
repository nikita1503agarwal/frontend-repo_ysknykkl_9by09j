import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="relative min-h-[86vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for mood */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-violet-900/40 via-slate-950/40 to-slate-950"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            Gaming • Entertainment • TCG
          </div>
          <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
            Collect, battle, and trade in a living 3D world
          </h1>
          <p className="mt-5 text-lg text-slate-200/90 max-w-xl">
            A next-gen trading card game with animated cards, live seasons, and a global marketplace. Craft decks, climb leaderboards, and unlock rare cosmetics.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#packs" className="rounded-xl px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 shadow-[0_8px_30px_rgb(99,102,241,0.35)] hover:opacity-95 active:scale-[0.99] transition">Open Packs</a>
            <a href="#cards" className="rounded-xl px-5 py-3 text-sm font-semibold text-white/90 border border-white/15 bg-white/5 backdrop-blur hover:bg-white/10 transition">Browse Cards</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;