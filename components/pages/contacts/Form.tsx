"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form as UIForm,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import sendContacts from "./action";

const formSchema = z.object({
  name: z
    .string({ message: "Обязательное поле" })
    .min(1, { message: "Обязательное поле" }),
  email: z
    .string({ message: "Обязательное поле" })
    .email({ message: "Неверная почта" })
    .min(1, { message: "Обязательное поле" }),
  message: z
    .string({ message: "Обязательное поле" })
    .min(1, { message: "Обязательное поле" }),
});

export default function Form() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => sendContacts(values);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Отправьте Нам Сообщение</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Заполните форму ниже, и мы свяжемся с вами.
        </p>
      </div>
      <UIForm {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Имя</FormLabel>
                  <FormControl>
                    <Input placeholder="Введите ваше имя" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Эл. Почта</FormLabel>
                  <FormControl>
                    <Input placeholder="Введите адрес эл. почты" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Сообщение</FormLabel>
                  <FormControl>
                    <Textarea
                      className="min-h-[120px]"
                      placeholder="Введите ваше сообщение"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button className="w-full" type="submit">
            Отправить
          </Button>
        </form>
      </UIForm>
    </div>
  );
}
