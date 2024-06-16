import Header from "@/components/layout/header";
import Form from "./Form";
import Info from "./Info";

export default function Contacts() {
  return (
    <>
      <Header />
      <div className="md:min-h-screen md:flex justify-center items-center p-4 md:p-0">
        <div className="max-w-6xl grid md:grid-cols-2 gap-4 md:gap-12">
          <Info />
          <Form />
        </div>
      </div>
    </>
  );
}
