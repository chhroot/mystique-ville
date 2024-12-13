"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Button,
  DarkThemeToggle,
  Flowbite,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import mainLogo from "@/assets/mystique-main.png";
import Image from "next/image";

// Define navigation items as a constant
const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Rooms", href: "/rooms" },
  { label: "Restaurant", href: "/restaurant" },
  { label: "Trekking", href: "/trekking" },
  { label: "Reservation", href: "/reservation" },
  { label: "Contact", href: "/contact" },
];

const TopBar = () => {
  const pathname = usePathname();

  return (
    <Navbar className="z-10 sticky top-0 font-funnel-sans" fluid rounded>
      <NavbarBrand as={Link} href="/" className="px-0 md:px-10">
        <div className="flex items-center gap-1">
          <Image src={mainLogo} alt="mainLogo" width={50} height={50} />
          <div className="hidden md:flex flex-col items-center font-funnel-display">
            <span className="font-medium text-gray-700 whitespace-nowrap text-lg dark:text-white">
              Mystique Ville
            </span>
            <span className="border-t text-gray-700 dark:text-white border-gray-200 text-[10px]">
              PRESTINE JUNGLE EXPERIENCE
            </span>
          </div>
        </div>
      </NavbarBrand>

      <div className="px-0 md:px-10 flex gap-2 md:order-2">
        <Button>Book Now</Button>
        <Flowbite>
          <DarkThemeToggle />
        </Flowbite>
        <NavbarToggle />
      </div>

      <NavbarCollapse>
        {NAV_ITEMS.map((item) => (
          <NavbarLink
            key={item.href}
            as={Link}
            href={item.href}
            active={pathname === item.href}
            className={pathname === item.href ? " dark:border-b-2" : ""}
          >
            {item.label}
          </NavbarLink>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
};

export default TopBar;
