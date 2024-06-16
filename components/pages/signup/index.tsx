import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Form from "./Form";

export default function SignUp() {
  return (
    <Card className="mx-auto md:max-w-sm w-full">
      <CardHeader className="md:p-6 p-4 pb-4 md:pb-4">
        <CardTitle className="text-xl">Регистрация</CardTitle>
        <CardDescription>
          Введите свои данные для создания учетной записи
        </CardDescription>
      </CardHeader>
      <CardContent className="md:p-6 md:pt-0 p-4 pt-0">
        <Form />
        <div className="mt-4 text-center text-sm">
          Уже имеете существующий аккаунт?{" "}
          <Link className="underline" href="/auth/login">
            Войти
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
