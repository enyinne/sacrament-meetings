import Link from "next/link";
import NavLinks from "./NavLinks";
import { connection } from "next/server";

export default async function Header() {
  await connection();

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Africa/Lagos",
  });

  return (
    <header className="border-b bg-white px-6 py-4">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link href="/" className="text-xl font-bold text-blue-700">
            Sacrament Meeting Planner
          </Link>

          <p className="text-sm text-gray-600">Whitesand Ward</p>
          <p className="text-sm text-gray-600">{currentDate}</p>
        </div>

        <NavLinks />
      </div>
    </header>
  );
}