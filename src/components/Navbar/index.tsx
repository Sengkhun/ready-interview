"use client";
import { UserButton, useUser } from "@clerk/nextjs";

import Image from "next/image";
import Link from "next/link";

import constant from "@/constant";
import Button from "../Buttons/Button";

const MENU = [
  { id: 1, title: "Company", path: "/company" },
  { id: 2, title: "About Us", path: "/about-us" },
  { id: 3, title: "Blog", path: "/blog" },
];

export default function Navbar() {
  const { user, isLoaded } = useUser();

  return (
    <div className="flex flex-row justify-between items-center pt-3">
      {/* Logo */}
      <Link href="/" title={`${constant.name} - Home`}>
        {/* Small Logo */}
        <Image
          className="h-auto lg:hidden"
          src="/images/logos/logo.svg"
          width={50}
          height={50}
          alt={`${constant.name} Logo`}
        />

        {/* Full Logo */}
        <Image
          className="hidden lg:flex h-auto"
          src="/images/logos/logo-full.svg"
          width={120}
          height={100}
          alt={`${constant.name} Logo`}
        />
      </Link>

      {/* Menu */}
      <ul className="hidden lg:flex flex-row">
        {MENU.map((item) => (
          <li key={item.id}>
            <Link
              href={item.path}
              title={`${constant.name} - ${item.title}`}
              className="block px-8 py-4"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Action Button */}
      <div className="lg:min-w-20 flex flex-row justify-end">
        {isLoaded ? (
          user ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <Button
              href="/sign-in"
              title={`${constant.name} - Sign In`}
              className="btn btn-primary"
            >
              Sign In
            </Button>
          )
        ) : null}
      </div>
    </div>
  );
}
