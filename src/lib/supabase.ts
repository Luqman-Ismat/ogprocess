import { createClient } from "@/utils/supabase/client";

export type HubSession = {
  userId: string;
  email: string;
  displayName: string;
  title: string;
};

// Lazily created browser client — safe to call on the client side only.
let _client: ReturnType<typeof createClient> | null = null;

export function getSupabase() {
  if (!_client) _client = createClient();
  return _client;
}

// Convenience re-export for client components that do a direct `import { supabase }`.
export const supabase = new Proxy(
  {} as ReturnType<typeof createClient>,
  {
    get(_t, prop) {
      return getSupabase()[prop as keyof ReturnType<typeof createClient>];
    },
  }
);
