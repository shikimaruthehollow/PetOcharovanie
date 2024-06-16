"use client";

import CartView from "@/components/CartView";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/zustand";
import Link from "next/link";

export default function Cart() {
  const totalQuantity = useCart((s) => s.products.length);
  const cart = useCart();

  return (
    <div className="w-96">
      {totalQuantity === 0 ? (
        <div className="p-4 space-y-4">
          <h3 className="text-lg font-semibold">Ваша Корзина Пустая!</h3>
          <Link href="/shop/products" className="block">
            <Button className="w-full">
              <span>Закупиться!</span>
            </Button>
          </Link>
        </div>
      ) : (
        <div className="p-4 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Ваша Корзина</h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {totalQuantity}{" "}
              {(function () {
                switch (totalQuantity) {
                  case 1:
                    return "товар";
                  case 2:
                  case 3:
                  case 4:
                    return "товара";
                  default:
                    return "товаров";
                }
              })()}
            </span>
          </div>
          <CartView />
          {cart.products.length !== 0 && (
            <Link href="/checkout">
              <Button className="w-full" size="lg">
                Перейти к Оформлению Заказа
              </Button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
