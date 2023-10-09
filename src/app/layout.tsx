import { Roboto_Mono } from "next/font/google";
import { ReactNode } from "react";
import "@/styles/index.scss";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const roboto = Roboto_Mono({ subsets: ["latin-ext"], preload: true });

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang={"en"}>
      <body className={`${roboto.className} transite-colors`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
