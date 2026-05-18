type MarkdownPostModule = {
  frontmatter: {
    title: string;
    date: string | Date;
    cover?: string;
    description: string;
  };
  Content: any;
};

const modules = import.meta.glob<MarkdownPostModule>("../../content/posts/*.md", { eager: true });

const getSlugFromPath = (path: string) => {
  const fileName = path.split("/").pop() ?? "";
  return fileName.replace(/\.md$/, "");
};

export const getAllPosts = () =>
  Object.entries(modules)
    .map(([path, post]) => ({
      slug: getSlugFromPath(path),
      title: post.frontmatter.title,
      date: new Date(post.frontmatter.date),
      cover: post.frontmatter.cover,
      description: post.frontmatter.description,
      Content: post.Content,
    }))
    .sort((a, b) => b.date.getTime() - a.date.getTime());

export const formatPostDate = (date: Date) =>
  new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
