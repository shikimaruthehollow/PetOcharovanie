"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form as UIForm,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { editProfile } from "./action";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

const formSchema = z.object({
  avatar: z.custom<File>((v) => v instanceof File).optional(),
  firstname: z
    .string({ message: "Обязательное поле" })
    .min(1, { message: "Обязательное поле" }),
  lastname: z
    .string({ message: "Обязательное поле" })
    .min(1, { message: "Обязательное поле" }),
});

export default function Form() {
  const [avatar, setAvatar] = useState<string>();
  const supabase = createClient();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      avatar: undefined,
      firstname: "",
      lastname: "",
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
      }
    })();
  }, [form, supabase.auth]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    let uploadPath = "";
    const file = values.avatar;
    if (file) {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;
      const upload = await supabase.storage
        .from("avatars")
        .upload(filePath, file);
      console.log(upload.error);
      uploadPath = upload.data?.path || "";
    }
    console.log(uploadPath);
    editProfile({
      firstname: values.firstname,
      lastname: values.lastname,
      avatarUploadPath: uploadPath,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Личная Информация</CardTitle>
      </CardHeader>
      <CardContent>
        <UIForm {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
            <Avatar className="mx-auto size-64">
              <AvatarImage src={avatar} />
              <AvatarFallback>IK</AvatarFallback>
            </Avatar>
            <FormField
              control={form.control}
              name="firstname"
              disabled
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
              disabled
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
          </form>
        </UIForm>
      </CardContent>
    </Card>
  );
}
