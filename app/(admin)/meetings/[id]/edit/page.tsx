type EditMeetingPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditMeetingPage({
  params,
}: EditMeetingPageProps) {
  const { id } = await params;

  return (
    <section>
      <h1 className="text-3xl font-bold">Edit Meeting</h1>
      <p className="mt-4 text-gray-600">
        Editing functionality for meeting {id} will be implemented in Week 04.
      </p>
    </section>
  );
}