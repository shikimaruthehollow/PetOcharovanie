/* eslint-disable react/no-unescaped-entities */
import Header from "@/components/layout/header";
import Link from "next/link";

export default function p1zd4() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container space-y-10 xl:space-y-16 mx-auto">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Груминг и уход за пуделями
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Откройте для себя наши премиальные услуги по грумингу и
                  персонализированный уход за вашим пуделем.
                </p>
              </div>
              <img
                alt="Пудель"
                className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover"
                height={600}
                src="/placeholder.svg"
                width={800}
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Наши услуги
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Груминг и уход за пуделями
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  От полного груминга до специализированных процедур, мы
                  предлагаем широкий спектр услуг, чтобы ваш пудель всегда
                  выглядел и чувствовал себя великолепно.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Полный груминг</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Наш комплексный пакет груминга включает в себя купание,
                  стрижку, подрезку когтей и многое другое.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Купание и расчесывание</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Поддерживайте здоровье и гладкость шерсти вашего пуделя с
                  помощью наших профессиональных услуг по купанию и
                  расчесыванию.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Подрезка когтей</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Наши опытные грумеры аккуратно подрежут когти вашего пуделя,
                  чтобы он чувствовал себя комфортно и здоровым.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Чистка ушей</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Предотвратите ушные инфекции и поддерживайте здоровье ушей
                  вашего пуделя с помощью нашей профессиональной услуги по
                  чистке ушей.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Чистка зубов</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Держите зубы вашего пуделя чистыми и здоровыми с помощью нашей
                  деликатной услуги по чистке зубов.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Специальные стрижки</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Наши опытные грумеры могут создать индивидуальные стрижки,
                  чтобы соответствовать уникальному стилю вашего пуделя.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container space-y-12 px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Галерея
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Портреты пуделей
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Исследуйте нашу коллекцию красивых фотографий пуделей,
                  демонстрирующих элегантность и игривость этих любимых
                  компаньонов.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <img
                alt="Пудель 1"
                className="aspect-square object-cover rounded-lg"
                height={400}
                src="/placeholder.svg"
                width={400}
              />
              <img
                alt="Пудель 2"
                className="aspect-square object-cover rounded-lg"
                height={400}
                src="/placeholder.svg"
                width={400}
              />
              <img
                alt="Пудель 3"
                className="aspect-square object-cover rounded-lg"
                height={400}
                src="/placeholder.svg"
                width={400}
              />
              <img
                alt="Пудель 4"
                className="aspect-square object-cover rounded-lg"
                height={400}
                src="/placeholder.svg"
                width={400}
              />
              <img
                alt="Пудель 5"
                className="aspect-square object-cover rounded-lg"
                height={400}
                src="/placeholder.svg"
                width={400}
              />
              <img
                alt="Пудель 6"
                className="aspect-square object-cover rounded-lg"
                height={400}
                src="/placeholder.svg"
                width={400}
              />
              <img
                alt="Пудель 7"
                className="aspect-square object-cover rounded-lg"
                height={400}
                src="/placeholder.svg"
                width={400}
              />
              <img
                alt="Пудель 8"
                className="aspect-square object-cover rounded-lg"
                height={400}
                src="/placeholder.svg"
                width={400}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
