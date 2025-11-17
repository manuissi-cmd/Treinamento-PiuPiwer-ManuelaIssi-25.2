export const API_RAW = process.env.NEXT_PUBLIC_API_URL ?? "";
const API = API_RAW.replace(/\/$/, ""); // remove "/" final

async function j<T>(res: Response) {
  if (!res.ok) throw new Error(await res.text());
  return res.json() as Promise<T>;
}

export type NewsItem  = { id: string; title: string; imageUrl: string };
export type Post      = { id: string; author: string; content: string; createdAt: string };
export type UserStats = { posts: number; followers: number; following: number };

const common: RequestInit = {
  credentials: "include",
  // cache: "no-store", // descomente se quiser sempre sem cache no Next server
};

export const api = {
  getNews:    () => fetch(`${API}/api/news`,  common).then(j<NewsItem[]>),
  getFeed:    () => fetch(`${API}/api/posts`, common).then(j<Post[]>),

  createPost: (content: string) =>
    fetch(`${API}/api/posts`, {
      ...common,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    }).then(j<Post>),

  getMyStats: () => fetch(`${API}/api/me/stats`, common).then(j<UserStats>),
  getMyPosts: () => fetch(`${API}/api/me/posts`, common).then(j<Post[]>),
};
