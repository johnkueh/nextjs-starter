import { InferGetServerSidePropsType } from "next";
import Link from "next/link";
import React from "react";
import { getBlogPosts } from "../lib/services/blogPost";

const Blog = (props: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <>
      <h1>Blog</h1>
      {props.blogPosts.map((blogPost) => (
        <div key={blogPost.fields.slug}>
          <h2>
            <Link href={`/blog/${blogPost.fields.slug}`}>
              {blogPost.fields.title}
            </Link>
          </h2>
          <p>{blogPost.fields.summary}</p>
        </div>
      ))}
    </>
  );
};

export async function getStaticProps(context) {
  const blogPosts = await getBlogPosts();

  return {
    props: {
      blogPosts,
    },
  };
}

export default Blog;
