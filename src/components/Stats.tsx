import type { Profile } from '../types';

export default function Stats({ profile }: { profile: Profile }) {
  if (profile.stats.length === 0) return null;

  return (
    <section className="border-y border-white/10 bg-panel/50">
      <div className="mx-auto max-w-6xl px-6 py-14 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {profile.stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-3xl sm:text-4xl font-bold gradient-text">{stat.value}</p>
            <p className="mt-2 text-sm text-white/50">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
