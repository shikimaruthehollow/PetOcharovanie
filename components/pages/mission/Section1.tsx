import { Building2Icon, GlobeIcon, TruckIcon } from "lucide-react";
import Image from "next/image";

export default function Section1() {
  return (
    <section className="w-full flex justify-center items-center lg:h-screen">
      <div className="container p-4 lg:p-0 grid gap-4 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start gap-4">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
            Корпоративная Этика
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            О Нас
          </h1>
          <p className="max-w-xl text-gray-500 md:text-xl dark:text-gray-400">
            Более 1200 филиалов в 48 странах, более 23000 сотрудников, NEW
            YORKER - один из крупнейших международных брендов одежды.
            Управляемая из центрального офиса в Брауншвайге (Германия) компания
            NEW YORKER имеет гибкую иерархию семейного бизнеса и международный
            статус крупного концерна.
          </p>
          <div className="flex gap-4">
            <Building2Icon className="size-8 text-gray-500 dark:text-gray-400" />
            <GlobeIcon className="size-8 text-gray-500 dark:text-gray-400" />
            <TruckIcon className="size-8 text-gray-500 dark:text-gray-400" />
          </div>
        </div>
        <div className="relative aspect-video lg:aspect-square">
          <Image
            src="/mission/section1.jpg"
            alt="New Yorker Mission"
            className="rounded-xl object-cover"
            fill
          />
        </div>
      </div>
    </section>
  );
}
