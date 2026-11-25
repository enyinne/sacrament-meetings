import type { SacramentMeeting } from "@/lib/types";
import { headers } from "next/headers";
import { connection } from "next/server";
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

  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") ?? "http";

  if (!host) {
    throw new Error("Unable to determine the server address.");
  }

  const response = await fetch(
    `${protocol}://${host}/api/meetings?date=${sundayDate}`,
    { cache: "no-store" },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch current meeting.");
  }

  const meetings: SacramentMeeting[] = await response.json();
  const currentMeeting = meetings[0];

  if (!currentMeeting) {
    return redirect("/meetings");
  }

 return redirect(`/meetings/${currentMeeting.id}`);
}
