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
import React from "react";

const TopBar = () => {
  return (
    <Navbar className="font-funnel-sans" fluid rounded>
      <NavbarBrand href="https://flowbite-react.com">
        <span className="self-center font-funnel-sans whitespace-nowrap text-xl dark:text-white">
          MystiqueVille
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button>Book Now</Button>
        <Flowbite>
          <DarkThemeToggle />
        </Flowbite>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Rooms</NavbarLink>
        <NavbarLink href="#">Restaurant</NavbarLink>
        <NavbarLink href="#">Trekking</NavbarLink>
        <NavbarLink href="#">Reservation</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default TopBar;
