import type { SacramentMeeting } from "@/lib/types";

type MeetingDetailProps = {
  meeting: SacramentMeeting;
};

export default function MeetingDetail({ meeting }: MeetingDetailProps) {
  return (
    <section className="space-y-6 rounded-lg border bg-white p-6 shadow-sm">
      <h1 className="text-2xl font-bold capitalize">
        {meeting.meetingType} Meeting
      </h1>

      <div>
        <p>Date: {meeting.date}</p>
        <p>Presiding: {meeting.presiding}</p>
        <p>Conducting: {meeting.conducting}</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Announcements</h2>
        {meeting.announcements && meeting.announcements.length > 0 ? (
          <ul className="list-disc space-y-1 pl-6">
            {meeting.announcements.map((announcement, index) => (
              <li key={index}>{announcement}</li>
            ))}
          </ul>
        ) : (
          <p>No announcements.</p>
        )}
      </div>

      <div>
        <h2 className="text-lg font-semibold">Hymns</h2>
        <p>
          Opening: {meeting.openingHymn.number} - {meeting.openingHymn.title}
        </p>
        <p>
          Sacrament: {meeting.sacramentHymn.number} - {meeting.sacramentHymn.title}
        </p>
        <p>
          Closing: {meeting.closingHymn.number} - {meeting.closingHymn.title}
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Opening Prayer</h2>
        <p>{meeting.openingPrayer}</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Ward Business</h2>
        {meeting.wardBusiness.length > 0 ? (
          <ul className="list-disc space-y-1 pl-6">
            {meeting.wardBusiness.map((item, index) => (
              <li key={index}>{item.description}</li>
            ))}
          </ul>
        ) : (
          <p>No ward business.</p>
        )}
      </div>

      <div>
        <h2 className="text-lg font-semibold">Stake Business</h2>
        <p>{meeting.stakeBusiness ? "Yes" : "No"}</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Speakers and Musical Numbers</h2>
        {meeting.speakers.map((item, index) => (
          <p key={index}>
            <span className="font-medium">
              {item.type === "speaker" ? "Speaker" : "Musical Number"}:
            </span>{" "}
            {item.name} — {item.topic}
          </p>
        ))}
      </div>

      <div>
        <h2 className="text-lg font-semibold">Closing Prayer</h2>
        <p>{meeting.closingPrayer}</p>
      </div>
    </section>
  );
}