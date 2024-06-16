import { ShirtIcon } from "lucide-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/shop">
      <ShirtIcon className="size-6" />
      <span className="sr-only">New Yorker</span>
    </Link>
  );
}
