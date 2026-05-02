"use client";

import { useEffect, useState } from "react";
import { supabase, type HubSession } from "@/lib/supabase";

export function useHubSession(): HubSession | null | undefined {
  const [session, setSession] = useState<HubSession | null | undefined>(undefined);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session: s } }) => {
      if (!s) {
        setSession(null);
        return;
      }
      setSession({
        userId: s.user.id,
        email: s.user.email ?? "",
        displayName: (s.user.user_metadata?.display_name as string) || s.user.email?.split("@")[0] || "Team Member",
        title: (s.user.user_metadata?.title as string) || "",
      });
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, s) => {
      if (!s) {
        setSession(null);
        return;
      }
      setSession({
        userId: s.user.id,
        email: s.user.email ?? "",
        displayName: (s.user.user_metadata?.display_name as string) || s.user.email?.split("@")[0] || "Team Member",
        title: (s.user.user_metadata?.title as string) || "",
      });
    });

    return () => subscription.unsubscribe();
  }, []);

  return session;
}
