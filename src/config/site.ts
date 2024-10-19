type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Rdrudra99",
  description:
    "I'm a Software Engineer who loves to write about web technologies, programming languages, and software development.",
  url: "https://rdrudra99-blog.vercel.app/",
  ogImage: "https://next-blog-cj.vercel.app/og",
  links: {
    twitter: "https://twitter.com/Rdrudra99",
    github: "https://github.com/Rdrudra99",
  },
};
