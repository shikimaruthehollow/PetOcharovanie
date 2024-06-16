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
                src="/placeholder.svg"
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
                src="/placeholder.svg"
                width={400}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  Национальная выставка пуделей Америки
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  10-12 июня 2023 г. | Нью-Йорк, Нью-Йорк
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <img
                alt="Poodle Show 2"
                className="aspect-[4/3] w-full rounded-t-lg object-cover"
                height={300}
                src="/placeholder.svg"
                width={400}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  Национальная специализированная выставка пуделей Америки
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  15-20 июля 2023 г. | Чикаго, Иллинойс
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <img
                alt="Poodle Show 3"
                className="aspect-[4/3] w-full rounded-t-lg object-cover"
                height={300}
                src="/placeholder.svg"
                width={400}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  Национальная специализированная выставка пуделей Канады
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  1-4 августа 2023 г. | Торонто, Онтарио
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <img
                alt="Poodle Show 4"
                className="aspect-[4/3] w-full rounded-t-lg object-cover"
                height={300}
                src="/placeholder.svg"
                width={400}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  Чемпионатская выставка пуделей Великобритании
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  15-17 сентября 2023 г. | Лондон, Великобритания
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
