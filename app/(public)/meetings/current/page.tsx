import { connection } from "next/server";
import { getMeetingByDate } from "@/lib/meetings-db";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default function CurrentMeetingPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-4xl px-6 py-10">
          Loading current meeting...
        </div>
      }
    >
      <CurrentMeetingContent />
    </Suspense>
  );
}

async function CurrentMeetingContent() {
  await connection();

  const today = new Date();

  const sunday = new Date(today);
  sunday.setDate(today.getDate() - today.getDay());

  const sundayDate = [
    sunday.getFullYear(),
    String(sunday.getMonth() + 1).padStart(2, "0"),
    String(sunday.getDate()).padStart(2, "0"),
  ].join("-");

  const currentMeeting = await getMeetingByDate(sundayDate);

  if (!currentMeeting) {
    return redirect("/meetings");
  }

  return redirect(`/meetings/${currentMeeting.id}`);
}

