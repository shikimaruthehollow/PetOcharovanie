"use client";

import { UserContext } from "@/components/providers/UserProvider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { createClient } from "@/lib/supabase/client";
import { ExternalLinkIcon, LogInIcon, LogOutIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function Profile() {
  const router = useRouter();
  const supabase = createClient();
  const user = useContext(UserContext);

  async function signout() {
    await supabase.auth.signOut();
    router.refresh();
  }

  console.log(user);

  return (
    <div className="w-96 p-4">
      {user ? (
        <div>
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={user.user_metadata.avatar_url} />
              <AvatarFallback>IK</AvatarFallback>
            </Avatar>
            <Separator orientation="vertical" className="h-10" />
            <div>
              <h3 className="text-lg font-semibold">
                {user.user_metadata.firstname} {user.user_metadata.lastname}
              </h3>
              <div className="text-xs">{user.email}</div>
            </div>
            <Button className="ml-auto" onClick={signout}>
              <LogOutIcon className="size-4 mr-2" />
              <span>Выход</span>
            </Button>
          </div>
          <Separator className="my-4" />
          <Link href="/shop/profile" className="block">
            <Button className="w-full">
              <ExternalLinkIcon className="size-4 mr-2" />
              <span>Посмотреть Аккаунт</span>
            </Button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Вы не авторизированы!</h3>
          <Link href="/auth/login">
            <Button className="w-full">
              <LogInIcon className="size-4 mr-2" />
              <span>Войти</span>
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
