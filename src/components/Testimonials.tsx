import type { Profile } from '../types';
import SectionHeading from './SectionHeading';

export default function Testimonials({ profile }: { profile: Profile }) {
  if (profile.testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Testimonials" title="What clients say" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {profile.testimonials.map((t) => (
          <div key={t.id} className="rounded-2xl border border-white/10 bg-panel p-6 card-glow flex flex-col">
            <p className="text-white/70 text-sm leading-relaxed flex-1">“{t.quote}”</p>
            <div className="mt-6 flex items-center gap-3">
              {t.avatarUrl && (
                <img src={t.avatarUrl} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
              )}
              <div>
                <p className="font-medium text-sm">{t.name}</p>
                <p className="text-white/40 text-xs">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
