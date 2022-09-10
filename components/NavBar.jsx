import React from "react";
import Link from "next/link";
export default function NavBar() {
  return (
    <nav>
      <div>
        <Link href="/">
          <a>Coder Wiki</a>
        </Link>
      </div>
      <div>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/coders">
          <a>All Coders</a>
        </Link>
      </div>
    </nav>
  );
}
