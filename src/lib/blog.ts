import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content/blog');

export type BlogPostMetadata = {
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  slug: string;
};

export type BlogPost = {
  metadata: BlogPostMetadata;
  content: string;
};

export function getBlogPosts(): BlogPostMetadata[] {
  // Check if directory exists, if not return empty array
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      // Remove ".mdx" from file name to get slug
      const slug = fileName.replace(/\.mdx$/, '');

      // Read markdown file as string
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      return {
        slug,
        ...(matterResult.data as Omit<BlogPostMetadata, 'slug'>),
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    return {
      metadata: {
        slug,
        ...(matterResult.data as Omit<BlogPostMetadata, 'slug'>),
      },
      content: matterResult.content,
    };
  } catch (error) {
    console.error(`Error reading blog post: ${slug}`, error);
    return null;
  }
}
