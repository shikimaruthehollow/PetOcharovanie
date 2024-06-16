"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/lib/zustand";
import { MinusIcon, PlusIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

const sizes = ["xs", "s", "m", "l", "xl"];

export default function Product({ product }: { product: any }) {
  const cart = useCart();
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(product.variants[0].size.toLowerCase());
  const availableSizes = product.variants.map((p: any) => p.size.toLowerCase());
  const variant = product.variants.find(
    (v: any) => v.size.toLowerCase() === size
  );

  return (
    <div className="h-screen py-14">
      <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6 h-full">
        <div className="grid gap-4 relative h-full">
          <Image
            src={product.images[0]}
            alt="Product Image"
            className="aspect-[2/3] object-contain border border-gray-200 rounded-lg overflow-hidden dark:border-gray-800"
            fill
          />
        </div>
        <div className="grid gap-4 md:gap-10 items-start">
          <div className="grid gap-4">
            <h1 className="font-bold text-3xl lg:text-4xl capitalize">
              {product.name}
            </h1>
            <div className="flex items-center gap-4">
              <div className="text-4xl font-bold">₽ {variant.price}</div>
            </div>
          </div>
          <form className="grid gap-4 md:gap-10">
            <div className="grid gap-2">
              <Label htmlFor="size" className="text-base">
                Розмер
              </Label>
              <RadioGroup
                id="size"
                value={size}
                onValueChange={setSize}
                className="flex items-center gap-2"
              >
                {sizes.map((size) => (
                  <Label
                    key={size}
                    htmlFor={size}
                    aria-disabled={!availableSizes.includes(size)}
                    className="uppercase border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
                  >
                    <RadioGroupItem
                      id={size}
                      value={size}
                      disabled={!availableSizes.includes(size)}
                    />
                    {size}
                  </Label>
                ))}
              </RadioGroup>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="quantity" className="text-base">
                Кол-во
              </Label>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  type="button"
                  onClick={() => setQuantity(Math.max(quantity - 1, 1))}
                >
                  <MinusIcon className="w-4 h-4" />
                  <span className="sr-only">Decrease quantity</span>
                </Button>
                <div className="text-base font-medium w-4 text-center">
                  {quantity}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  type="button"
                  onClick={() =>
                    setQuantity(Math.min(variant.count, quantity + 1))
                  }
                >
                  <PlusIcon className="w-4 h-4" />
                  <span className="sr-only">Increase quantity</span>
                </Button>
              </div>
            </div>
            <Button
              size="lg"
              type="button"
              onClick={() =>
                cart.addProduct({
                  baseId: product.id,
                  quantity,
                  size,
                  variantId: variant.id,
                  image: product.images[0],
                  name: product.name,
                  price: variant.price,
                  maxQuantity: variant.count,
                })
              }
            >
              Добавить в Корзину
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
