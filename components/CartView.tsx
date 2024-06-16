"use client";

import { ChevronDownIcon, MinusIcon, PlusIcon, TrashIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "@/lib/zustand";
import Image from "next/image";

export default function CartView() {
  const cart = useCart();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 max-h-96 overflow-y-scroll">
        {cart.products.length === 0 && <p>Ваша корзина пуста</p>}
        {cart.products.length !== 0 &&
          cart.products.map((p) => (
            <div key={p.variantId} className="flex items-center gap-4">
              <Image
                alt="Product Image"
                className="rounded-md object-cover"
                height={80}
                src={p.image}
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width={80}
              />
              <div className="flex-1 h-full flex flex-col justify-between">
                <h4 className="font-medium">
                  <span className="uppercase bg-gray-100 dark:text-black font-extrabold text-sm px-1 inline-block rounded-sm mr-2">
                    {p.size}
                  </span>
                  {p.name}
                </h4>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button
                      size="icon"
                      type="button"
                      variant="ghost"
                      onClick={() => cart.decreaseQuantity(p.variantId)}
                    >
                      <MinusIcon className="h-4 w-4" />
                    </Button>
                    <span className="w-4 text-center">{p.quantity}</span>
                    <Button
                      size="icon"
                      type="button"
                      variant="ghost"
                      onClick={() => cart.increaseQuantity(p.variantId)}
                    >
                      <PlusIcon className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => cart.removeProduct(p.variantId)}
                    >
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                  </div>
                  <span className="font-medium">₽ {p.price}</span>
                </div>
              </div>
            </div>
          ))}
      </div>
      {cart.products.length !== 0 && (
        <div className="flex flex-col gap-4 border-t pt-4 relative">
          {cart.products.length > 4 && (
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-3">
              <ChevronDownIcon className="h-6 w-6 bg-black dark:bg-white text-white dark:text-black rounded-full pt-0.5" />
            </div>
          )}
          <div className="flex items-center justify-between">
            <span className="text-gray-500 dark:text-gray-400">Всего</span>
            <span className="font-medium">₽ {cart.total()}</span>
          </div>
        </div>
      )}
    </div>
  );
}
