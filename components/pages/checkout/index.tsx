"use client";

import ThemeSwitch from "@/components/ThemeSwitch";
import Logo from "@/components/icons/Logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { z } from "zod";
import {
  Form as UIForm,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { createClient } from "@/lib/supabase/client";
import { useCart } from "@/lib/zustand";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import createOrder from "./action";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { headers } from "next/headers";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const formSchema = z
  .object({
    firstname: z
      .string({ message: "Обязательное поле" })
      .min(1, { message: "Обязательное поле" }),
    lastname: z
      .string({ message: "Обязательное поле" })
      .min(1, { message: "Обязательное поле" }),
    email: z
      .string({ message: "Обязательное поле" })
      .email({ message: "Неверная почта" })
      .min(1, { message: "Обязательное поле" }),
    address: z.string().optional(),
    pickup: z.boolean().default(false),
  })
  .superRefine((val, ctx) => {
    if (!val.pickup && !val.address) {
      ctx.addIssue({
        code: "custom",
        message: "Обязательное поле",
        path: ["address"],
      });
      return false;
    }
    return true;
  });

export default function Checkout() {
  const cart = useCart();
  const router = useRouter();
  const supabase = createClient();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      address: "",
      pickup: false,
    },
  });

  useEffect(() => {
    (async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        form.setValue("firstname", user.user_metadata.firstname);
        form.setValue("lastname", user.user_metadata.lastname);
        form.setValue("email", user.email || "");
      }
    })();

    const subscription = form.watch((data) => {
      if (data.pickup) form.clearErrors("address");
    });

    return () => subscription.unsubscribe();
  }, [form, supabase.auth]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const res = await createOrder({
      ...values,
      products: cart.products,
      total: cart.total(),
    });
    if (res) {
      cart.clear();
      toast.success("Заказ создан успешно!", {
        description: "Наш оператор свяжется с вами в ближайшее время.",
      });
      router.replace("/shop");
    }
  };

  return (
    <div className="lg:h-screen flex items-center justify-center py-4 relative">
      <div className="absolute top-0 left-0 right-0 flex justify-between p-4">
        <Logo />
        <ThemeSwitch />
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl px-4 md:px-6 mt-10 md:mt-0">
        <div className="grid gap-6">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Ваша Корзина</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 max-h-96 overflow-y-scroll">
                {cart.products.map((p) => (
                  <div
                    key={p.variantId}
                    className="grid grid-cols-[80px_1fr_80px] items-center gap-4"
                  >
                    <img
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
                    <div className="grid gap-1">
                      <h3 className="font-medium">{p.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Кол-во: x{p.quantity}, Размер:{" "}
                        <span className="uppercase">{p.size}</span>
                      </p>
                    </div>
                    <div className="text-right font-medium">₽ {p.price}</div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="mt-auto">
              <div className="w-full">
                <Separator className="my-4" />
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 dark:text-gray-400">Всего</p>
                  <p className="font-medium">₽ {cart.total()}</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Данные о Заказе</CardTitle>
            </CardHeader>
            <CardContent>
              <UIForm {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="grid gap-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstname"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Имя</FormLabel>
                          <FormControl>
                            <Input placeholder="Макс" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastname"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Фамилия</FormLabel>
                          <FormControl>
                            <Input placeholder="Повидлов" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Эл. Почта</FormLabel>
                        <FormControl>
                          <Input placeholder="m@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="address"
                    disabled={form.getValues().pickup}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Адрес</FormLabel>
                        <FormControl>
                          <Input placeholder="Адрес доставки" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="pickup"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Самовывоз</FormLabel>
                          <FormDescription>
                            Вы можете узнать{" "}
                            <Link href="/shop/mission" className="underline">
                              о нас
                            </Link>{" "}
                            или{" "}
                            <Link href="/shop/contacts" className="underline">
                              связаться с нами
                            </Link>{" "}
                            по предложенным ссылкам на нашем сайте.
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                  <Button className="w-full hidden lg:block" size="lg">
                    Оформить Заказ
                  </Button>
                </form>
              </UIForm>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
