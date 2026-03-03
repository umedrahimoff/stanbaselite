import { CompaniesClient } from "./CompaniesClient";

export default async function CompaniesPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = await searchParams;
  const initialSearch = params?.q ?? "";

  return <CompaniesClient initialSearch={initialSearch} />;
}
