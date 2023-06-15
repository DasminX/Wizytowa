import { Roboto_Mono } from "next/font/google"
import { ReactNode } from "react"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import "./globals.scss"
import Navbar from "../components/Navbar"
import Footer from "@/components/Footer"

config.autoAddCss = false
const roboto = Roboto_Mono({ subsets: ["latin-ext"], preload: true })

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang={"en"}>
      <body className={`${roboto.className} transite-colors`}>
        <Navbar />
        <div className="main-content max-w-1024">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
