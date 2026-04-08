export function getNested(obj: unknown, path: string): unknown {
  const parts = path.split(".");
  let cur: unknown = obj;
  for (const p of parts) {
    if (cur !== null && typeof cur === "object" && p in cur) {
      cur = (cur as Record<string, unknown>)[p];
    } else {
      return undefined;
    }
  }
  return cur;
}

export function getString(obj: unknown, path: string, fallback: string): string {
  const v = getNested(obj, path);
  return typeof v === "string" ? v : fallback;
}

export function getStringArray(obj: unknown, path: string): string[] {
  const v = getNested(obj, path);
  return Array.isArray(v) && v.every((x) => typeof x === "string") ? (v as string[]) : [];
}
