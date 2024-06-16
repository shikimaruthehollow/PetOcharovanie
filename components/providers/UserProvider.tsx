"use client";

import { User, UserResponse } from "@supabase/supabase-js";
import { createContext } from "react";

export const UserContext = createContext<User | null>(null);

export default function UserProvider({
  children,
  user,
}: React.PropsWithChildren & { user: UserResponse }) {
  return (
    <UserContext.Provider value={user.data.user}>
      {children}
    </UserContext.Provider>
  );
}
