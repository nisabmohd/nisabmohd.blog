import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
};

export default function Pagination({
  currentPage,
  totalPages,
  baseUrl,
}: PaginationProps) {
  return (
    <div className="flex flex-row items-center justify-between mx-auto max-w-[400px]">
      {currentPage - 1 == 0 ? (
        <span className="flex flex-row items-center gap-2 text-muted-foreground cursor-not-allowed">
          <ChevronLeft className="w-4 h-4" />
          Prev
        </span>
      ) : (
        <Link
          href={`${baseUrl}?page=${currentPage - 1}`}
          className="flex flex-row items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Prev
        </Link>
      )}

      <span>
        {currentPage} of {totalPages}
      </span>
      {currentPage == totalPages ? (
        <span className="flex flex-row items-center gap-2 text-muted-foreground cursor-not-allowed">
          Next <ChevronRight className="w-4 h-4" />
        </span>
      ) : (
        <Link
          href={`${baseUrl}?page=${currentPage + 1}`}
          className="flex flex-row items-center gap-2"
        >
          Next <ChevronRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
}
