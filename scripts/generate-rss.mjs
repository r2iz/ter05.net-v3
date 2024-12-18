import fs from 'fs';
import path from 'path';
import Rss from 'rss';
import matter from 'gray-matter';

const metadata = {
  title: "ter05.net",
  description: "Portfolio page of Pz2Or",
};

const postsDirectory = path.join(process.cwd(), "contents");

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
}

export function getAllPosts() {
  const slugs = fs.readdirSync(postsDirectory);
  const posts = slugs.map((slug) => getPostBySlug(slug));
  return posts.sort((post1, post2) =>
      post1.meta.date > post2.meta.date ? -1 : 1
  );
}

async function generateRssFeed() {
  console.log("Generating RSS feed...");
  const feed = new Rss({
    title: metadata.title,
    description: metadata.description,
    site_url: 'https://ter05.net',
    feed_url: 'https://ter05.net/feed.xml',
    language: 'ja',
  });

  const posts = getAllPosts();
  posts.forEach((post) => {
    feed.item({
      title: post.meta.title,
      description: post.meta.excerpt,
      url: `https://ter05.net/blog/${post.slug}`,
      date: post.meta.date,
    });
  });

  const outputPath = path.join(process.cwd(), "public", "feed.xml");
  fs.writeFileSync(outputPath, feed.xml({ indent: true }));
  console.log("RSS feed generated.");
}

generateRssFeed();