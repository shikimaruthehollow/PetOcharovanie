import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import Form from "./Form";
import { createClient } from "@/lib/supabase/server";

export default async function Profile() {
  const supabase = createClient();
  const { data } = await supabase
    .from("orders")
    .select("*, variants_orders(*)");

  return (
    <div className="lg:h-screen lg:py-14">
      <div className="h-full grid grid-cols-1 md:grid-cols-[320px_1fr] gap-4 lg:gap-6 lg:py-6 p-4 md:px-6">
        <div className="grid gap-6">
          <Form />
        </div>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>История заказов</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Заказ #</TableHead>
                    <TableHead>Дата</TableHead>
                    <TableHead>Товары</TableHead>
                    <TableHead>Сумма</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data?.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>
                        <Link className="font-medium" href="#">
                          #{order.id}
                        </Link>
                      </TableCell>
                      <TableCell>
                        {new Date(order.created_at).toLocaleDateString()}
                      </TableCell>
                      <TableCell>{order.variants_orders.length}</TableCell>
                      <TableCell>
                        {Math.floor(Math.random() * 10000)} ₽
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
