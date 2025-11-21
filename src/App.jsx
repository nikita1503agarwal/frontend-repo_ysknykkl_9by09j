import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardShowcase from './components/CardShowcase';
import Packs from './components/Packs';
import Leaderboard from './components/Leaderboard';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <CardShowcase />
      <Packs />
      <Leaderboard />

      <footer className="border-t border-white/10 bg-slate-950/60">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Nova TCG — All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;