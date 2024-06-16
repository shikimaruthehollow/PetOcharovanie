"use client";

import CartView from "@/components/CartView";
import { UserContext } from "@/components/providers/UserProvider";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { createClient } from "@/lib/supabase/client";
import { useCart } from "@/lib/zustand";
import {
  CircleUserRoundIcon,
  LogInIcon,
  LogOutIcon,
  ShoppingBasketIcon,
  SquareMenuIcon,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function MobileMenu() {
  const router = useRouter();
  const supabase = createClient();
  const user = useContext(UserContext);
  const cart = useCart();

  async function signout() {
    await supabase.auth.signOut();
    router.refresh();
  }

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SquareMenuIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40" align="end">
          {user && (
            <>
              <DropdownMenuLabel>
                {user.user_metadata.firstname} {user.user_metadata.lastname}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
            </>
          )}
          {user ? (
            <Link href="/shop/profile">
              <DropdownMenuItem>
                <CircleUserRoundIcon className="mr-2 size-4" />
                <span>Ваш Профиль</span>
              </DropdownMenuItem>
            </Link>
          ) : (
            <>
              <Link href="/auth/register">
                <DropdownMenuItem>
                  <CircleUserRoundIcon className="mr-2 size-4" />
                  <span>Зарегистрироваться</span>
                </DropdownMenuItem>
              </Link>
              <Link href="/auth/login">
                <DropdownMenuItem>
                  <LogInIcon className="mr-2 size-4" />
                  <span>Войти в Аккаунт</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
              </Link>
            </>
          )}
          <DialogTrigger asChild>
            <DropdownMenuItem>
              <ShoppingBasketIcon className="mr-2 size-4" />
              <span>Корзина</span>
            </DropdownMenuItem>
          </DialogTrigger>
          {user && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={signout}>
                <LogOutIcon className="mr-2 size-4" />
                <span>Выйти</span>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Ваша Корзина</DialogTitle>
        </DialogHeader>
        <CartView />
        {cart.products.length !== 0 && (
          <DialogFooter className="">
            <Link href="/checkout">
              <Button className="w-full">Перейти к Оформлению Заказа</Button>
            </Link>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
