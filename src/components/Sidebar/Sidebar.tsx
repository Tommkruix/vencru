import { useState, FC, ReactElement } from "react";

import MainLayout from "@/components/MainLayout/MainLayout";

import { NavMenuItems } from "@/store";
import { NavMenuType } from "@/utils/types";

import { LogoIcon, LogoutIcon, MenuIcon, SearchIcon } from "@/assets/icons";
import { AccountImage, SidebarImage } from "@/assets/images";

const Sidebar: FC = (): ReactElement => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderItem = (menus: NavMenuType[]) => {
    return menus.map(({ icon, title, addBreak, rightLabel }, index) => (
      <a
        key={index}
        className={`${addBreak && "mb-8"} ${
          rightLabel && "flex"
        } block px-4 py-2 my-2 text-base font-medium text-gray-700 rounded-lg hover:text-gray-700 focus:text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:shadow-outline`}
        href="#/"
      >
        {icon}
        {title}
        {rightLabel && (
          <small className="bg-gray-100 text-sm ml-auto h-auto p-1 px-2 rounded-full">
            {rightLabel}
          </small>
        )}
      </a>
    ));
  };

  return (
    <div className="md:flex md:w-screen md:flex-row">
      <div className="flex-col md:w-64 text-gray-700 bg-white border-x-1">
        <div className="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
          <a
            href="#/"
            className="text-lg -ml-8 font-semibold tracking-widest text-gray-900 uppercase rounded-lg focus:outline-none focus:shadow-outline"
          >
            <LogoIcon />
          </a>
          <button
            className="rounded-lg md:hidden rounded-lg focus:outline-none focus:shadow-outline"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <MenuIcon />
          </button>
        </div>
        <nav
          className={`flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto ${
            sidebarOpen ? "block" : "hidden"
          }`}
        >
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Search
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <SearchIcon />
              </div>
              <input
                type="search"
                id="default-search"
                className="block h-10 p-4 mb-10 pl-10 w-full text-sm text-gray-900 bg-white-50 rounded-lg border border-gray-300"
                placeholder="Search"
                required
              />
            </div>
          </form>
          {renderItem(NavMenuItems)}
          <div className="bg-gray-100 p-4 my-14 text-1xl text-left font-light">
            <span className="font-semibold">New features available!</span>
            <br />
            <span>
              Check out the new dashboard view. Pages now load faster.{" "}
            </span>
            <img
              className="my-4 rounded-md"
              src={SidebarImage}
              alt="sidebar.png"
            />
            <span>
              Dismiss <b className="text-primary-700">What's new?</b>{" "}
            </span>
          </div>
          <div className="border-b-2"></div>
          <div className="py-3 sm:py-4 mb-8">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="object-cover h-8 rounded-full"
                  src={AccountImage}
                  alt="account.png"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-1xl font-medium text-gray-900 truncate">
                  Olivia Rhye
                </p>
                <p className="text-1xl text-gray-500 truncate">
                  olivia@untitledui.com
                </p>
              </div>
              <div className="inline-flex items-center">
                <LogoutIcon />
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="flex-col w-screen text-gray-700 bg-white border-x-2">
        <MainLayout />
      </div>
    </div>
  );
};

export default Sidebar;
