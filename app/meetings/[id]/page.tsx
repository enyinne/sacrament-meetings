
import MeetingDetail from "@/components/MeetingDetail";
import PrintButton from "@/components/PrintButton";
import type { SacramentMeeting } from "@/lib/types";
import { headers } from "next/headers";
import { connection } from "next/server";
import { notFound } from "next/navigation";
import { Suspense } from "react";

type MeetingPageProps = {
  params: Promise<{ id: string }>;
};

export default function MeetingPage({ params }: MeetingPageProps) {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-4xl px-6 py-10">
          Loading meeting details...
        </div>
      }
    >
      <MeetingPageContent params={params} />
    </Suspense>
  );
}

async function MeetingPageContent({ params }: MeetingPageProps) {
  await connection();

  const { id } = await params;
  const meetingId = Number(id);

  if (!Number.isInteger(meetingId) || meetingId <= 0) {
    notFound();
  }

  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") ?? "http";

  if (!host) {
    throw new Error("Unable to determine the server address.");
  }

  const response = await fetch(
    `${protocol}://${host}/api/meetings/${meetingId}`,
    { cache: "no-store" },
  );

  if (response.status === 404 || response.status === 400) {
    notFound();
  }

  if (!response.ok) {
    throw new Error("Failed to fetch meeting details.");
  }

  const meeting: SacramentMeeting = await response.json();

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <div className="mb-6 flex justify-end print:hidden">
        <PrintButton />
      </div>

      <MeetingDetail meeting={meeting} />
    </div>
  );
}
