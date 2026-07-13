import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? 'bg-ink/80 backdrop-blur border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold text-lg tracking-tight">
          Sajeeb<span className="gradient-text">.dev</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-accent/90 text-ink px-4 py-2 font-medium hover:bg-accent transition-colors"
          >
            Hire me
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ink border-b border-white/10 px-6 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-white/80">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
