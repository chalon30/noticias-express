'use client';

import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full bg-blue-800 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">
          <Link
            href="/"
            className="transition-transform duration-300 ease-in-out hover:scale-105 hover:text-blue-200"
          >
            News App
          </Link>
        </h1>

        <nav className="flex space-x-6 text-sm font-medium">
          {[
            { href: '/', label: 'Inicio' },
            { href: '/about', label: 'Acerca de' },
            { href: '/contact', label: 'Contacto' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="relative group transition duration-300"
            >
              <span className="group-hover:text-blue-200 transition-colors duration-200">
                {label}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-200 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
