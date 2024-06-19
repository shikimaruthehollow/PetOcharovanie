"use server";

import { ADMIN_ID, reserveBot } from "@/lib/grammy";

export default async function sendReserve(data: {
  name: string;
  country: string;
  city: string;
  phone: string;
  email: string;
  breed: string;
  gender: string;
  color: string;
  class: string;
  message: string;
}) {
  await reserveBot.api.sendMessage(
    ADMIN_ID,
    `Имя: ${data.name}\nСтрана: ${data.country}\nГород: ${data.city}\nТелефон: ${data.phone}\nПочта: ${data.email}\nТип: ${data.breed}\nПол: ${data.gender}\nОкрас: ${data.color}\nКласс: ${data.class}\nСообщение: ${data.message}`
  );
}