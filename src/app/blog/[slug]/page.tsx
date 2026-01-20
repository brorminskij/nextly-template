import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { posts } from "@/components/blogData";

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen">
      <Container className="py-16">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {post.title}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">
            {post.date}
          </p>
          <div className="prose dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            {/* <p>{post.content}</p> */}
          </div>
        </article>
      </Container>
    </div>
  );
}