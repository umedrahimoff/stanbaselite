import { notFound } from "next/navigation";
import Link from "next/link";
import { news } from "@/data/mock";

export async function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export default async function NewsItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  if (!item) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/news" className="text-gray-500 hover:text-gray-700 text-sm mb-6 inline-block">
        ← Back to News
      </Link>
      <article>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{item.title}</h1>
        <p className="text-gray-500 text-sm mb-8">{item.date} | {item.views} views</p>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600">
            Full article content would be displayed here. This is a placeholder for the news article body.
          </p>
        </div>
      </article>
    </div>
  );
}
