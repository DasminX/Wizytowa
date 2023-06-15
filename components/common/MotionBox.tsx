"use client"

import { motion } from "framer-motion"

export default function MotionBox({
  content,
}: {
  content: { title: string; text: string[] }
}) {
  return (
    <motion.div
      className="descriptions--content"
      initial={{ opacity: 0, translateY: 20 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ amount: 0.6 }}
    >
      <h2>{content.title}</h2>
      <div className="text--wrapper">
        {content.text.map((phrase: string, k: number) => (
          <p key={Math.random().toString().slice(2, 8)}>{phrase}</p>
        ))}
      </div>
    </motion.div>
  )
}
