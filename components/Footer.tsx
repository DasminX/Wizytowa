import { NAVBAR_CONTENT } from "@/lib/contents"
import Link from "next/link"

export default function Footer() {
  return (
    <footer>
      <div className="madeby">
        <p>
          Stworzono przez:
          <br /> <span>Wojciech Szpila</span>
        </p>
        <p>wszelkie prawa zastrzeżone</p>
      </div>
      <div className="nav--shortcut">
        <a href="#">Do góry</a>
        {NAVBAR_CONTENT.links.map((item) => (
          <Link href={item.url} key={item.url}>
            {item.name}
          </Link>
        ))}
      </div>
    </footer>
  )
}
