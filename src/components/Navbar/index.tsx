"use client";
import { useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";

import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHouse,
  faBuilding,
  faCircleInfo,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";

import constant from "@/constant";
import Button from "@/components/Buttons/Button";

const MENU = [
  { title: "Company", icon: faBuilding, path: "/company" },
  { title: "About Us", icon: faCircleInfo, path: "/about-us" },
  { title: "Blog", icon: faBlog, path: "/blog" },
];

const DRAWER_MENU = [{ title: "Home", icon: faHouse, path: "/" }, ...MENU];

export default function Navbar() {
  // Hooks
  const { user, isLoaded } = useUser();

  // States
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <div className="sticky top-0 shadow-md bg-white">
        <div className="container mx-auto flex flex-row justify-between items-center py-3 lg:py-5">
          {/* Logo */}
          <Link
            href="/"
            title={`${constant.name} - Home`}
            className="w-14 lg:w-28"
          >
            {/* Small Logo */}
            <Image
              className="lg:hidden"
              src="/images/logos/logo.svg"
              width={50}
              height={50}
              alt={`${constant.name} Logo`}
            />

            {/* Full Logo */}
            <Image
              className="hidden lg:flex"
              src="/images/logos/logo-full.svg"
              width={120}
              height={100}
              alt={`${constant.name} Logo`}
            />
          </Link>

          {/* Menu */}
          <ul className="hidden lg:flex flex-row">
            {MENU.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.path}
                  title={`${constant.name} - ${item.title}`}
                  className="block px-12 py-4"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Action Button */}
          <div className="lg:min-w-20 flex flex-row justify-end items-center ml-4">
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

            {/* Menu */}
            <button
              className="lg:hidden flex flex-row justify-end items-center w-12"
              onClick={openDrawer}
            >
              <FontAwesomeIcon
                className={`fa-xl transition-all${drawerOpen ? " w-0" : ""}`}
                icon={faBars}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Drawer Menu */}
      <div className="flex lg:hidden">
        <div
          className={`${
            drawerOpen ? "translate-x-0 " : ""
          }fixed top-0 left-0 z-20 w-64 h-full transition-all duration-500 transform -translate-x-full bg-white shadow-lg`}
          style={{ padding: 0 }}
        >
          {/* Logo */}
          <Link
            href="/"
            title={`${constant.name} - Home`}
            className="block border-b px-6 py-8"
          >
            <Image
              src="/images/logos/logo-full.svg"
              width={120}
              height={100}
              alt={`${constant.name} Logo`}
            />
          </Link>

          <ul className="flex flex-col">
            {DRAWER_MENU.map((item, idx) => (
              <li
                key={idx}
                className="hover:bg-primary hover:text-white transition-all"
              >
                <Link
                  href={item.path}
                  title={`${constant.name} - ${item.title}`}
                  className="block hover:color-red w-full pr-8 py-4"
                >
                  <FontAwesomeIcon
                    className="fa-xl flex flex-row justify-start items-center w-20"
                    icon={item.icon}
                  />
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Background Overlay */}
        <div
          className={`fixed top-0 left-0 right-0 h-full w-full transition-all duration-500${
            drawerOpen ? " bg-black opacity-90" : " -z-10 opacity-0"
          }`}
          onClick={closeDrawer}
        ></div>
      </div>
    </>
  );
}
