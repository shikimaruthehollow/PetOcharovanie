import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <section className="w-full p-4 bg-gray-100 dark:bg-gray-800 lg:h-screen lg:grid lg:grid-flow-row lg:place-content-center">
      <div className="max-w-6xl space-y-4 lg:space-y-12">
        <div className="space-y-2 flex flex-col items-center text-center">
          <Badge>Будьте Лучше</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Одежда для стильных и уверенных
          </h2>
          <p className="max-w-5xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Хотите выглядеть модно и стильно каждый день? Погрузитесь в мир моды
            вместе с NewYorker и доверьтесь профессионализму и качеству
            проверенных брендов. Посетите наш магазин прямо сейчас и обновите
            свой гардероб с уникальными находками!
          </p>
        </div>
        <div className="space-y-4 max-w-5xl lg:space-y-0 lg:grid lg:grid-flow-col lg:gap-12">
          <div className="space-y-1">
            <h3 className="text-lg font-bold">FB Sister</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Fishbone Sister для законодателей моды и энтузиастов моды.
              Погрузитесь в мир цветов, узоров и стилей, где мода 2000-х
              встречается с современными тенденциями, а уличная одежда — с
              ностальгией по 2000-м годам.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold">AMISU</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Откройте для себя свою индивидуальную элегантность с AMISU! С
              AMISU вы не просто идете в ногу с модой, вы задаете тенденции.
              Откройте для себя свою элегантность - откройте для себя AMISU.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold">SMOG</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Добро пожаловать в модный мир SMOG, где стиль и беззаботность идут
              рука об руку. В SMOG вы найдете все необходимое, чтобы подчеркнуть
              свой личный стиль и уверенно представить себя в любой ситуации. Не
              просто будьте в тренде, задайте его - с SMOG.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
