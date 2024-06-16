/* eslint-disable react/no-unescaped-entities */
import Header from "@/components/layout/header";
import Link from "next/link";
import Image from "next/image";

export default function puppies() {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-[100dvh]">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px] mx-auto">
            <img
              alt="Пудель-щенок"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              height="650"
              src="/placeholder.svg"
              width="650"
            />
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Условия продажи щенков
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Мы продаем щенков исключительно на своих условиях. Цены на щенков мы устанавливаем сами. Мы не продаем щенков дешевле тех денег, которые были в них вложены. Мы любим и ценим своих собак, мы ценим свой труд и труд своих сук, мамочек щенков, которые должны восстановиться после рождения и кормления щенков.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold mb-8 text-center" >
              Щенки
          </h2>
          <div className="container px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
            <div className="flex flex-col items-center text-center space-y-4">
              <img
                alt="Щенок пуделя 1"
                className="aspect-square overflow-hidden rounded-xl object-cover"
                height="300"
                src="/placeholder.svg"
                width="300"
              />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Очарование Плюшка в Шоколаде</h3>
                <p className="text-sm font-medium mb-1 mt-2">Дата Рождения</p>
                <p className="text-gray-600 text-sm">09.12.23</p>
                <p className="text-gray-500 dark:text-gray-400">
                Тип - Той, Окрас - Коричневый, Пол - Сука.</p>
                <p className="text-sm font-medium mb-1 mt-2">Свободна для продажи.</p> 
              </div>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <img
                alt="Щенок пуделя 2"
                className="aspect-square overflow-hidden rounded-xl object-cover"
                height="300"
                src="/placeholder.svg"
                width="300"
              />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Очарование Пружинка</h3>
                <p className="text-sm font-medium mb-1 mt-2">Дата Рождения</p>
                <p className="text-gray-600 text-sm">09.12.23</p>
                <p className="text-gray-500 dark:text-gray-400">
                Тип - Той, Окрас - Коричневый, Пол - Сука.</p>
                <p className="text-sm font-medium mb-1 mt-2">Свободна для продажи.</p> 
              </div>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <img
                alt="Щенок пуделя 3"
                className="aspect-square overflow-hidden rounded-xl object-cover"
                height="300"
                src="/placeholder.svg"
                width="300"
              />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Очарование Орабелла</h3>
                  <p className="text-sm font-medium mb-1 mt-2">Дата Рождения</p>
                  <p className="text-gray-600 text-sm">21.11.23</p>
                  <p className="text-gray-500 dark:text-gray-400">Тип - Той, Окрас - Коричневый, Пол - Сука.</p>
                  <p className="text-sm font-medium mb-1 mt-2">Свободна для продажи.</p> 
              </div>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <img 
              alt="Щенок пуделя 4"
              className="aspect-square overflow-hidden rounded-xl object-cover"
              height="300"
              src="/placeholder.svg"
              width="300" 
              />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Очарование Космея</h3>
                <p className="text-sm font-medium mb-1 mt-2">Возраст</p>
                <p className="text-gray-600 text-sm">4,5 месяца</p>
                <p className="text-gray-500 dark:text-gray-400">Тип - той, Окрас - Черный, Пол - Сука.</p>
                <p className="text-sm font-medium mb-1 mt-2">Продана.</p>          
              </div>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <img 
              alt="Щенок пуделя 4"
              className="aspect-square overflow-hidden rounded-xl object-cover"
              height="300"
              src="/placeholder.svg"
              width="300" 
              />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Очарование Масаммора Парада</h3>
                <p className="text-sm font-medium mb-1 mt-2">Дата Рождения</p>
                <p className="text-gray-600 text-sm">07.08.23</p>
                <p className="text-gray-500 dark:text-gray-400">Тип - Мини, Окрас - Коричневый, Пол - Сука.</p>
                <p className="text-sm font-medium mb-1 mt-2">Продана.</p>             
              </div>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <img 
              alt="Щенок пуделя 4"
              className="aspect-square overflow-hidden rounded-xl object-cover"
              height="300"
              src="/placeholder.svg"
              width="300" 
              />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Очарование Мадлен Нюанс</h3>
                <p className="text-sm font-medium mb-1 mt-2">Дата Рождения</p>
                <p className="text-gray-600 text-sm">07.08.23</p>
                <p className="text-gray-500 dark:text-gray-400">Тип - Мини, Окрас - Коричневый, Пол - Сука.</p>
                <p className="text-sm font-medium mb-1 mt-2">Продана.</p>              
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
