import { Metadata } from "next";
import { latestRevisionId, loadRevision } from "@/lib/laws";

type LawProps = {
  params: Promise<{ law: string }>;
};

export async function generateMetadata(props: LawProps): Promise<Metadata> {
  const { law } = await props.params;
  const id = latestRevisionId(law);
  const revision = await loadRevision(law, id);
  return {
    title: revision.name.en,
  };
}

export default async function Law(props: LawProps) {
  const { law } = await props.params;
  const id = latestRevisionId(law);
  const href = `/${law}/${id}/`;
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${href}`} />
      <p className="p-4">
        <a className="text-link underline" href={href}>
          {href}
        </a>
      </p>
    </>
  );
}
