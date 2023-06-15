"use client"

import { HELLO } from "@/lib/contents"
import { motion } from "framer-motion"

export default function Header() {
  return (
    <header className="home__header">
      <div className="home__header--textwrapper">
        <p className="welcome">
          {HELLO.split("").map((char, index) => {
            return (
              <motion.span
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  ease: "easeInOut",
                  duration: 1,
                  delay: index * 0.1,
                }}
              >
                {char}
              </motion.span>
            )
          })}
        </p>
        <motion.p
          className="whoiam"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 1.5 }}
        >
          Nazywam się <strong> Wojciech Szpila</strong>
        </motion.p>
        <motion.p
          className="profession"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.8, delay: 2.5 }}
        >
          ...i jestem <strong>fullstack developerem</strong> 😁
        </motion.p>
      </div>
      <motion.div
        className="icon-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "linear", duration: 0.6, delay: 3.3 }}
      ></motion.div>
    </header>
  )
}
