import { redirect } from "next/navigation";
import React from "react";

export default function page() {
  redirect("/blog");
  return <div>Home</div>;
}
