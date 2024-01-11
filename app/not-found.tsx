import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h3 className="mb-10 text-[21px] font-medium"> 😥 Page not found</h3>
      <Link className={buttonVariants({})} href="/">
        Back to homepage
      </Link>
    </div>
  );
}
