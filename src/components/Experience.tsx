import type { Profile } from '../types';
import SectionHeading from './SectionHeading';

export default function Experience({ profile }: { profile: Profile }) {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />
      <div className="space-y-8">
        {profile.experience.map((item) => (
          <div key={item.id} className="rounded-2xl border border-white/10 bg-panel p-6 sm:p-8">
            <div className="flex flex-wrap justify-between gap-2 mb-3">
              <div>
                <h3 className="font-display font-semibold text-lg">{item.role}</h3>
                <p className="text-accent text-sm">{item.company}{item.location ? ` · ${item.location}` : ''}</p>
              </div>
              <span className="text-white/40 text-sm whitespace-nowrap">
                {item.startDate} — {item.endDate}
              </span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-white/60 text-sm">
              {item.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {profile.education.length > 0 && (
        <div className="mt-16">
          <h3 className="font-display font-semibold text-lg mb-6">Education</h3>
          <div className="space-y-4">
            {profile.education.map((edu) => (
              <div key={edu.id} className="rounded-2xl border border-white/10 bg-panel p-6">
                <div className="flex flex-wrap justify-between gap-2">
                  <div>
                    <p className="font-medium">{edu.degree}</p>
                    <p className="text-white/50 text-sm">{edu.institution}</p>
                  </div>
                  <span className="text-white/40 text-sm">{edu.startDate} — {edu.endDate}</span>
                </div>
                {edu.details && <p className="mt-2 text-white/50 text-sm">{edu.details}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
