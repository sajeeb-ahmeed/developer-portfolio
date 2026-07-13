import { FiExternalLink, FiGithub, FiStar } from 'react-icons/fi';
import type { GithubRepo } from '../types';

export default function ProjectCard({ repo }: { repo: GithubRepo }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-panel p-6 flex flex-col justify-between card-glow">
      <div>
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display font-semibold text-lg break-words">{repo.name}</h3>
          {repo.stars > 0 && (
            <span className="flex items-center gap-1 text-xs text-white/50 shrink-0">
              <FiStar /> {repo.stars}
            </span>
          )}
        </div>
        <p className="mt-2 text-sm text-white/60 leading-relaxed line-clamp-3">
          {repo.description || 'No description provided.'}
        </p>
        {repo.topics.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {repo.topics.slice(0, 4).map((topic) => (
              <span key={topic} className="text-[11px] rounded-full bg-white/5 border border-white/10 px-2 py-0.5 text-white/50">
                {topic}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between text-sm">
        <span className="text-white/40">{repo.language || '—'}</span>
        <div className="flex gap-3">
          <a href={repo.htmlUrl} target="_blank" rel="noreferrer" className="hover:text-accent flex items-center gap-1">
            <FiGithub /> Code
          </a>
          {repo.homepage && (
            <a href={repo.homepage} target="_blank" rel="noreferrer" className="hover:text-accent flex items-center gap-1">
              <FiExternalLink /> Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
