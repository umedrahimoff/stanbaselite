import { notFound } from "next/navigation";
import Link from "next/link";
import { events } from "@/data/mock";

export async function generateStaticParams() {
  return events.map((e) => ({ id: e.id }));
}

export default async function EventPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = events.find((e) => e.id === id);
  if (!event) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/events" className="text-gray-500 hover:text-gray-700 text-sm mb-6 inline-block">
        ← Back to Events
      </Link>
      <article>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h1>
        <div className="space-y-2 text-gray-600 mb-8">
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Format:</strong> {event.format}</p>
          <p><strong>Location:</strong> {event.location}</p>
        </div>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600">
            Full event description would be displayed here. This is a placeholder for the event details.
          </p>
        </div>
      </article>
    </div>
  );
}
