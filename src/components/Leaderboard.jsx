import { Crown, Trophy, Medal } from 'lucide-react';

const topPlayers = [
  { name: 'Riven', score: 2840 },
  { name: 'Nyx', score: 2655 },
  { name: 'Kai', score: 2570 },
  { name: 'Astra', score: 2440 },
  { name: 'Zed', score: 2385 },
];

function Leaderboard() {
  return (
    <section id="leaderboard" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-3">
          <Crown className="text-yellow-300"/>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Leaderboard</h2>
        </div>
        <p className="text-slate-300/80 mt-2">Climb ranks in seasonal competitive ladders.</p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
          <div className="grid grid-cols-3 md:grid-cols-5 text-white/60 text-xs uppercase tracking-widest px-4 py-3 border-b border-white/10">
            <span>Rank</span>
            <span className="col-span-2">Player</span>
            <span className="hidden md:block">Score</span>
            <span className="hidden md:block">Badge</span>
          </div>

          {topPlayers.map((p, i) => (
            <div key={i} className="grid grid-cols-3 md:grid-cols-5 items-center px-4 py-4 border-b border-white/5 hover:bg-white/5">
              <div className="text-white/90 font-semibold">#{i + 1}</div>
              <div className="col-span-2 text-white font-medium">{p.name}</div>
              <div className="hidden md:block text-white/80">{p.score}</div>
              <div className="hidden md:block">
                {i === 0 ? <Trophy className="text-yellow-300"/> : i === 1 ? <Medal className="text-slate-300"/> : i === 2 ? <Medal className="text-amber-600"/> : <span className="text-white/60">—</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Leaderboard;