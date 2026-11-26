
import { sql } from "./db";
import type { SacramentMeeting } from "./types";

const ITEMS_PER_PAGE = 5;

export async function getMeetings(
  query: string = "",
  currentPage: number = 1,
): Promise<SacramentMeeting[]> {
  const searchTerm = query.trim();
  const searchPattern = `%${searchTerm}%`;
  const offset = (Math.max(1, currentPage) - 1) * ITEMS_PER_PAGE;

  const meetings = await sql`
    SELECT
      id,
      TO_CHAR(date, 'YYYY-MM-DD') AS date,
      meeting_type AS "meetingType",
      presiding,
      conducting,
      announcements,
      opening_hymn AS "openingHymn",
      opening_prayer AS "openingPrayer",
      ward_business AS "wardBusiness",
      stake_business AS "stakeBusiness",
      sacrament_hymn AS "sacramentHymn",
      speakers,
      closing_hymn AS "closingHymn",
      closing_prayer AS "closingPrayer"
    FROM meetings
    WHERE (
      ${searchTerm} = ''
      OR presiding ILIKE ${searchPattern}
      OR conducting ILIKE ${searchPattern}
      OR meeting_type ILIKE ${searchPattern}
      OR speakers::text ILIKE ${searchPattern}
    )
    ORDER BY date DESC, id DESC
    LIMIT ${ITEMS_PER_PAGE}
    OFFSET ${offset}
  `;

  return meetings as unknown as SacramentMeeting[];
}

export async function getMeetingsTotalPages(
  query: string = "",
): Promise<number> {
  const searchTerm = query.trim();
  const searchPattern = `%${searchTerm}%`;

  const result = await sql`
    SELECT COUNT(*)::int AS total
    FROM meetings
    WHERE (
      ${searchTerm} = ''
      OR presiding ILIKE ${searchPattern}
      OR conducting ILIKE ${searchPattern}
      OR meeting_type ILIKE ${searchPattern}
      OR speakers::text ILIKE ${searchPattern}
    )
  `;

  const total = Number(result[0]?.total ?? 0);

  return Math.ceil(total / ITEMS_PER_PAGE);
}

export async function getMeetingById(
  id: number,
): Promise<SacramentMeeting | null> {
  const meetings = await sql`
    SELECT
      id,
      TO_CHAR(date, 'YYYY-MM-DD') AS date,
      meeting_type AS "meetingType",
      presiding,
      conducting,
      announcements,
      opening_hymn AS "openingHymn",
      opening_prayer AS "openingPrayer",
      ward_business AS "wardBusiness",
      stake_business AS "stakeBusiness",
      sacrament_hymn AS "sacramentHymn",
      speakers,
      closing_hymn AS "closingHymn",
      closing_prayer AS "closingPrayer"
    FROM meetings
    WHERE id = ${id}
    LIMIT 1
  `;

  return (meetings[0] as unknown as SacramentMeeting) ?? null;
}


export async function getMeetingByDate(
  date: string,
): Promise<SacramentMeeting | null> {
  const meetings = await sql`
    SELECT
      id,
      TO_CHAR(date, 'YYYY-MM-DD') AS date,
      meeting_type AS "meetingType",
      presiding,
      conducting,
      announcements,
      opening_hymn AS "openingHymn",
      opening_prayer AS "openingPrayer",
      ward_business AS "wardBusiness",
      stake_business AS "stakeBusiness",
      sacrament_hymn AS "sacramentHymn",
      speakers,
      closing_hymn AS "closingHymn",
      closing_prayer AS "closingPrayer"
    FROM meetings
    WHERE date = ${date}::date
    ORDER BY id DESC
    LIMIT 1
  `;

  return (meetings[0] as unknown as SacramentMeeting) ?? null;
}

// Mutation stubs — will be wired to the database in Week 04
export async function addMeeting(
  data: Omit<SacramentMeeting, 'id'>
): Promise<SacramentMeeting> {
  void data;
  throw new Error('addMeeting: database implementation coming in Week 04');
}

export async function updateMeeting(
  id: number,
  updates: Partial<SacramentMeeting>
): Promise<SacramentMeeting | null> {
  void id;
  void updates;
  throw new Error('updateMeeting: database implementation coming in Week 04');
}

export async function deleteMeeting(id: number): Promise<boolean> {
  void id;
  throw new Error('deleteMeeting: database implementation coming in Week 04');
}