import { FormEvent, useState } from 'react';
import { FiMail, FiSend } from 'react-icons/fi';
import type { Profile } from '../types';
import SectionHeading from './SectionHeading';

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/mojgqveo';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact({ profile }: { profile: Profile }) {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something together"
        description="Have a project in mind, or just want to say hi? Send a message and I'll get back to you soon."
      />

      <div className="grid md:grid-cols-[1fr_1.2fr] gap-10">
        <div className="rounded-2xl border border-white/10 bg-panel p-6 h-fit">
          <p className="text-white/40 uppercase tracking-wide text-xs mb-3">Direct</p>
          <a href={`mailto:${profile.social.email}`} className="flex items-center gap-2 text-white/80 hover:text-accent">
            <FiMail /> {profile.social.email}
          </a>
          <p className="text-white/40 uppercase tracking-wide text-xs mt-6 mb-3">Based in</p>
          <p className="text-white/70">{profile.location}</p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-panel p-6 sm:p-8 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              required
              name="name"
              placeholder="Your name"
              className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-accent"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Your email"
              className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-accent"
            />
          </div>
          <input
            name="subject"
            placeholder="Subject"
            className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-accent"
          />
          <textarea
            required
            name="message"
            rows={5}
            placeholder="Tell me about your project…"
            className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-accent resize-none"
          />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex items-center gap-2 rounded-full bg-accent text-ink px-6 py-3 font-medium hover:opacity-90 transition disabled:opacity-50"
          >
            <FiSend /> {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>

          {status === 'success' && (
            <p className="text-sm text-emerald-400">Thanks! Your message has been sent — I'll reply soon.</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-400">
              Something went wrong. Please double-check the Formspree endpoint is configured, or email me directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
