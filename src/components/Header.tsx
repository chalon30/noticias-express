'use client';

import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full bg-blue-800 text-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">
          <Link href="/" className="hover:opacity-90 transition-opacity">
            News App
          </Link>
        </h1>

        <nav className="flex space-x-6 text-sm font-medium">
          <Link
            href="/"
            className="hover:text-blue-200 transition-colors duration-200"
          >
            Inicio
          </Link>
          <Link
            href="/about"
            className="hover:text-blue-200 transition-colors duration-200"
          >
            Acerca de
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-200 transition-colors duration-200"
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
