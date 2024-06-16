"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function editProfile(data: {
  avatarUploadPath: string;
  firstname: string;
  lastname: string;
}) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const bruh = await supabase
    .schema("auth")
    .from("users")
    .upsert({
      id: user?.id,
      firstname: data.firstname,
      lastname: data.lastname,
      ...(data.avatarUploadPath
        ? {
            options: {
              data: {
                firstname: data.firstname,
                lastname: data.lastname,
                avatar_url: data.avatarUploadPath,
              },
            },
          }
        : undefined),
    })
    .select();

  if (bruh) {
    redirect("/error");
  }

  revalidatePath("/shop", "layout");
  redirect("/shop");
}
