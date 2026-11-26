
"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

type MeetingPaginationProps = {
  totalPages: number;
};

export default function MeetingPagination({
  totalPages,
}: MeetingPaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page") ?? "1");

  if (totalPages <= 1) {
    return null;
  }

  function createPageUrl(page: number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));

    return `${pathname}?${params.toString()}`;
  }

  return (
    <nav
      aria-label="Meeting pagination"
      className="flex items-center justify-center gap-4"
    >
      {currentPage > 1 && (
        <Link
          href={createPageUrl(currentPage - 1)}
          className="rounded border px-4 py-2 hover:bg-gray-100"
        >
          Previous
        </Link>
      )}

      <span className="text-sm">
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages && (
        <Link
          href={createPageUrl(currentPage + 1)}
          className="rounded border px-4 py-2 hover:bg-gray-100"
        >
          Next
        </Link>
      )}
    </nav>
  );
}
