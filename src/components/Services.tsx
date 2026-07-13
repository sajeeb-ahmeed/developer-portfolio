import { FiCheck } from 'react-icons/fi';
import type { Profile } from '../types';
import SectionHeading from './SectionHeading';

export default function Services({ profile }: { profile: Profile }) {
  if (profile.services.length === 0) return null;

  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Services" title="How I can help" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {profile.services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-white/10 bg-panel p-5 flex items-center gap-3 card-glow"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
              <FiCheck />
            </span>
            <span className="text-sm text-white/80">{service.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
