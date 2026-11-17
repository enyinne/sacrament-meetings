import Link from "next/link";
import type { SacramentMeeting } from "@/lib/types";

type MeetingCardProps = {
  meeting: SacramentMeeting;
};

export default function MeetingCard({ meeting }: MeetingCardProps) {
  return (
    <article className="rounded-lg border p-5 shadow-sm">
      <h2 className="text-xl font-semibold">
        {meeting.meetingType} Meeting
      </h2>

      <p>Date: {meeting.date}</p>
      <p>Presiding: {meeting.presiding}</p>
      <p>Conducting: {meeting.conducting}</p>

      <Link
        href={`/meetings/${meeting.id}`}
        className="mt-4 inline-block text-blue-600 underline"
      >
        View Meeting Details
      </Link>
    </article>
  );
}