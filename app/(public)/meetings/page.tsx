
import MeetingCard from "@/components/MeetingCard";
import MeetingSearch from "@/components/MeetingSearch";
import MeetingPagination from "@/components/MeetingPagination";
import {
  getMeetings,
  getMeetingsTotalPages,
} from "@/lib/meetings-db";
import { Suspense } from "react";

type MeetingsPageProps = {
  searchParams: Promise<{
    query?: string;
    page?: string;
  }>;
};

export default async function MeetingsPage({
  searchParams,
}: MeetingsPageProps) {
  const params = await searchParams;

  const query = params.query ?? "";
  const currentPage = Math.max(1, Number(params.page) || 1);

  const [meetings, totalPages] = await Promise.all([
    getMeetings(query, currentPage),
    getMeetingsTotalPages(query),
  ]);

  return (
    <div className="mx-auto max-w-6xl space-y-6 px-6 py-10">
      <h1 className="text-3xl font-bold">
        Upcoming Sacrament Meetings
      </h1>

      <Suspense fallback={<div>Loading search...</div>}>
        <MeetingSearch />
      </Suspense>

      {meetings.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {meetings.map((meeting) => (
            <MeetingCard key={meeting.id} meeting={meeting} />
          ))}
        </div>
      ) : (
        <p>No meetings found.</p>
      )}

      <Suspense fallback={<div>Loading pagination...</div>}>
        <MeetingPagination totalPages={totalPages} />
      </Suspense>
    </div>
  );
}
