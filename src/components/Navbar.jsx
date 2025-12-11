"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path) =>
    pathname === path
      ? "text-blue-500 font-semibold"
      : "text-gray-700 hover:text-blue-500";

  return (
    <nav className="w-full bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Gallery Visitor's
        </Link>

        <div className="flex gap-6 text-lg">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/gallery" className={linkClass("/gallery")}>Gallery</Link>
          <Link href="/add" className={linkClass("/add")}>Add Photo</Link>
          <Link href="/about" className={linkClass("/about")}>About</Link>
        </div>
      </div>
    </nav>
  );
}
