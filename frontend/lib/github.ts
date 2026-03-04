const GITHUB_GRAPHQL = "https://api.github.com/graphql";
const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

async function githubQuery<T>(query: string): Promise<T | null> {
  if (!token) return null;
  const res = await fetch(GITHUB_GRAPHQL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query }),
    next: { revalidate: 3600 }
  });
  if (!res.ok) return null;
  return res.json();
}

export async function getPinnedRepos(username: string) {
  const query = `
    query {
      user(login: "${username}") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              stargazerCount
              forkCount
              primaryLanguage { name }
            }
          }
        }
      }
    }
  `;
  const data = await githubQuery<any>(query);
  return data?.data?.user?.pinnedItems?.nodes ?? [];
}

export async function getPullRequests(username: string) {
  const query = `
    query {
      search(query: "author:${username} is:pr", type: ISSUE, first: 10) {
        nodes {
          ... on PullRequest {
            title
            url
            state
            repository { name }
          }
        }
      }
    }
  `;
  const data = await githubQuery<any>(query);
  return data?.data?.search?.nodes ?? [];
}
