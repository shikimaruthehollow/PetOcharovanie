"use server";

import { ADMIN_ID, contactBot } from "@/lib/grammy";

export default async function sendContacts(data: {
  name: string;
  email: string;
  message: string;
}) {
  await contactBot.api.sendMessage(
    ADMIN_ID,
    `Имя: ${data.name}\nEmail: ${data.email}\nТекст: ${data.message}`
  );
}
