"use client";

import ThemeSwitch from "@/components/ThemeSwitch";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { CircleUserRoundIcon, ShoppingBasketIcon } from "lucide-react";
import Cart from "./Cart";
import Profile from "./Profile";

export default function DesktopMenu() {
  return (
    <NavigationMenu viewportClassName="">
      <NavigationMenuList className="space-x-4">
        <NavigationMenuItem className="flex items-center">
          <NavigationMenuTrigger>
            <ShoppingBasketIcon />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <Cart />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="flex items-center">
          <NavigationMenuTrigger>
            <CircleUserRoundIcon />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <Profile />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ThemeSwitch />
        </NavigationMenuItem>
        <NavigationMenuIndicator />
      </NavigationMenuList>
    </NavigationMenu>
  );
}
