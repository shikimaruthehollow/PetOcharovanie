'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SunMoon, Menu, X } from 'lucide-react';
import '@radix-ui/themes/styles.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
      <Link className="flex items-center justify-center" href="/">
        <div className="relative w-10 h-10 md:w-14 md:h-14">
          <Image
            src="/poodle-head.svg"
            alt="Питомник Пуделей"
            fill
            className="object-contain"
          />
        </div>
        <span className="sr-only">Питомник Пуделей</span>
      </Link>

      <nav className="hidden lg:flex ml-auto gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/main">Главная</Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/main/exhibitions">Выставки</Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/main/puppies">Щенки</Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/main/our-poodles">Наши пудели</Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/main/more">Дополнительно</Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/main/contacts">Контакты</Link>
      </nav>

      <button className="lg:hidden ml-auto" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isMobileMenuOpen && (
        <nav className="lg:hidden absolute top-14 left-0 w-full bg-white shadow-lg flex flex-col items-center p-4">
          <Link className="text-sm font-medium py-2" href="/main" onClick={toggleMobileMenu}>Главная</Link>
          <Link className="text-sm font-medium py-2" href="/main/exhibitions" onClick={toggleMobileMenu}>Выставки</Link>
          <Link className="text-sm font-medium py-2" href="/main/puppies" onClick={toggleMobileMenu}>Щенки</Link>
          <Link className="text-sm font-medium py-2" href="/main/our-poodles" onClick={toggleMobileMenu}>Наши пудели</Link>
          <Link className="text-sm font-medium py-2" href="/main/more" onClick={toggleMobileMenu}>Дополнительно</Link>
          <Link className="text-sm font-medium py-2" href="/main/contacts" onClick={toggleMobileMenu}>Контакты</Link>
        </nav>
      )}
    </header>
  );
}