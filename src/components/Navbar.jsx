'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-600 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-10">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="text-xl font-bold text-white">
            <Link href="/">CARTIFY</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 bg-blue-600">
            <Link href="/" className="text-white hover:text-blue-500">Home</Link>
            <Link href="/about" className="text-white hover:text-blue-500">About</Link>
            <Link href="/shop" className="text-white hover:text-blue-500">Shop</Link>
            <Link href="/contact" className="text-white hover:text-blue-500">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow">
          <Link href="/" className="block hover:text-blue-500">Home</Link>
          <Link href="/about" className="block hover:text-blue-500">About</Link>
          <Link href="/services" className="block hover:text-blue-500">Services</Link>
          <Link href="/contact" className="block hover:text-blue-500">Contact</Link>
        </div>
      )}
    </nav>
  );
}
