import { NAVBAR_CONTENT } from "@/lib/contents";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-5 px-3 flex items-center justify-around text-sm">
      <div className="basis-3/5">
        <p>
          Stworzono przez:
          <br /> <span className="text-secondary-color">Wojciech Szpila</span>
        </p>
        <p>wszelkie prawa zastrzeżone</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <a href="#">Do góry</a>
        {NAVBAR_CONTENT.links.map((item) => (
          <Link
            href={item.url}
            key={item.url}
            className="my-1 text-active-link font-bold"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </footer>
  );
}
