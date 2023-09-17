import Link from "next/link";
import React from "react";

// TODO: Homepage
export default function page() {
  return (
    <div className="text-center mt-4">
      Welcome, page under construction please check out{" "}
      <Link className="font-bold" href={"/blog"}>
        blogs
      </Link>{" "}
      page.
    </div>
  );
}
