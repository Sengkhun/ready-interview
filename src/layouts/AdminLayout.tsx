"use client";
import { useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import constant, { ADMIN_MENU, DASHBOARD_LINK } from "@/constant";

interface adminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout(props: adminLayoutProps) {
  // Hooks
  const pathname = usePathname();
  const { user, isLoaded } = useUser();

  // States
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Variables
  const drawerClass = {
    list: "flex flex-row w-full pr-8 py-4 rounded-lg hover:bg-neutral-100 hover:text-primary transition-all",
    listIcon: "fa-lg flex flex-row justify-start items-center w-16",
  };

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  if (!isLoaded || !user) {
    return null;
  }

  return (
    <>
      <div className="flex">
        <nav
          className={`${
            drawerOpen ? "translate-x-0 " : ""
          }fixed lg:relative top-0 left-0 z-20 w-64 h-full transition-all lg:transition-none duration-500 transform -translate-x-full lg:translate-x-0 bg-white`}
          style={{ padding: 0, borderRight: "1px solid #e5e7eb" }}
        >
          {/* Logo */}
          <Link
            href={DASHBOARD_LINK.path}
            title={`${constant.name} - ${DASHBOARD_LINK.title}`}
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

          {/* Menu */}
          <ul className="flex flex-col p-4">
            <li className="mb-2">
              <span className="text-xs text-neutral-400 font-bold uppercase">
                Admin Dashboard
              </span>
            </li>
            {ADMIN_MENU.map((item, idx) => (
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

      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <div className="flex flex-row justify-between items-center px-8 py-4 border-b">
          {/* Menu */}
          <button className="lg:hidden pr-4" onClick={openDrawer}>
            <FontAwesomeIcon className="fa-xl transition-all" icon={faBars} />
          </button>

          {/* Manage account button */}
          <UserButton afterSignOutUrl="/" />
        </div>

        {/* Content */}
        <div className="flex-1 px-8 py-8">{props.children}</div>
      </div>
    </>
  );
}