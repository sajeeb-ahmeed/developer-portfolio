import { useMemo, useState } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { getRepos } from '../services/api';
import { useFetch } from '../hooks/useFetch';
import ProjectCard from './ProjectCard';
import Loader from './Loader';
import SectionHeading from './SectionHeading';
import type { Profile } from '../types';

export default function Projects({ profile }: { profile: Profile }) {
  const { data: repos, loading, error } = useFetch(getRepos, []);
  const [showForks, setShowForks] = useState(false);

  const visibleRepos = useMemo(() => {
    if (!repos) return [];
    const filtered = showForks ? repos : repos.filter((r) => !r.fork);
    return filtered
      .sort((a, b) => b.stars - a.stars || (a.updatedAt < b.updatedAt ? 1 : -1))
      .slice(0, 6);
  }, [repos, showForks]);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Projects"
        title="Featured work"
        description="A selection of client and personal projects, with live demos and source code."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {profile.projects.map((project) => (
          <div key={project.id} className="rounded-2xl border border-white/10 bg-panel p-6 flex flex-col justify-between card-glow">
            <div>
              <h3 className="font-display font-semibold text-lg">{project.name}</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[11px] rounded-full bg-white/5 border border-white/10 px-2 py-0.5 text-white/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 flex gap-4 text-sm">
              {project.sourceUrl && (
                <a href={project.sourceUrl} target="_blank" rel="noreferrer" className="hover:text-accent flex items-center gap-1">
                  <FiGithub /> Code
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="hover:text-accent flex items-center gap-1">
                  <FiExternalLink /> Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">More on GitHub</span>
          <h3 className="mt-3 font-display text-2xl font-semibold text-white">Latest repositories</h3>
          <p className="mt-2 text-white/50 text-sm">Pulled live from the public GitHub API — no hardcoded list to go stale.</p>
        </div>
        <label className="flex items-center gap-2 text-sm text-white/50">
          <input type="checkbox" checked={showForks} onChange={(e) => setShowForks(e.target.checked)} className="accent-accent" />
          Include forked repos
        </label>
      </div>

      {loading && <Loader label="Fetching latest repositories from GitHub…" />}
      {error && (
        <p className="text-red-400 text-sm">
          Couldn't load repositories right now ({error}). GitHub's public API has a 60 requests/hour limit for anonymous requests.
        </p>
      )}

      {!loading && !error && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleRepos.map((repo) => (
            <ProjectCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}

      <div className="mt-8 text-center">
        <a
          href={profile.social.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-accent"
        >
          <FiGithub /> See all repositories on GitHub
        </a>
      </div>
    </section>
  );
}
