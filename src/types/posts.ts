export type Posts = {
  id: string;
  title: string;
  slug: string;
  cover?: string;
  formattedDate: string | Date | undefined;
};

export type Post = {
  post: Posts;
  markdownText: string;
};
