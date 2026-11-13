import { listLaws } from "@/lib/laws";

export const dynamicParams = false;

type LawParams = {
  law: string;
};

export function generateStaticParams(): LawParams[] {
  return listLaws().map((law) => ({ law }));
}

export default function LawLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
