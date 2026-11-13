import { readdirSync } from "fs";
import path from "path";
import { loadRevision as parseRevision, type Revision } from "./revision";

const dataDirectoryPath = path.join(process.cwd(), "data");

export function listLaws(): string[] {
  return readdirSync(dataDirectoryPath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

export function listRevisionIds(law: string): string[] {
  return readdirSync(path.join(dataDirectoryPath, law))
    .filter((f) => f.match(/^\d+:\d+\.yaml$/))
    .map((f) => f.replace(/\.yaml$/, ""))
    .sort((a, b) => {
      const [ay, an] = a.split(":").map(Number);
      const [by, bn] = b.split(":").map(Number);
      return ay - by || an - bn;
    });
}

export function latestRevisionId(law: string): string {
  return listRevisionIds(law).at(-1)!;
}

const revisionCache = new Map<string, Promise<Revision>>();

// Parsing and markdown rendering is expensive, so do it once per worker.
export function loadRevision(law: string, id: string): Promise<Revision> {
  const key = `${law}/${id}`;
  let revision = revisionCache.get(key);
  if (!revision) {
    revision = parseRevision(path.join(dataDirectoryPath, law, `${id}.yaml`));
    revisionCache.set(key, revision);
  }
  return revision;
}
