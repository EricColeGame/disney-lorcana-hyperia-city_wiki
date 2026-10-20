import Link from "next/link";

export default function RootPage() {
  return (
    <main>
      <meta httpEquiv="refresh" content="0;url=/en" />
      <p>
        Redirecting to <Link href="/en">Disney Lorcana Hyperia City Wiki</Link>…
      </p>
    </main>
  );
}
