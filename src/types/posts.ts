export type Posts = {
  id: string;
  title: string;
  slug: string;
  cover?: string;
  date: string;
};

export type Post = {
  post: Posts;
  markdownText: string;
};
