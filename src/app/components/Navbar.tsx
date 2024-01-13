"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { GiAlienBug } from "react-icons/gi";

const Navbar: React.FC = () => {
  const currentpath = usePathname();
  const links = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex items-center space-x-6 border-b-2 border-zinc-700 mb-5 h-14 px-5 ">
      <Link href={`/`} className="text-emerald-400">
        <GiAlienBug className="text-2xl" />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <li
              className={`${
                link.href === currentpath ? "text-emerald-400" : "text-zinc-200"
              }`}
            >
              {link.label}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
