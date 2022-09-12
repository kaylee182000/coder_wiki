import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>Ooops...</h1>
      <h2>That Page Can Not Be Found</h2>
      <p>
        Going back to the{" "}
        <Link href="/">
          <a>Home Page</a>
        </Link>{" "}
        in 3 seconds...
      </p>
    </div>
  );
}
