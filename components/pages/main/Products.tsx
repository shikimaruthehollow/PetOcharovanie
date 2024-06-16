"use server";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
import Image from "next/image";
import Link from "next/link";

export default async function Products() {
  const supabase = createClient();

  const res = await supabase.from("products").select("*, variants(*)").limit(4);

  return (
    <section className="w-full my-4 px-4 container lg:mx-auto lg:my-0 lg:h-screen lg:flex lg:flex-col lg:justify-center lg:items-center space-y-4 lg:space-y-12">
      <div className="flex flex-col items-center text-center space-y-2">
        <Badge>Лучшие Товары</Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Пора осуществлять свои модные мечты вместе с NewYoker!
        </h2>
        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Обнови свой гардероб с лучшей модной одеждой от NewYorker. Новые
          коллекции, стильные тренды и неповторимый стиль ждут тебя на полках.
          Погрузись в мир моды и подчеркни свою индивидуальность с нами!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {res.data!.map((product) => (
          <div
            key={`product-${product.id}`}
            className="bg-white rounded-lg shadow-sm dark:bg-gray-950"
          >
            <div className="relative h-48">
              <Image
                src={product.images[0]}
                alt="Product"
                className="object-contain rounded-t-lg"
                fill
              />
            </div>
            <div className="p-4 h-32 flex flex-col justify-between">
              <h3 className="text-sm font-bold">{product.name}</h3>
              <div className=" flex justify-between items-center">
                <span className="text-[#4CAF50] font-bold">
                  ₽ {product.variants[0].price}
                </span>
                <Link href={`/shop/products/${product.id}`}>
                  <Button size="sm">Подробнее</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
