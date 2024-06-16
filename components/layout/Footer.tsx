import Link from "next/link";

export default function Footer() {
  return (
    <footer className="md:absolute md:bottom-0 py-4 lg:py-0 lg:h-14 w-full bg-white dark:bg-black lg:px-4 border-t flex flex-col lg:flex-row justify-between items-center">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © 2024 New Yorker. All rights reserved.
      </p>
      <nav className="space-x-4">
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Terms of Service
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Privacy Policy
        </Link>
      </nav>
    </footer>
  );
}
