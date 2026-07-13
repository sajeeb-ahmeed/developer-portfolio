import { FiArrowDown, FiDownload } from 'react-icons/fi';
import type { Profile } from '../types';

export default function Hero({ profile }: { profile: Profile }) {
  return (
    <section id="top" className="relative min-h-screen flex items-center bg-grid-glow">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-16 grid md:grid-cols-[1.3fr_0.7fr] gap-12 items-center">
        <div>
          <p className="text-accent font-medium tracking-wide">Hi, I'm</p>
          <h1 className="mt-2 font-display text-4xl sm:text-6xl font-bold leading-tight">
            {profile.name}
            <span className="block gradient-text mt-2">{profile.title}</span>
          </h1>
          <p className="mt-6 max-w-xl text-white/60 leading-relaxed">{profile.summary}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-accent text-ink px-6 py-3 font-medium hover:opacity-90 transition"
            >
              View my work
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 font-medium flex items-center gap-2 hover:bg-white/5 transition"
            >
              <FiDownload /> Download résumé
            </a>
          </div>

          <a href="#about" className="mt-16 inline-flex items-center gap-2 text-white/40 text-sm">
            <FiArrowDown className="animate-bounce" /> Scroll to explore
          </a>
        </div>

        <div className="justify-self-center">
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img src={profile.avatarUrl} alt={profile.name} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
