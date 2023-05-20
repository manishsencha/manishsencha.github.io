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
    <nav className="bg-light-primary dark:bg-dark-primary text-dark-primary dark:text-light-primary flex items-center justify-between py-1 px-2">
      <div>
        <Logo />
      </div>
      <div className="flex items-center justify-evenly">
        {routes.map((route: Route) => (
          <Link
            key={route.to}
            to={route.to}
            className="mx-2"
            activeClassName="border-b-2 border-dark-primary dark:border-light-primary"
          >
            {route.label}
          </Link>
        ))}
        <Switch checked={isDark} toggle={toggleTheme} />
      </div>
    </nav>
  );
}

export default NavBar;
