import React from "react";
import Link from "next/link";

interface Props {
  navMenuToggle: boolean;
}

const MobileNavMenu: React.FC<Props> = ({ navMenuToggle }) => {
  return (
    <div
      className={`bg-red-400 w-full lg:hidden mobile-menu ${
        navMenuToggle ? "absolute top-20 right-0 px-9 pb-6 z-10" : "hidden"
      }`}
    >
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

export default MobileNavMenu;
