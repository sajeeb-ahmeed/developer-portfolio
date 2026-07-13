import type { GithubRepo } from '../types';

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'sajeeb-ahmeed';

/**
 * Fetches the latest public repositories directly from GitHub's public
 * REST API — no backend required. GitHub allows unauthenticated,
 * CORS-enabled requests to this endpoint from the browser (rate limit:
 * 60 requests/hour per IP, which is plenty for a portfolio site).
 */
export async function getRepos(): Promise<GithubRepo[]> {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
    { headers: { Accept: 'application/vnd.github+json' } },
  );

  if (!res.ok) {
    throw new Error(`GitHub API responded with ${res.status}`);
  }

  const data = await res.json();

  return data.map((repo: any) => ({
    id: repo.id,
    name: repo.name,
    htmlUrl: repo.html_url,
    description: repo.description,
    language: repo.language,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    topics: repo.topics || [],
    updatedAt: repo.updated_at,
    homepage: repo.homepage || null,
    fork: repo.fork,
  }));
}
