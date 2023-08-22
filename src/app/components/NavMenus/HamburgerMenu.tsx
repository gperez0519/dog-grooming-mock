import React from "react";

interface Props {
  navMenuToggle: boolean;
  toggleNavMenu: () => void;
}

export const HamburgerMenu: React.FC<Props> = ({
  navMenuToggle,
  toggleNavMenu,
}) => {
  return (
    <div className="block lg:hidden">
      <button
        onClick={toggleNavMenu}
        className="transition duration-500 ease-in-out flex items-center px-3 py-2 border rounded hover:text-white hover:border-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 text-white transition-all"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={
              navMenuToggle
                ? "M6 18L18 6M6 6l12 12"
                : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            }
          />
        </svg>
      </button>
    </div>
  );
};
