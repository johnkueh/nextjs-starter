const client = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

interface Entry {
  sys: any;
  fields: BlogPost;
}

interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  content: any;
}

export async function getBlogPosts() {
  const entries: { items: Entry[] } = await client.getEntries({
    content_type: "blogPost",
  });
  if (entries.items) return entries.items;
  console.log(`Error getting blogPosts`);
}

export async function getBlogPost(slug: string | string[]) {
  const entries: { items: Entry[] } = await client.getEntries({
    "fields.slug": slug,
    content_type: "blogPost",
  });
  if (entries.items) return entries.items[0];
  console.log(`Error getting blogPost: ${slug}`);
}
