import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export default function page() {
  return (
    <div>
      Welcome, page under construction please check out{" "}
      <Link className="font-bold" href={"/blog"}>
        blogs
      </Link>
    </div>
  );
}
