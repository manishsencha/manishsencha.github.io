import React from "react";
import Logo from "../Logo";
import { Link } from "gatsby";
interface Route {
  to: string;
  label?: string;
}
function NavBar() {
  let routes: Route[] = [
    { to: "/about", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/projects", label: "Projects" },
  ];
  return (
    <nav className="bg-light-primary dark:bg-dark-primary text-dark-primary dark:text-light-primary flex items-center justify-between p-1">
      <div>
        <Logo />
      </div>
      <div className="flex items-center justify-evenly">
        {routes.map((route: Route) => (
          <Link
            key={route.to}
            to={route.to}
            className="px-2"
            activeClassName="border-b-2 border-dark-primary dark:border-light-primary"
          >
            {route.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
