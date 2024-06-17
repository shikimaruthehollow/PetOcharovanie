import Header from "@/components/layout/header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import React, { use, useState } from 'react';



export default function MainPage() {
 

  return ( 
    <>
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Питомник Пуделей Очарование
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Посвященный разведению и обучению лучших пуделей, помогая
                    владельцам достичь целей своего питомника.
                  </p>
                </div>
              </div>
              <img
                alt="Герой"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                height="550"
                src="/mainfirst.jpg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
          id="kennel-titles"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-4 py-1 text-xl dark:bg-gray-800">
                  Титулы Питомника
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Награды
                </h2>
                <p className="max-w-[900px] mx-auto text-center text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Раскройте весь потенциал вашего пуделя с нашей всеобъемлющей
                  программой титулов питомника. Каждый титул представляет собой
                  веху в развитии вашего пуделя и вашем путешествии как
                  преданного владельца.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col items-center space-y-2">
                  <Image
                    width={600}
                    height={600}
                    alt="Компаньон Пуделя"
                    className="aspect-square overflow-hidden rounded-xl object-cover"
                    src="/rewards/Reward1.png"
                  />
                  <h3 className="text-xl font-bold">Юный Чемпион России</h3>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Image
                    width={600}
                    height={600}
                    alt="Исполнитель Пуделя"
                    className="aspect-square overflow-hidden rounded-xl object-cover"
                    src="/rewards/Reward2.png"
                  />
                  <h3 className="text-xl font-bold">Чемпион НКП</h3>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center space-y-2">
                  <Image
                    width={400}
                    height={400}
                    alt="Терапевтический Пудель"
                    className="aspect-square overflow-hidden rounded-xl object-cover"
                    src="/rewards/Reward3.png"
                  />
                  <h3 className="text-xl font-bold">Чемпион РКФ</h3>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Image
                    width={400}
                    height={400}
                    alt="Чемпион Пуделя"
                    className="aspect-square overflow-hidden rounded-xl object-cover"
                    src="/rewards/Reward4.png"
                  />
                  <h3 className="text-xl font-bold">Гранд Чемпион России</h3>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Image
                    width={400}
                    height={400}
                    alt="Заводчик Пуделя"
                    className="aspect-square overflow-hidden rounded-xl object-cover"
                    src="/rewards/Reward5.png"
                  />
                  <h3 className="text-xl font-bold">Чемпион России</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="about">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                    О Нас
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Посвященные Разведению и Обучению Совершенству
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  В Питомнике Пуделей Очарование мы страстно увлечены
                    породой пуделей и стремимся помочь владельцам и их пуделям
                    раскрыть свой полный потенциал. Наша команда опытных
                    заводчиков и тренеров неустанно работает, чтобы каждый
                    пудель под нашей опекой получал самый высокий уровень ухода
                    и внимания.
                  </p>
                </div>
              </div>
              <img
                alt="О Нас"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/mainsecond.jpg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
          id="contact"
        >
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 mx-auto">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Зарезервировать Пуделя
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Есть вопросы о нашем питомнике или доступных титулах? Заполните
                форму ниже, и наша команда свяжется с вами.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col space-y-2">
                <Input 
                  name="name"                                   
                  className="max-w-lg p-2 border border-gray-300 rounded-md" 
                  placeholder="ФИО" 
                  type="text" 
                />
                <Input 
                  name="country"                  
                  className="max-w-lg p-2 border border-gray-300 rounded-md" 
                  placeholder="Страна" 
                  type="text" 
                />
                <Input 
                  name="city"                                  
                  className="max-w-lg p-2 border border-gray-300 rounded-md" 
                  placeholder="Город" 
                  type="text" 
                />
                <Input 
                  name="phone"                                    
                  className="max-w-lg p-2 border border-gray-300 rounded-md" 
                  placeholder="Номер телефона" 
                  type="tel" 
                />
                <Input 
                  name="email"              
                  className="max-w-lg p-2 border border-gray-300 rounded-md" 
                  placeholder="Почта" 
                  type="email" 
                />
                <div className="max-w-lg p-2 border border-gray-300 rounded-md">
                  <select 
                    name="breedType"
                    className="w-full outline-none border-gray-300"
                  >
                    <option value="Мини">Тип породы</option>
                    <option value="Средний">Той</option>
                    <option value="Большой">Мини</option>
                  </select>
                </div>
                <div className="max-w-lg p-2 border border-gray-300 rounded-md">
                  <select 
                    name="gender"
                    className="w-full outline-none"
                  >
                    <option value="">Выберите пол</option>
                    <option value="Кобель">Кобель</option>
                    <option value="Сука">Сука</option>
                  </select>
                </div>
                <div className="max-w-lg p-2 border border-gray-300 rounded-md">
                  <select 
                    name="color"
                    className="w-full outline-none"
                  >
                    <option value="">Выберите окрас</option>
                    <option value="Коричневый">Коричневый</option>
                    <option value="Черный">Черный</option>
                    <option value="Красный">Красный</option>
                  </select>
                </div>
                <div className="max-w-lg p-2 border border-gray-300 rounded-md">
                  <select 
                    name="classType"
                    className="w-full outline-none"
                  >
                    <option value="">Выберите класс</option>
                    <option value="Шоу">Шоу</option>
                    <option value="Брид">Брид</option>
                    <option value="Пет">Пет</option>
                  </select>
                </div>
                <Textarea 
                  name="message"
                  className="max-w-lg p-2 border border-gray-300 rounded-md" 
                  placeholder="Сообщение" 
                />
                <Button type="submit" className="p-2 bg-blue-500 text-white rounded-md">
                  Отправить
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
     <Footer/>
  </>
  );
}