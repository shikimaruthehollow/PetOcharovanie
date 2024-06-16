import Header from "@/components/layout/header";

export default function poodles() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Наши Пудели</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              alt="Щенок Пуделя 1"
              className="w-full h-64 object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Очарование Строук Оф Лак</h2>
              <p className="text-gray-600 mb-4">Кобель</p>
              <div className="bg-gray-100 p-2 rounded-md">
                <p className="text-sm font-medium mb-1">Родословная</p>
                <p className="text-gray-600 text-sm">
                  Отец: OCHAROVANIE YUKI SUN DANSE
                  <br />
                  Мать: SCHOKOLADNOE DIVO ETNA OCHAROVANIE
                </p>
                <p className="text-sm font-medium mb-1 mt-2">Дата Рождения</p>
                <p className="text-gray-600 text-sm">02.02.2021</p>
                <p className="text-sm font-medium mb-1 mt-2">Окрас</p>
                <p className="text-gray-600 text-sm">Коричневый</p>
                <p className="text-sm font-medium mb-1 mt-2">Тип</p>
                <p className="text-gray-600 text-sm">Мини</p>
                <p className="text-sm font-medium mb-1 mt-2">Титулы</p>
                <p className="text-gray-600 text-sm">Чемпион России, Чемпион РКФ, Юный Чемпион России</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              alt="Щенок Пуделя 2"
              className="w-full h-64 object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Очарование Харлей Делюкс</h2>
              <p className="text-gray-600 mb-4">Кобель</p>
              <div className="bg-gray-100 p-2 rounded-md">
                <p className="text-sm font-medium mb-1">Родословная</p>
                <p className="text-gray-600 text-sm">
                  Отец: LUCKY STRIKE BARTLOS ANMUT
                  <br />
                  Мать: BLY AIS ZVEZDA UDACHI
                </p>
                <p className="text-sm font-medium mb-1 mt-2">Дата Рождения</p>
                <p className="text-gray-600 text-sm">11.08.2021</p>
                <p className="text-sm font-medium mb-1 mt-2">Окрас</p>
                <p className="text-gray-600 text-sm">Красный</p>
                <p className="text-sm font-medium mb-1 mt-2">Тип</p>
                <p className="text-gray-600 text-sm">Мини</p>
                <p className="text-sm font-medium mb-1 mt-2">Титулы</p>
                <p className="text-gray-600 text-sm">Юный Чемпион, Чемпион России, Чемпион РКФ</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              alt="Щенок Пуделя 3"
              className="w-full h-64 object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Очарование Грейс Аглая</h2>
              <p className="text-gray-600 mb-4">Сука</p>
              <div className="bg-gray-100 p-2 rounded-md">
                <p className="text-sm font-medium mb-1">Родословная</p>
                <p className="text-gray-600 text-sm">
                  Отец: FAERY DANCE SOVEREIGN
                  <br />
                  Мать: OCHARJVANIE YUGRA YANTARNAYA ISKORKA
                </p>
                <p className="text-sm font-medium mb-1 mt-2">Дата Рождения</p>
                <p className="text-gray-600 text-sm">11.09.19</p>
                <p className="text-sm font-medium mb-1 mt-2">Окрас</p>
                <p className="text-gray-600 text-sm">Красный</p>
                <p className="text-sm font-medium mb-1 mt-2">Тип</p>
                <p className="text-gray-600 text-sm">Мини</p>
                <p className="text-sm font-medium mb-1 mt-2">Титулы</p>
                <p className="text-gray-600 text-sm">Чемпион РКФ</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              alt="Щенок Пуделя 1"
              className="w-full h-64 object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Очарование Берардо</h2>
              <p className="text-gray-600 mb-4">Кобель</p>
              <div className="bg-gray-100 p-2 rounded-md">
                <p className="text-sm font-medium mb-1">Родословная</p>
                <p className="text-gray-600 text-sm">
                  Отец: OCHAROVANIE TRIUMPH OF THE WINNER
                  <br />
                  Мать: BRIANA BASKONI IZ TROITSKOGO PREDMESTIA
                </p>
                <p className="text-sm font-medium mb-1 mt-2">Дата Рождения</p>
                <p className="text-gray-600 text-sm">21.06.2019</p>
                <p className="text-sm font-medium mb-1 mt-2">Окрас</p>
                <p className="text-gray-600 text-sm">Черный</p>
                <p className="text-sm font-medium mb-1 mt-2">Тип</p>
                <p className="text-gray-600 text-sm">Той</p>
                <p className="text-sm font-medium mb-1 mt-2">Титулы</p>
                <p className="text-gray-600 text-sm">Чемпион России, Чемпион РКФ</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              alt="Щенок Пуделя 1"
              className="w-full h-64 object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Очарование Хамана Ред Лайт</h2>
              <p className="text-gray-600 mb-4">Сука</p>
              <div className="bg-gray-100 p-2 rounded-md">
                <p className="text-sm font-medium mb-1">Родословная</p>
                <p className="text-gray-600 text-sm">
                  Отец: LUCKY STRIKE BARTLOS ANMUT
                  <br />
                  Мать: BLY AIS ZVEZDA UDACHI
                </p>
                <p className="text-sm font-medium mb-1 mt-2">Дата Рождения</p>
                <p className="text-gray-600 text-sm">16.04.2017</p>
                <p className="text-sm font-medium mb-1 mt-2">Окрас</p>
                <p className="text-gray-600 text-sm">Красный</p>
                <p className="text-sm font-medium mb-1 mt-2">Тип</p>
                <p className="text-gray-600 text-sm">Мини</p>
                <p className="text-sm font-medium mb-1 mt-2">Титулы</p>
                <p className="text-gray-600 text-sm">Чемпион РКФ, Юный Чемпион России</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              alt="Щенок Пуделя 1"
              className="w-full h-64 object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Очарование Фелиз Эстрелла</h2>
              <p className="text-gray-600 mb-4">Сука</p>
              <div className="bg-gray-100 p-2 rounded-md">
                <p className="text-sm font-medium mb-1">Родословная</p>
                <p className="text-gray-600 text-sm">
                  Отец: OCHAROVANIE YU SHOKKO BOSS
                  <br />
                  Мать: SCHOKOLADNOE DIVO ETNA OCHAROVANIE.
                </p>
                <p className="text-sm font-medium mb-1 mt-2">Дата Рождения</p>
                <p className="text-gray-600 text-sm">10.08.2021</p>
                <p className="text-sm font-medium mb-1 mt-2">Окрас</p>
                <p className="text-gray-600 text-sm">Коричневый</p>
                <p className="text-sm font-medium mb-1 mt-2">Тип</p>
                <p className="text-gray-600 text-sm">Той</p>
                <p className="text-sm font-medium mb-1 mt-2">Титулы</p>
                <p className="text-gray-600 text-sm">Юный Чемпион России</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
