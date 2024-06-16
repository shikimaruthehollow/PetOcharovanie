import {
  AudioWaveformIcon,
  ClockIcon,
  GraduationCapIcon,
  MessageCircleHeartIcon,
  PaletteIcon,
  Repeat1Icon,
} from "lucide-react";

export default function Section2() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 w-full p-4 lg:h-[50vh] flex flex-col justify-center items-center gap-4 lg:gap-24">
      <div className="container">
        <div className="grid gap-8 md:gap-16 md:grid-cols-2">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">
              Уникальный Момент
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-5xl/none">
              Dress for the moment
            </h2>
            <p className="max-w-xl text-gray-500 md:text-lg/snug dark:text-gray-400">
              NEW YORKER создает моду для настоящего момента. Каждый момент
              жизни - уникален. Так же, как и каждый образ. Мы приглашаем
              покупателя в настоящее приключение и помогаем ему быть самим
              собой. Быть настоящим, разрешать себе эксперименты. Мы создаем
              моду для реальных моментов.
            </p>
            <div className="flex gap-4">
              <MessageCircleHeartIcon className="size-8 text-gray-500 dark:text-gray-400" />
              <ClockIcon className="size-8 text-gray-500 dark:text-gray-400" />
              <Repeat1Icon className="size-8 text-gray-500 dark:text-gray-400" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">
              Корпоративная Культура
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-5xl/none">
              Больше, чем мода!
            </h2>
            <p className="max-w-xl text-gray-500 md:text-lg/snug dark:text-gray-400">
              Мы создаем моду для молодых и тех, кто хочет оставаться молодым. И
              мы никогда не упускаем из внимания наших покупателей. Участие в
              социальных, спортивных, культурных проектах является частью нашей
              корпоративной культуры. Таким образом NEW YORKER поддерживает
              молодых и социально незащищенных людей стипендиями,
              пожертвованиями, выплатами в таких сферах, как музыка, спорт,
              культура и образование.
            </p>
            <div className="flex gap-4">
              <PaletteIcon className="size-8 text-gray-500 dark:text-gray-400" />
              <GraduationCapIcon className="size-8 text-gray-500 dark:text-gray-400" />
              <AudioWaveformIcon className="size-8 text-gray-500 dark:text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
