import type { Profile } from '../types';

export default function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-wrap items-center justify-between gap-4 text-sm text-white/40">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React, Vite & NestJS.</p>
        <div className="flex gap-6">
          <a href={profile.social.github} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
          <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
