"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/Container";
import { useTranslation } from "@/i18n/TranslationProvider";
import { posts } from "@/components/blogData";

export default function Blog() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Container className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-300">
            Insights and updates from Tranquility
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-green-600">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                {post.date}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-green-600 hover:underline mt-4 inline-block"
              >
                Read more
              </Link>
            </motion.article>
          ))}
        </div>
      </Container>
    </div>
  );
}