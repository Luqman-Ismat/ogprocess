"use client";

import { useSyncExternalStore } from "react";
import {
  getHubSessionSnapshot,
  subscribeHubSession,
  type HubDemoSession,
} from "@/lib/hub-demo-session";

/**
 * Reads demo hub session from sessionStorage. getHubSessionSnapshot returns a
 * cached reference so useSyncExternalStore does not loop. Server snapshot is
 * always null to match static prerender.
 */
export function useHubSession(): HubDemoSession | null {
  return useSyncExternalStore(
    subscribeHubSession,
    getHubSessionSnapshot,
    () => null,
  );
}
