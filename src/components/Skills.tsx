import type { Profile } from '../types';
import SectionHeading from './SectionHeading';

export default function Skills({ profile }: { profile: Profile }) {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Skills" title="Tools & technologies I work with" />
      <div className="grid sm:grid-cols-2 gap-6">
        {profile.skills.map((group) => (
          <div key={group.category} className="rounded-2xl border border-white/10 bg-panel p-6 card-glow">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-semibold">{group.category}</h3>
              <span className="text-accent text-sm font-medium">{group.level}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden mb-4">
              <div
                className="h-full rounded-full bg-gradient-to-r from-accent to-accent2"
                style={{ width: `${group.level}%` }}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
