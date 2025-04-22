import Link from "next/link";

export default function HomePage() {
  return (
    <div id="home">
      <h1>Home Page</h1>
      <Link href="/news">News List</Link>
    </div>
  );
}
