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
import {
    Select as UISelect,
    Select,
    SelectGroup,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectLabel,
    SelectItem,
    SelectSeparator,
    SelectScrollUpButton,
    SelectScrollDownButton,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import sendReserve from "./action";
import { isValidPhoneNumber } from 'react-phone-number-input'
isValidPhoneNumber('+712312312312') === false
isValidPhoneNumber('+79999999999') === true
import { formatPhoneNumber } from 'react-phone-number-input'
formatPhoneNumber('+79169780908') === '(915) 373-4258'
import React, { useState } from 'react'
// "Without country select" component.
import PhoneInput from "react-phone-number-input/react-hook-form-input"

// "With country select" component.
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form"
 
const onSubmit = (values: z.infer<typeof formSchema>) => {
    sendReserve({
      name: values.name,
      country: values.country,
      city: values.city,
      phone: values.phone,
      email: values.email,
      breed: values.breed, // выбранный тип породы
      gender: values.gender, // выбранный пол
      color: values.color, // выбранный окрас
      class: values.class, // выбранный класс
      message: values.message,
    });
  };

const formSchema = z.object({
    name: z
    .string({ message: "Обязательное поле" })
    .min(1, { message: "Обязательное поле" }),
    country: z
    .string({ message: "Обязательное поле" })
    .min(1, { message: "Обязательное поле" }),
    city: z
    .string({ message: "Обязательное поле" })
    .min(1, { message: "Обязательное поле" }),
    phone: z
    .string({ message: "Обязательное поле" })
    .refine((value) => isValidPhoneNumber(value), { message: "Неверный номер телефона" }),
    email: z
    .string({ message: "Обязательное поле" })
    .email({ message: "Неверная почта" })
    .min(1, { message: "Обязательное поле" }),
    breed: z
    .string ({ message: "Выберите тип"}),
    gender: z
    .string ({ message: "Выберите пол"}),
    color: z
    .string ({ message: "Выберите окрас"}),
    class: z
    .string ({ message: "Выберите класс"}),
    message: z
    .string({ message: "Обязательное поле" })
    .min(1, { message: "Обязательное поле" }),
});


export default function Reserve() {
  const reserve = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name:"",
      country:"",
      city:"",
      phone:"",
      email:"",
      breed:"",
      gender:"",
      color:"",
      class:"",
      message: "",
    },
  })

  const {
    // Either pass a control property to the component
    // or wrap it in a <FormProvider/>.
    control,
    handleSubmit
  } = useForm()


  const onSubmit = (values: z.infer<typeof formSchema>) => sendReserve(values);
  
return (
    <>
    <div className="mx-auto w-full max-w-sm space-y-2">
      <UIForm {...reserve}>
        <form onSubmit={reserve.handleSubmit(onSubmit)} className="flex flex-col space-y-2">
         
            <FormField
              control={reserve.control}
                name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Введите ваше ФИО" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={reserve.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Введите Страну" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={reserve.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Введите Город" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={reserve.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <PhoneInput
                    className="w-full p-2 border border-gray-300 rounded-md text-sm"
                    rules={{ required: true }}
                    defaultCountry="RU" 
                    placeholder="Введите Номер телефона" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={reserve.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Введите Эл. Почту" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={reserve.control}
              name="breed"
              render={({ field }) => (
                <FormItem>
                    <FormControl>
                         <Select onValueChange={field.onChange} value={field.value}>
                         <SelectTrigger className="w-full">
                        <SelectValue placeholder="Выберите Тип породы" />
                    </SelectTrigger>
                         <SelectContent>
                            <SelectItem value="Toy" onChange={() => field.onChange("toy")} onBlur={field.onBlur}>
                                      Той
                            </SelectItem>
                                <SelectItem value="Mini" onChange={() => field.onChange("mini")} onBlur={field.onBlur}>
                                     Мини
                                </SelectItem>
                            </SelectContent>
                        </Select>
                        </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
        <FormField
            control={reserve.control}
              name="gender"
              render={({ field }) => (
        <FormItem>
            <FormControl>
            <Select onValueChange={field.onChange} value={field.value}>
        <SelectTrigger className="w-full">
        <SelectValue placeholder="Выберите пол" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Female" onChange={() => field.onChange("female")} onBlur={field.onBlur}>
          Сука
        </SelectItem>
        <SelectItem value="Male" onChange={() => field.onChange("male")} onBlur={field.onBlur}>
          Кобель
        </SelectItem>
        </SelectContent>
    </Select>
  </FormControl>
  <FormMessage />
</FormItem>
    )}
        />
        <FormField
              control={reserve.control}
              name="color"
              render={({ field }) => (
        <FormItem>
            <FormControl>
            <Select onValueChange={field.onChange} value={field.value}>
        <SelectTrigger className="w-full">
        <SelectValue placeholder="Выберите окрас" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Brown" onChange={() => field.onChange("brown")} onBlur={field.onBlur}>
          Коричневый
                </SelectItem>
             <SelectItem value="Black" onChange={() => field.onChange("black")} onBlur={field.onBlur}>
          Черный
                 </SelectItem>
                 <SelectItem value="Red" onChange={() => field.onChange("red")} onBlur={field.onBlur}>
          Красный
                 </SelectItem>
             </SelectContent>
            </Select>
        </FormControl>
        <FormMessage />
        </FormItem>
        )}
        />
        <FormField
              control={reserve.control}
              name="class"
              render={({ field }) => (
        <FormItem>
            <FormControl>
            <Select onValueChange={field.onChange} value={field.value}>
        <SelectTrigger className="w-full">
        <SelectValue placeholder="Выберите класс" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Show" onChange={() => field.onChange("Show")} onBlur={field.onBlur}>
          Шоу
                </SelectItem>
             <SelectItem value="Breed" onChange={() => field.onChange("Breed")} onBlur={field.onBlur}>
          Брид
                 </SelectItem>
                 <SelectItem value="Pet" onChange={() => field.onChange("Pet")} onBlur={field.onBlur}>
          Пет
                 </SelectItem>
             </SelectContent>
            </Select>
        </FormControl>
        <FormMessage />
        </FormItem>
        )}
        />
          <div className="space-y-2">
            <FormField
              control={reserve.control}
              name="message"
              render={({ field }) => (
                <FormItem>
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
    </>
  );
}