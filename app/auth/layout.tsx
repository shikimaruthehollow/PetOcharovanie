import ThemeSwitch from "@/components/ThemeSwitch";
import Logo from "@/components/icons/Logo";
import Image from "next/image";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] h-screen">
      <div className="flex items-center justify-center py-12 h-full relative">
        <div className="absolute top-0 left-0 right-0 flex justify-between p-4">
          <Logo />
          <ThemeSwitch />
        </div>
        <div className="px-4 md:p-0 w-full">{children}</div>
      </div>
      <div className="hidden bg-gray-100 lg:block dark:bg-gray-800">
        <Image
          alt="Image"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          height="1080"
          src="/auth/signup.jpg"
          style={{
            aspectRatio: "1920/1080",
            objectFit: "cover",
          }}
          width="1920"
        />
      </div>
    </div>
  );
}
