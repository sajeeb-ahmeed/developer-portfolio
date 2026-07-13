import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import type { Profile } from '../types';
import SectionHeading from './SectionHeading';

export default function About({ profile }: { profile: Profile }) {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="About"
        title="A little about me"
        description={profile.summary}
      />
      <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-8">
        <div className="rounded-2xl overflow-hidden border border-white/10 h-72 md:h-auto">
          <img src={profile.aboutPhotoUrl} alt={profile.name} className="w-full h-full object-cover" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6 text-sm content-start">
          <div className="rounded-2xl border border-white/10 bg-panel p-6">
            <p className="text-white/40 uppercase tracking-wide text-xs mb-2">Location</p>
            <p className="text-white/80">{profile.location}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-panel p-6">
            <p className="text-white/40 uppercase tracking-wide text-xs mb-2">Availability</p>
            <p className="text-white/80">{profile.available ? 'Available for freelance work' : 'Not currently available'}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-panel p-6 sm:col-span-2">
            <p className="text-white/40 uppercase tracking-wide text-xs mb-2">Connect</p>
            <div className="flex gap-4 text-white/70">
              <a href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent">
                <FiGithub size={20} />
              </a>
              <a href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent">
                <FiLinkedin size={20} />
              </a>
              {profile.social.twitter && (
                <a href={profile.social.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-accent">
                  <FiTwitter size={20} />
                </a>
              )}
              <a href={`mailto:${profile.social.email}`} aria-label="Email" className="hover:text-accent">
                <FiMail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
