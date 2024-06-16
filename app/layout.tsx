import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { createClient } from "@/lib/supabase/server";
import UserProvider from "@/components/providers/UserProvider";
import { Toaster } from "@/components/ui/sonner";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();
  const user = await supabase.auth.getUser();

  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={montserrat.className}>
        <ThemeProvider>
          <UserProvider user={JSON.parse(JSON.stringify(user))}>
            {children}
          </UserProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}