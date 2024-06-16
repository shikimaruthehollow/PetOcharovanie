import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Form from "./Form";

export default function Login() {
  return (
    <Card className="mx-auto md:max-w-sm w-full">
      <CardHeader className="md:p-6 p-4 pb-4 md:pb-4">
        <CardTitle className="text-xl">Авторизация</CardTitle>
        <CardDescription>
          Введите свой адрес электронной почты ниже, чтобы войти в свою учетную
          запись
        </CardDescription>
      </CardHeader>
      <CardContent className="md:p-6 md:pt-0 p-4 pt-0">
        <Form />
        <div className="mt-4 text-center text-sm">
          У вас нет учетной записи?{" "}
          <Link className="underline" href="/auth/signup">
            Зарегистрироваться
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
