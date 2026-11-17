import { connection } from "next/server";

export default async function Footer() {
  await connection();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t bg-gray-100 px-6 py-4 text-center">
      <p>
        © {currentYear} Sacrament Meeting Planner. All rights reserved.
      </p>
    </footer>
  );
}