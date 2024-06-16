import { EarthIcon, MapPinnedIcon, RouteIcon } from "lucide-react";
import Image from "next/image";

export default function Section3() {
  return (
    <section className="w-full flex justify-center items-center lg:h-screen">
      <div className="container p-4 lg:p-0 grid gap-4 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-video lg:aspect-square">
          <Image
            src="/mission/section3.jpg"
            alt="Mission"
            className="rounded-xl object-cover"
            fill
          />
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
            Наша Локация
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Где нас найти
          </h2>
          <p className="max-w-xl text-gray-500 md:text-xl dark:text-gray-400">
            Наш магазин находится по адресу: г. Владимир, ул. Тракторная, д. 45,
            ТК &quot;Мегаторг&quot;
          </p>
          <div className="flex gap-4">
            <MapPinnedIcon className="size-8 text-gray-500 dark:text-gray-400" />
            <RouteIcon className="size-8 text-gray-500 dark:text-gray-400" />
            <EarthIcon className="size-8 text-gray-500 dark:text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
