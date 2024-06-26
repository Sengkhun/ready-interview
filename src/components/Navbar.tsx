"use client";
import { useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import constant, { MENU, DRAWER_MENU, ROLES, DASHBOARD_LINK } from "@/constant";
import Button from "@/components/Button";

export default function Navbar() {
  // Hooks
  const pathname = usePathname();
  const { user, isLoaded } = useUser();

  // States
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Variables
  const drawerClass = {
    list: "flex flex-row items-center w-full pr-8 py-2 rounded-lg hover:bg-neutral-100 hover:text-primary transition-all",
    listIcon: "fa-lg flex flex-row justify-start items-center w-14",
  };

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <div className="sticky top-0 z-10 shadow-md bg-white">
        <nav className="ri-container flex flex-row justify-between py-3 lg:py-0">
          {/* Logo */}
          <Link
            href="/"
            title={`${constant.name} - Home`}
            className="w-14 lg:w-28"
          >
            {/* Small Logo */}
            <Image
              className="lg:hidden h-auto"
              src="/images/logos/logo.svg"
              width={50}
              height={50}
              alt={`${constant.name} Logo`}
              priority={true}
            />

            {/* Full Logo */}
            <Image
              className="hidden lg:flex py-5 h-auto"
              src="/images/logos/logo-full.svg"
              width={120}
              height={100}
              alt={`${constant.name} Logo`}
              priority={true}
            />
          </Link>

          {/* Menu */}
          <ul className="hidden lg:flex flex-row">
            {MENU.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.path}
                  title={`${constant.name} - ${item.title}`}
                  className={`${
                    pathname === item.path ? "text-primary " : ""
                  }flex flex-row justify-center items-center h-full px-12 py-4 hover:bg-primary hover:text-white transition-all`}
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
                <>
                  {user?.publicMetadata?.role === ROLES.admin ? (
                    <Button
                      href={DASHBOARD_LINK.path}
                      target="_blank"
                      title={`${constant.name} - ${DASHBOARD_LINK.title}`}
                      type="primary"
                      className="hidden lg:block mr-4"
                    >
                      {DASHBOARD_LINK.title}
                    </Button>
                  ) : null}

                  <UserButton afterSignOutUrl="/" />
                </>
              ) : (
                <Button
                  href="/sign-in"
                  title={`${constant.name} - Sign In`}
                  type="primary"
                >
                  Sign In
                </Button>
              )
            ) : null}

            {/* Menu */}
            <button className="lg:hidden ml-2 pl-4" onClick={openDrawer}>
              <FontAwesomeIcon className="fa-xl transition-all" icon={faBars} />
            </button>
          </div>
        </nav>
      </div>

      {/* Drawer Menu */}
      <div className="flex lg:hidden">
        <nav
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
              className="w-32"
              src="/images/logos/logo-full.svg"
              width={120}
              height={100}
              alt={`${constant.name} Logo`}
              priority={false}
            />
          </Link>

          <ul className="flex flex-col p-4">
            {user?.publicMetadata?.role === ROLES.admin ? (
              <li>
                <Link
                  href={DASHBOARD_LINK.path}
                  target="_blank"
                  title={`${constant.name} - ${DASHBOARD_LINK.title}`}
                  className={`${
                    pathname === DASHBOARD_LINK.path ? "text-primary " : ""
                  }${drawerClass.list}`}
                  onClick={closeDrawer}
                >
                  <FontAwesomeIcon
                    className={drawerClass.listIcon}
                    icon={DASHBOARD_LINK.icon}
                  />
                  Dashboard
                </Link>
              </li>
            ) : null}

            {DRAWER_MENU.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.path}
                  title={`${constant.name} - ${item.title}`}
                  className={`${pathname === item.path ? "text-primary " : ""}${
                    drawerClass.list
                  }`}
                  onClick={closeDrawer}
                >
                  <FontAwesomeIcon
                    className={drawerClass.listIcon}
                    icon={item.icon}
                  />
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Background Overlay */}
        <div
          className={`fixed top-0 left-0 right-0 h-full w-full bg-black opacity-80 z-10${
            drawerOpen ? "" : " hidden"
          }`}
          onClick={closeDrawer}
        ></div>
      </div>
    </>
  );
}
