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
        <Link href="/blogs">
          <a>Blogs</a>
        </Link>
        <Link href="/counter">
          <a>Count</a>
        </Link>
      </div>
    </nav>
    // <nav className="nav justify-content-between">
    //   <Link href="/">
    //     <a className="nav-link active">Coder Wiki</a>
    //   </Link>
    //   <Link href="/about">
    //     <a className="nav-link">About</a>
    //   </Link>
    //   <Link href="/coders">
    //     <a className="nav-link">All Coders</a>
    //   </Link>
    //   <Link href="/counter">
    //     <a className="nav-link">Count</a>
    //   </Link>
    // </nav>
  );
}
