export const HUB_SESSION_KEY = "ogp-hub-demo-session";

export type HubDemoSession = {
  email: string;
  displayName: string;
};

const listeners = new Set<() => void>();

let cachedRaw: string | null | undefined;
let cachedSession: HubDemoSession | null | undefined;

function syncCacheFromStorage(): HubDemoSession | null {
  if (typeof window === "undefined") return null;
  let raw: string | null;
  try {
    raw = sessionStorage.getItem(HUB_SESSION_KEY);
  } catch {
    cachedRaw = undefined;
    cachedSession = undefined;
    return null;
  }
  if (raw === cachedRaw && cachedSession !== undefined) {
    return cachedSession;
  }
  cachedRaw = raw;
  if (!raw) {
    cachedSession = null;
    return null;
  }
  try {
    cachedSession = JSON.parse(raw) as HubDemoSession;
    return cachedSession;
  } catch {
    cachedSession = null;
    return null;
  }
}

function notifyHubSessionChange() {
  cachedRaw = undefined;
  cachedSession = undefined;
  for (const fn of listeners) fn();
}

/**
 * Stable snapshot for useSyncExternalStore — same object reference until sessionStorage changes.
 */
export function getHubSessionSnapshot(): HubDemoSession | null {
  return syncCacheFromStorage();
}

export function subscribeHubSession(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  return () => listeners.delete(onStoreChange);
}

export function readHubSession(): HubDemoSession | null {
  return getHubSessionSnapshot();
}

export function writeHubSession(session: HubDemoSession) {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(HUB_SESSION_KEY, JSON.stringify(session));
  } catch {
    /* ignore */
  }
  notifyHubSessionChange();
}

export function clearHubSession() {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.removeItem(HUB_SESSION_KEY);
  } catch {
    /* ignore */
  }
  notifyHubSessionChange();
}
