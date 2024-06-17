import Header from "@/components/layout/header";
import Link from "next/link";

export default function page() {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-[100dvh]">
        <section className="w-full pt-12 md:pt-20">
          <div className="container space-y-10 xl:space-y-16 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <img
                alt="Poodles"
                className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
                height={600}
                src="/objvistavki.jpeg"
                width={1200}
              />
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Предстоящие выставки пуделей
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Откройте для себя лучшие предстоящие выставки пуделей и
                  спланируйте свой визит, чтобы увидеть этих величественных
                  собак в действии.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 md:px-6 mx-auto">
            <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <img
                alt="Poodle Show 1"
                className="aspect-[4/3] w-full rounded-t-lg object-cover"
                height={300}
                src="/vistavka1.jpg"
                width={400}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                Подольск: Выставки собак ранга ЧФ,ЧРКФ,САС 2024г.
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                23 июня 2024 г. | Подольск
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <img
                alt="Poodle Show 2"
                className="aspect-[4/3] w-full rounded-t-lg object-cover"
                height={300}
                src="/vistavka2.jpg"
                width={400}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                Усолье-Сибирское: Выставки собак ранга ЧФ,ЧРКФ,САС 2024г.
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                30 июня 2024 г. | Усолье-Сибирское
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <img
                alt="Poodle Show 3"
                className="aspect-[4/3] w-full rounded-t-lg object-cover"
                height={300}
                src="/vistavka3.jpg"
                width={400}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                Москва: Выставки собак ранга ЧФ,ЧРКФ,САС 2024г.
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                14 июля 2024 г. | Москва
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <img
                alt="Poodle Show 4"
                className="aspect-[4/3] w-full rounded-t-lg object-cover"
                height={300}
                src="/vistavka4.jpg"
                width={400}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                Санкт-Петербург: Выставки собак ранга ЧФ,ЧРКФ,САС 2024г.
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                20 - 21 июля 2024 г. | Санкт-Петербург
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
