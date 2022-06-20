import React from "react";
import Toggle from "../../atoms/toggle";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";

import { Menu, Popover, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";

const user = {
  name: "Chelsea Hagon",
  email: "chelsea.hagon@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Calendar", href: "#", current: false },
  { name: "Teams", href: "#", current: false },
  { name: "Directory", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  let originClass =
    "mr-5 text-base font-semibold text-gray-400 dark:text-white rounded-xl hover:text-gray-800";

  return (
    <header className="text-gray-700 bg-transparent dark:bg-transparent body-font">
      <div className="flex lg:container p-5 mx-auto md:items-center md:flex-row justify-between">
        <div className="flex flex-auto md:justify-evenly justify-start">
          <NavLink
            to="javascript.void(0)"
            href="javascript.void(0)"
            className="flex items-center w-40 mb-4 font-medium text-gray-400 title-font md:mb-0"
          >
            <h4 className="flex-inline text-white">
              <Logo className="mr-2 inline-block" />
              hatome
            </h4>
          </NavLink>
          <nav className="hidden md:flex flex-wrap justify-center items-baseline ml-4 pt-2 text-base flex-1">
            <NavLink
              to="javascript.void(0)"
              href="javascript.void(0)"
              className="mr-5 text-sm font-semibold text-gray-400 dark:text-white rounded-xl hover:text-gray-800"
            >
              Markets
            </NavLink>
            <NavLink
              to="javascript.void(0)"
              href="javascript.void(0)"
              className="mr-5 text-base font-semibold text-gray-400 dark:text-white rounded-xl hover:text-gray-800"
            >
              Governance
            </NavLink>
            <NavLink
              to="javascript.void(0)"
              href="javascript.void(0)"
              className="mr-5 text-base font-semibold text-gray-400 dark:text-white rounded-xl hover:text-gray-800"
            >
              Price
            </NavLink>
            <NavLink
              to="javascript.void(0)"
              href="javascript.void(0)"
              className="mr-5 text-base font-semibold text-gray-400 dark:text-white rounded-xl hover:text-gray-800"
            >
              Docs
            </NavLink>
            <NavLink
              to="/"
              href="javascript.void(0)"
              className={({ isActive }) =>
                isActive
                  ? "border-b pb-2 text-indigo-600 border-gray-500"
                  : originClass
              }
            >
              Hatom Token
            </NavLink>
          </nav>
        </div>
        <div className="flex flex-1 md:flex-auto self-start md:self-end justify-end">
          <Toggle />
          <Popover
            as="header"
            className={({ open }) =>
              classNames(
                open ? "fixed inset-0 z-40 overflow-y-auto" : "",
                "bg-transparent shadow-sm lg:static lg:overflow-y-visible md:hidden"
              )
            }
          >
            {({ open }) => (
              <>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
                    <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2"></div>

                    <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                      {/* Mobile menu button */}
                      <Popover.Button className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open menu</span>
                        {open ? (
                          <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <MenuIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Popover.Button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </Popover>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
