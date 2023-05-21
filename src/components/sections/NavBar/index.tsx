import React from "react";
import Logo from "../../atomic-components/Logo";
import { Link } from "gatsby";
import { useTheme } from "../../../utils/themeProvider";
import Switch from "../../atomic-components/Switch";
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
    <nav className="backdrop-filter backdrop-blur-lg backdrop-saturate-200 transition-shadow bg-opacity-90 items-center w-full flex justify-between bg-wash dark:bg-wash-dark dark:bg-opacity-95 px-1.5 lg:pr-5 lg:pl-4 z-50 dark:shadow-nav-dark shadow-nav">
      <Link to="/">
        <Logo />
      </Link>
      <div className="flex items-center justify-evenly">
        <div className="hidden items-center justify-evenly md:flex text-base">
          {routes.map((route: Route) => (
            <Link
              key={route.to}
              to={route.to}
              className="mx-2"
              activeClassName="active:scale-95 transition-transform w-full text-center outline-link py-1.5 px-1.5 xs:px-3 sm:px-4 rounded-full capitalize bg-highlight dark:bg-highlight-dark text-link dark:text-link-dark"
            >
              {route.label}
            </Link>
          ))}
        </div>
        <Switch checked={isDark} toggle={toggleTheme} />
      </div>
    </nav>
  );
}

export default NavBar;
