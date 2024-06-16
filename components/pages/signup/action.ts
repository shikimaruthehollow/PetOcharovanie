"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function signup(data: {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}) {
  const supabase = createClient();

  const { error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      data: { firstname: data.firstname, lastname: data.lastname },
    },
  });

  if (error) {
    redirect("/error");
  }

  revalidatePath("/shop", "layout");
  redirect("/shop");
}
