interface Props {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="mb-12 max-w-2xl">
      <span className="text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-white">{title}</h2>
      {description && <p className="mt-4 text-white/60 leading-relaxed">{description}</p>}
    </div>
  );
}
