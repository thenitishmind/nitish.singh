import { NextResponse } from 'next/server';

const GITHUB_USERNAME = 'thenitishmind';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // Optional: Add to .env.local for higher rate limits

export async function GET() {
  try {
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
    };

    if (GITHUB_TOKEN) {
      headers['Authorization'] = `token ${GITHUB_TOKEN}`;
    }

    // Fetch user profile
    const profileResponse = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}`,
      { headers, next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!profileResponse.ok) {
      throw new Error('Failed to fetch GitHub profile');
    }

    const profile = await profileResponse.json();

    // Fetch repositories
    const reposResponse = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      { headers, next: { revalidate: 3600 } }
    );

    if (!reposResponse.ok) {
      throw new Error('Failed to fetch GitHub repositories');
    }

    const allRepos = await reposResponse.json();

    // Filter and sort repositories
    const repos = allRepos
      .filter((repo: any) => !repo.fork && !repo.private)
      .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
      .slice(0, 12)
      .map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description || 'No description available',
        html_url: repo.html_url,
        homepage: repo.homepage,
        topics: repo.topics || [],
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        language: repo.language,
        created_at: repo.created_at,
        updated_at: repo.updated_at,
      }));

    return NextResponse.json({
      profile: {
        login: profile.login,
        name: profile.name,
        avatar_url: profile.avatar_url,
        bio: profile.bio,
        public_repos: profile.public_repos,
        followers: profile.followers,
        following: profile.following,
        html_url: profile.html_url,
      },
      repos,
    });
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub data' },
      { status: 500 }
    );
  }
}
