import Link from "next/link";

export default function Footer() {
  return (
    <footer className="lg:px-4 border-t flex flex-col lg:flex-row justify-between items-center w-full bg-white dark:bg-black  p-4">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © 2024 developed. <a href="https://github.com/shikimaruthehollow">shikimaruthehollow</a>.
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
