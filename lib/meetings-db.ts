import type { SacramentMeeting } from "./types";
const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: "2026-11-08",
    meetingType: "regular",
    presiding: "Bishop John Smith",
    conducting: "Brother David Brown",
    announcements: ["Youth activity next Saturday."],
    openingHymn: {
      number: 1,
      title: "The Morning Breaks",
    },
    openingPrayer: "Brother Michael",
    wardBusiness: [
      {
        description: "Welcome new members.",
      },
    ],
    stakeBusiness: false,
    sacramentHymn: {
      number: 100,
      title: "Example Sacrament Hymn",
    },
    speakers: [
      {
        name: "Sister Mary",
        topic: "Faith in Jesus Christ",
        type: "speaker",
      },
      {
        name: "Ward Choir",
        topic: "Musical number",
        type: "musical-number",
      },
    ],
    closingHymn: {
      number: 2,
      title: "The Spirit of God",
    },
    closingPrayer: "Brother James",
    },
  {
    id: 2,
    date: "2026-11-15",
    meetingType: "testimony",
    presiding: "Bishop Peter James",
    conducting: "Brother Samuel",
    openingHymn: {
      number: 3,
      title: "Now Let Us Rejoice",
    },
    openingPrayer: "Sister Grace",
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: 101,
      title: "Guide Us, O Thou Great Jehovah",
    },
    speakers: [
      {
        name: "Sister Esther",
        topic: "The Power of Prayer",
        type: "speaker",
      },
    ],
    closingHymn: {
      number: 4,
      title: "Truth Eternal",
    },
    closingPrayer: "Brother Daniel",
    },
  {
    id: 3,
    date: "2026-11-22",
    meetingType: "regular",
    presiding: "Bishop Andrew",
    conducting: "Brother Joseph",
    announcements: ["Ward service activity on Saturday."],
    openingHymn: {
      number: 5,
      title: "High on the Mountain Top",
    },
    openingPrayer: "Sister Ruth",
    wardBusiness: [
      {
        description: "Sustain newly called ward leaders.",
      },
    ],
    stakeBusiness: true,
    sacramentHymn: {
      number: 102,
      title: "Example Sacrament Hymn Two",
    },
    speakers: [
      {
        name: "Brother Mark",
        topic: "Serving One Another",
        type: "speaker",
      },
      {
        name: "Sister Anna",
        topic: "Gratitude",
        type: "speaker",
      },
    ],
    closingHymn: {
      number: 6,
      title: "Redeemer of Israel",
    },
    closingPrayer: "Brother Paul",
    },
  {
    id: 4,
    date: "2026-11-29",
    meetingType: "stake",
    presiding: "Stake President James",
    conducting: "Brother Thomas",
    announcements: ["Stake conference preparation meeting."],
    openingHymn: {
      number: 7,
      title: "Israel, Israel, God Is Calling",
    },
    openingPrayer: "Sister Elizabeth",
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: {
      number: 103,
      title: "Example Sacrament Hymn Three",
    },
    speakers: [
      {
        name: "President James",
        topic: "Strengthening Our Faith",
        type: "speaker",
      },
      {
        name: "Sister Rebecca",
        topic: "Following the Savior",
        type: "speaker",
      },
    ],
    closingHymn: {
      number: 8,
      title: "Awake and Arise",
    },
    closingPrayer: "Brother Matthew",
    },
  {
    id: 5,
    date: "2026-12-06",
    meetingType: "general",
    presiding: "General Authority",
    conducting: "Brother William",
    announcements: ["Special Sunday meeting."],
    openingHymn: {
      number: 9,
      title: "Come, Rejoice",
    },
    openingPrayer: "Sister Hannah",
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: 104,
      title: "Example Sacrament Hymn Four",
    },
    speakers: [
      {
        name: "Elder Thomas",
        topic: "The Gospel of Jesus Christ",
        type: "speaker",
      },
    ],
    closingHymn: {
      number: 10,
      title: "Come, Sing to the Lord",
    },
    closingPrayer: "Brother Samuel",
  }
      
];

export function getMeetings(
  date?: string | null,
): SacramentMeeting[] {
  if (!date) {
    return meetings;
  }

  return meetings.filter((meeting) => meeting.date === date);
}

export function getMeetingById(
  id: number,
): SacramentMeeting | null {
  return meetings.find((meeting) => meeting.id === id) ?? null;
}