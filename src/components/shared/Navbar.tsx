"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import ChangeThemeButton from "./ChangeThemeButton";
import { NAVBAR_CONTENT } from "@/lib/contents";

export default function Navbar() {
  const currentRoute = usePathname();

  return (
    <nav className="transite-colors relative bg-main-bg h-auto w-full px-1">
      <ChangeThemeButton className="absolute top-2 right-2 text-2xl md:t-4 md:r-4 md:text-3xl" />
      <ul className="h-full w-full flex flex-col justify-evenly items-center list-none max-w-6xl m-auto">
        <div className="py-6 font-semibold text-3xl leading-9 duration-200 hover:scale-110">
          <Link
            href={"/"}
            className={`${currentRoute === "/" ? "text-active-link" : ""}`}
          >
            <div>{NAVBAR_CONTENT.heading}</div>
          </Link>
        </div>
        <motion.div
          className="flex justify-around items-center w-full font-semibold"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.6, delay: 1 }}
        >
          {NAVBAR_CONTENT.links.map((link: { name: string; url: string }) => {
            return (
              <Link
                key={link.name}
                href={link.url}
                className={`transition-transform hover:-translate-y-[0.187rem] after:block after:w-full after:h-[0.1rem] after:scale-0 after:bg-active-link after:transition-transform after:origin-center hover:after:scale-100 ${
                  currentRoute === link.url ? "text-active-link" : ""
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </motion.div>
      </ul>
    </nav>
  );
}
