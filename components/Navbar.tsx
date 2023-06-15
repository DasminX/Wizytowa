"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import ChangeThemeButton from "./ChangeThemeButton"
import { NAVBAR_CONTENT } from "@/lib/contents"

export default function Navbar() {
  const currentRoute = usePathname()

  return (
    <nav className="navbar transite-colors">
      <ChangeThemeButton />
      <ul className="max-w-1280">
        <div className="nav--site">
          <Link
            href={"/"}
            className={`${currentRoute === "/" ? "link-active" : ""}`}
          >
            <div>{NAVBAR_CONTENT.heading}</div>
          </Link>
        </div>
        <motion.div
          className="nav--links"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.6, delay: 1 }}
        >
          {NAVBAR_CONTENT.links.map((link: { name: string; url: string }) => {
            return (
              <Link
                key={link.name}
                href={link.url}
                className={currentRoute === link.url ? "link-active" : ""}
              >
                {link.name}
              </Link>
            )
          })}
        </motion.div>
      </ul>
    </nav>
  )
}
