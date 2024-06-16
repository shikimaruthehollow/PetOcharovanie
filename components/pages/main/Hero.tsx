import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { createClient } from "@/lib/supabase/server";
import Image from "next/image";
import Link from "next/link";

export default async function Hero() {
  const supabase = createClient();

  const res = await supabase
    .from("products")
    .select("id, images")
    .in("id", [1, 6, 10, 16, 26]);

  return (
    <section className="w-full flex justify-center items-center lg:h-screen">
      <div className="container p-4 lg:p-0 grid gap-4 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-video lg:aspect-square">
          <Image
            src="/main/hero.jpg"
            alt="New Yorker Products"
            className="rounded-xl object-cover"
            fill
          />
        </div>
        <div className="flex flex-col justify-between gap-4">
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Будьте смелыми, будьте собой
            </h2>
            <p className="max-w-xl text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Наши коллекции отражают инновации и осведомленность о тенденциях,
              подчеркивая вашу уникальность и выделяя вас из толпы. Откройте для
              себя разнообразие наших коллекций и найдите именно то, что
              идеально отражает вашу индивидуальность.
            </p>
            <div className="flex gap-4">
              <Link href="/shop/products">
                <Button>Купить Сейчас</Button>
              </Link>
              <Link href="/shop/mission">
                <Button>Узнать Больше</Button>
              </Link>
            </div>
          </div>
          <div>
            <Carousel opts={{ loop: true }}>
              <CarouselContent className="h-48 md:h-auto">
                {res.data!.map((product) => (
                  <CarouselItem
                    key={`wasd-${product.id}`}
                    className="basis-full md:basis-1/3"
                  >
                    <Link
                      href={`/shop/products/${product.id}`}
                      className="block relative h-48 cursor-pointer"
                    >
                      <Image
                        src={product.images[0]}
                        alt="Product"
                        className="object-contain rounded-lg"
                        fill
                      />
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4 md:-left-12" />
              <CarouselNext className="-right-4 md:-right-12" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
