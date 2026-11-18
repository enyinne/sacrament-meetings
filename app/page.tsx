import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-16">
      <Image
        src="/church-chapel.svg"
        alt="Sacrament meeting planner illustration"
        width={100}
        height={100}
        className="mx-auto mb-4"
      />
      <section className="rounded-2xl bg-blue-50 px-6 py-16 text-center sm:px-12">
        <p className="mb-4 font-semibold uppercase tracking-wider text-blue-700">
          Welcome
        </p>

        <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Sacrament Meeting Planner
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-gray-600">
          Organize and explore sacrament meeting schedules, including
          meeting details, hymns, prayers, and speakers.
        </p>

        <Link
          href="/meetings"
          className="inline-block rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
        >
          View Meetings
        </Link>
      </section>

      <section className="mt-12 grid gap-6 text-center sm:grid-cols-3">
        <article className="rounded-lg border p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-semibold">Meeting Schedules</h2>
          <p className="text-gray-600">
            Browse upcoming sacrament meeting dates and schedules.
          </p>
        </article>

        <article className="rounded-lg border p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-semibold">Hymns and Prayers</h2>
          <p className="text-gray-600">
            Find the hymns and prayers planned for each meeting.
          </p>
        </article>

        <article className="rounded-lg border p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-semibold">Meeting Participants</h2>
          <p className="text-gray-600">
            Review presiding leaders, conductors, and speakers.
          </p>
        </article>
      </section>
    </div>
  );
}
