import React from "react";
import Link from "next/link";

const MainNavMenu = () => {
  return (
    <div className="flex-1 justify-self-center pb-3 mt-8 hidden lg:block md:pb-0 md:mt-0 main-nav-menu">
      <div className="text-sm lg:flex-grow">
        <Link
          href="/"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
        >
          About Us
        </Link>

        <Link
          href="/services"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
        >
          Services
        </Link>
        <Link
          href="/testimonials"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
        >
          Testimonials
        </Link>
      </div>
    </div>
  );
};

export default MainNavMenu;
