import { toast } from "sonner";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Product {
  variantId: string;
  baseId: string;
  name: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
  maxQuantity: number;
}

interface State {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (variantId: string) => void;
  clear: () => void;
  total: () => number;
  decreaseQuantity: (variantId: string) => void;
  increaseQuantity: (variantId: string) => void;
}

export const useCart = create<State>()(
  persist(
    (set, get) => ({
      products: [],
      addProduct: (product: Product) =>
        set((state) => {
          const existing = state.products.find(
            (p) => p.variantId === product.variantId
          );

          if (
            existing &&
            existing.quantity + product.quantity > product.maxQuantity
          ) {
            toast.error("Нельзя добавить больше чем есть на складе", {
              description: `В корзине: x${existing.quantity}. Доступно: x${product.maxQuantity}`,
            });
            return state;
          }

          toast.success("Товар добавлен в корзину", {
            description: `${product.name} x${product.quantity}`,
          });

          return existing
            ? {
                products: state.products.map((p) =>
                  p.variantId === product.variantId
                    ? { ...p, quantity: p.quantity + product.quantity }
                    : p
                ),
              }
            : { products: [...state.products, product] };
        }),
      removeProduct: (variantId: string) =>
        set((state) => {
          const product = state.products.find((p) => p.variantId === variantId);
          if (!product) return state;
          toast.info("Товар удален из корзины", {
            description: `${product.name} x${product.quantity}`,
          });
          return {
            products: state.products.filter((p) => p.variantId !== variantId),
          };
        }),
      clear: () => set({ products: [] }),
      total: () => get().products.reduce((a, b) => b.price * b.quantity + a, 0),
      decreaseQuantity: (variantId: string) =>
        set((state) => {
          const product = state.products.find((p) => p.variantId === variantId);
          if (!product) return state;
          const newCount = Math.max(product.quantity - 1, 1);
          return {
            products: state.products.map((p) =>
              p.variantId === variantId ? { ...p, quantity: newCount } : p
            ),
          };
        }),
      increaseQuantity: (variantId: string) =>
        set((state) => {
          const product = state.products.find((p) => p.variantId === variantId);
          if (!product) return state;
          if (product.quantity + 1 > product.maxQuantity) return state;
          const newCount = product.quantity + 1;
          console.log(
            state.products.map((p) =>
              p.variantId === variantId ? { ...p, quantity: newCount } : p
            )
          );
          return {
            products: state.products.map((p) =>
              p.variantId === variantId ? { ...p, quantity: newCount } : p
            ),
          };
        }),
    }),
    { name: "cart-storage" }
  )
);
