import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/header";

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
  // <div className="flex flex-col min-h-[100dvh] relative">
  // <div className="mt-14 lg:m-0" />
  // <Header />
  // <main className="flex-1">{children}</main>
  // <Footer />
  // </div>
}
