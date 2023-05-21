import React from "react";
import Logo from "../../atomic-components/Logo";
import { Link } from "gatsby";
import { useTheme } from "../../../utils/themeProvider";
import { DarkThemeIcon } from "../../atomic-components/Icons/DarkThemeIcon";
import { LightThemeIcon } from "../../atomic-components/Icons/LightThemeIcon";
interface Route {
  to: string;
  label?: string;
}
let routes: Route[] = [
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
];
function NavBar() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <nav className="z-50 sticky top-0 backdrop-filter backdrop-blur-lg backdrop-saturate-200 transition-shadow bg-opacity-90 items-center w-full flex justify-between bg-wash dark:bg-wash-dark dark:bg-opacity-95 px-1.5 lg:pr-5 lg:pl-4 z-50 dark:shadow-nav-dark shadow-nav py-1">
      <Link to="/">
        <button
          type="button"
          aria-label="Home"
          className="scale-90 transition-transform flex w-12 h-12 rounded-full items-center justify-center hover:bg-primary/5 hover:dark:bg-primary-dark/5 outline-link"
        >
          <Logo />
        </button>
      </Link>
      <div className="flex items-center justify-evenly">
        <div className="hidden items-center justify-evenly md:flex text-base">
          {routes.map((route: Route) => (
            <Link
              key={route.to}
              to={route.to}
              className="mx-2 w-full  py-1.5 px-1.5 xs:px-3 sm:px-4 "
              activeClassName="transition-transform w-full text-center outline-link py-1.5 px-1.5 xs:px-3 sm:px-4 rounded-full capitalize bg-highlight dark:bg-highlight-dark text-link dark:text-link-dark"
            >
              {route.label}
            </Link>
          ))}
        </div>
        <div className="flex dark:hidden">
          <button
            type="button"
            aria-label="Use Dark Mode"
            onClick={() => toggleTheme()}
            className="transition-transform flex w-12 h-12 rounded-full items-center justify-center hover:bg-primary/5 hover:dark:bg-primary-dark/5 outline-link"
          >
            <DarkThemeIcon />
          </button>
        </div>
        <div className="hidden dark:flex">
          <button
            type="button"
            aria-label="Use Light Mode"
            onClick={() => toggleTheme()}
            className="transition-transform flex w-12 h-12 rounded-full items-center justify-center hover:bg-primary/5 hover:dark:bg-primary-dark/5 outline-link"
          >
            <LightThemeIcon />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
