import MeetingDetail from "@/components/MeetingDetail";
import PrintButton from "@/components/PrintButton";
import { getMeetingById } from "@/lib/meetings-db";
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
  const { id } = await params;
  const meetingId = Number(id);

  if (!Number.isInteger(meetingId) || meetingId <= 0) {
    notFound();
  }

  const meeting = await getMeetingById(meetingId);

  if (!meeting) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <div className="mb-6 flex justify-end print:hidden">
        <PrintButton />
      </div>

      <MeetingDetail meeting={meeting} />
    </div>
  );
}
