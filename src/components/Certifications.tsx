import { FiAward, FiCheckCircle } from 'react-icons/fi';
import type { Profile } from '../types';
import SectionHeading from './SectionHeading';

export default function Certifications({ profile }: { profile: Profile }) {
  const hasCertificates = profile.certificates.length > 0;
  const hasAwards = profile.awards.length > 0;

  if (!hasCertificates && !hasAwards) {
    // Nothing to show yet — add entries to `certificates`/`awards` in
    // src/data/profile.ts and this section will render automatically.
    return null;
  }

  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Recognition" title="Certificates & awards" />
      <div className="grid sm:grid-cols-2 gap-6">
        {hasCertificates && (
          <div className="rounded-2xl border border-white/10 bg-panel p-6">
            <h3 className="font-display font-semibold mb-4 flex items-center gap-2">
              <FiCheckCircle className="text-accent" /> Certificates
            </h3>
            <ul className="space-y-4">
              {profile.certificates.map((cert) => (
                <li key={cert.id} className="text-sm">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className={cert.url ? 'text-white/80 hover:text-accent font-medium' : 'text-white/80 font-medium'}
                  >
                    {cert.title}
                  </a>
                  <p className="text-white/40">{cert.issuer} · {cert.date}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {hasAwards && (
          <div className="rounded-2xl border border-white/10 bg-panel p-6">
            <h3 className="font-display font-semibold mb-4 flex items-center gap-2">
              <FiAward className="text-accent" /> Awards
            </h3>
            <ul className="space-y-4">
              {profile.awards.map((award) => (
                <li key={award.id} className="text-sm">
                  <p className="text-white/80 font-medium">{award.title}</p>
                  <p className="text-white/40">{award.issuer} · {award.date}</p>
                  {award.description && <p className="text-white/50 mt-1">{award.description}</p>}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
