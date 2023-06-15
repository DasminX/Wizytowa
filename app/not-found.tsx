import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h2>Not Found</h2>
      <Link href={"/"}>Go back</Link>
    </>
  );
}
