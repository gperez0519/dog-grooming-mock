"use client";

import React, { useState, useCallback, memo } from "react";
import { FaDog } from "react-icons/fa";

import Link from "next/link";
import { HamburgerMenu } from "./HamburgerMenu";
import MainNavMenu from "./MainNavMenu";
import MobileNavMenu from "./MobileNavMenu";

const Navbar = () => {
  const [navMenuToggle, setNavMenuToggle] = useState<boolean>(false);

  const toggleNavMenu = useCallback(() => {
    setNavMenuToggle(!navMenuToggle);
  }, [navMenuToggle]);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-red-400 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <FaDog className="mx-3 text-2xl dog-logo" />
        <Link href="/">
          <span className="font-semibold text-xl tracking-tight">
            Woof Dog Grooming
          </span>
        </Link>
      </div>
      <HamburgerMenu
        navMenuToggle={navMenuToggle}
        toggleNavMenu={toggleNavMenu}
      />
      <MobileNavMenu {...{ navMenuToggle }} {...{ toggleNavMenu }} />
      <MainNavMenu />
    </nav>
  );
};

export default memo(Navbar, (prevProps, nextProps) => prevProps === nextProps);
