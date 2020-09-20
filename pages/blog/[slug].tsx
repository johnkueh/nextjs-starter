import { GetStaticPropsContext, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import React from "react";
import { getBlogPost, getBlogPosts } from "../../lib/services/blogPost";

const BlogPost = ({
  blogPost,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <>
      <Link href="/blog">
        <a>Go back to blog</a>
      </Link>
      <h1>{blogPost.fields.title}</h1>
    </>
  );
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const blogPost = await getBlogPost(context.params.slug);

  return {
    props: {
      blogPost,
    },
  };
}

// https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
export async function getStaticPaths() {
  const blogPosts = await getBlogPosts();
  const paths = blogPosts.map((blogPost) => {
    return { params: { slug: blogPost.fields.slug } };
  });

  return {
    paths,
    fallback: false,
  };
}

export default BlogPost;
