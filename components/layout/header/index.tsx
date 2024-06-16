import Logo from "@/components/icons/Logo";
import DesktopMenu from "./DesktopMenu";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { PawPrintIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link
        className="flex items-center justify-center"
        href="/"
      >
        <div className="relative w-10 h-10 md:w-14 md:h-14">
          <Image
            src="/poodle-head.svg"
            alt="Питомник Пуделей"
            fill
            className="object-contain"
          />
        </div>
        <span className="sr-only">Питомник Пуделей</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/main"
        >
          Главная
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/main/exhibitions"
        >
          Выставки
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/main/puppies"
        >
          Щенки
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/main/our-poodles"
        >
          Наши пудели
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/main/more"
        >
          Дополнительно
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/main/contacts"
        >
          Контакты
        </Link>
      </nav>
    </header>
    // <header className="w-full fixed border-b bg-white dark:bg-black top-0 left-0 right-0 px-4 h-14 z-10">
    //   <div className="grid grid-flow-col md:grid-cols-3 items-center h-full">
    //     <div className="justify-self-start">
    //       <Logo />
    //     </div>
    //     <div className="justify-self-center grid grid-cols-3 place-items-center gap-4">
    //       <Link
    //         className="text-sm font-medium hover:underline underline-offset-4"
    //         href="/shop/products"
    //       >
    //         Магазин
    //       </Link>
    //       <Link
    //         className="text-sm font-medium hover:underline underline-offset-4"
    //         href="/shop/mission"
    //       >
    //         Про Нас
    //       </Link>
    //       <Link
    //         className="text-sm font-medium hover:underline underline-offset-4"
    //         href="/shop/contacts"
    //       >
    //         Контакты
    //       </Link>
    //     </div>
    //     <div className="hidden md:block md:justify-self-end">
    //       <DesktopMenu />
    //     </div>
    //     <div className="self-center justify-self-end md:hidden">
    //       <MobileMenu />
    //     </div>
    //   </div>
    // </header>
  );
}
