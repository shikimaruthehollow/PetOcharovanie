"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ArrowUpDownIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { uniqBy, maxBy, inRange } from "lodash";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useDebounce } from "@uidotdev/usehooks";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Link from "next/link";

export default function Products({ data }: { data: any[] }) {
  const categories = uniqBy(data, "category").map((p) => p.category);
  const maxPrice = maxBy(data, (p) => p.variants[0].price).variants[0].price;

  const [category, setCategory] = useState("");
  const [price_, setPrice] = useState([0, maxPrice]);
  const [sex, setSex] = useState("");
  const [sortFunc, setSortFunc] = useState("featured");
  const price = useDebounce(price_, 300);

  const sortFuncs: { [key: string]: (a: any, b: any) => number } = {
    featured: (a: any, b: any) => 0,
    newest: (a: any, b: any) => b.id - a.id,
    "price-asc": (a: any, b: any) => a.variants[0].price - b.variants[0].price,
    "price-desc": (a: any, b: any) => b.variants[0].price - a.variants[0].price,
  };

  const filteredData = data
    .filter((p) => {
      return (
        (category === "" || p.category === category) &&
        (sex === "" || p.sex === sex) &&
        inRange(p.variants[0].price, price[0], price[1] + 1)
      );
    })
    .sort(sortFuncs[sortFunc]);

  return (
    <div className="relative md:py-14">
      <div className="p-4 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Категории</h3>
            <RadioGroup
              className="flex flex-col gap-4"
              value={category}
              onValueChange={setCategory}
            >
              {categories.map((c) => (
                <div key={c} className="flex items-center space-x-2">
                  <RadioGroupItem value={c} id={c} />
                  <Label htmlFor={c} className="capitalize">
                    {c}
                  </Label>
                </div>
              ))}
              <Button onClick={() => setCategory("")}>Очистить</Button>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Ценовой Диапазон</h3>
            <Slider
              className="w-full"
              minStepsBetweenThumbs={10}
              defaultValue={[0, maxPrice]}
              value={price_}
              onValueChange={setPrice}
              min={0}
              max={maxPrice}
              step={10}
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>₽ {price[0]}</span>
              <span>₽ {price[1]}</span>
            </div>
            <Button className="w-full" onClick={() => setPrice([0, maxPrice])}>
              Очистить
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Пол</h3>
            <ToggleGroup
              type="single"
              onValueChange={setSex}
              value={sex}
              className="grid grid-cols-2 gap-2"
            >
              <ToggleGroupItem value="M" aria-label="Toggle M">
                Мужчины
              </ToggleGroupItem>
              <ToggleGroupItem value="F" aria-label="Toggle F">
                Женщины
              </ToggleGroupItem>
            </ToggleGroup>
            <Button className="w-full" onClick={() => setSex("")}>
              Очистить
            </Button>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Все Товары</h2>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="flex items-center gap-1"
                  size="sm"
                  variant="outline"
                >
                  <ArrowUpDownIcon className="w-4 h-4" />
                  Сортировать
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-72">
                <DropdownMenuRadioGroup
                  value={sortFunc}
                  onValueChange={setSortFunc}
                >
                  <DropdownMenuRadioItem value="featured">
                    Популярные
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="newest">
                    Новые
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="price-asc">
                    Цена: от Низкой до Высокой
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="price-desc">
                    Цена: от Высокой к Низкой
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredData.length === 0 && <p>Товары не найдены</p>}
            {filteredData.map((product) => (
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
                  <h3 className="text-sm font-bold capitalize">
                    {product.name}
                  </h3>
                  <div className="mt-4 flex justify-between items-center">
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
        </div>
      </div>
    </div>
  );
}
