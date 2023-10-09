"use client";

import { motion } from "framer-motion";

export default function MotionList({
  content,
  className = "",
}: {
  content: { title: string; text: string[] };
  className?: string;
}) {
  return (
    <motion.article
      className={`${className} p-6 border-2 border-secondary-color rounded-3xl`}
      initial={{ opacity: 0, translateY: 20 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ amount: 0.6 }}
    >
      <h2 className="border-b-2 border-solid border-secondary-color text-center">
        {content.title}
      </h2>
      <div className="text-base my-4 flex flex-col justify-evenly">
        {content.text.map((phrase: string, k: number) => (
          <p className="mt-3" key={Math.random().toString().slice(2, 8)}>
            {phrase}
          </p>
        ))}
      </div>
    </motion.article>
  );
}
