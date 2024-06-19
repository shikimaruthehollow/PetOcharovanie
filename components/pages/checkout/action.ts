"use server";

import { ADMIN_ID, reserveBot,} from "@/lib/grammy";
import { createClient } from "@/lib/supabase/server";
import { Product } from "@/lib/zustand";
import { headers } from "next/headers";

export default async function createOrder(data: {
  firstname: string;
  lastname: string;
  email: string;
  address?: string;
  pickup: boolean;
  products: Product[];
  total: number;
}) {
  const headersList = headers();
  const hostname = headersList.get("host");
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  await reserveBot.api.sendMessage(
    ADMIN_ID,
    `Имя: ${data.firstname}
Фамилия: ${data.lastname}
Email: ${data.email}
Адрес: ${data.address}
Самовывоз: ${data.pickup}
Товары:
${data.products
  .map(
    (p) =>
      `• [${p.name}](https://${hostname}/shop/products/${p.variantId}) - ${p.price}₽ - x${p.quantity}`
  )
  .join("\n")}
Сумма: ${data.total} ₽`,
    { parse_mode: "Markdown" }
  );

  if (user) {
    const order = await supabase
      .from("orders")
      .insert({ address: data.address || "Самовывоз", user: user.id })
      .select();

    await supabase.from("variants_orders").insert(
      data.products.map((p) => ({
        variant: p.variantId,
        order: order.data![0].id,
        count: p.quantity,
      }))
    );
  }

  return true;
}
