export default function Loader({ label = 'Loading…' }: { label?: string }) {
  return (
    <div className="flex items-center gap-3 text-white/50 text-sm py-6">
      <span className="h-4 w-4 rounded-full border-2 border-white/20 border-t-accent animate-spin" />
      {label}
    </div>
  );
}
