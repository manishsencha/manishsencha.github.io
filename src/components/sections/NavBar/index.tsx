import React from "react";
import Logo from "../../atomic-components/Logo";
import { Link } from "gatsby";
import { useTheme } from "../../../utils/themeProvider";
import { IconDarkTheme } from "../../atomic-components/Icons/IconDarkTheme";
import { IconLightTheme } from "../../atomic-components/Icons/IconLightTheme";
import { IconHamburger } from "../../atomic-components/Icons/IconHamburger";
import { IconClose } from "../../atomic-components/Icons/IconClose";
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
  const { toggleTheme } = useTheme();

  const [isOpen, setIsOpen] = React.useState(false);

  // Close if the width of viewport exceeds the desired value
  React.useEffect(() => {
    const media = window.matchMedia(`(max-width: 768px)`);

    function closeIfNeeded() {
      if (!media.matches) {
        setIsOpen(false);
      }
    }

    closeIfNeeded();
    media.addEventListener("change", closeIfNeeded);
    return () => {
      media.removeEventListener("change", closeIfNeeded);
    };
  }, []);
  return (
    <div className="z-50 sticky top-0 flex flex-col">
      <nav className="items-center w-full flex justify-between backdrop-filter backdrop-blur-lg backdrop-saturate-200 transition-shadow bg-opacity-90 bg-wash dark:bg-wash-dark dark:bg-opacity-95 px-1.5 lg:pr-5 lg:pl-4 z-50 dark:shadow-nav-dark shadow-nav py-1">
        <div className="flex align-center">
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setIsOpen(!isOpen)}
            className={`active:scale-95 transition-transform flex md:hidden w-12 h-12 rounded-full items-center justify-center hover:bg-primary/5 hover:dark:bg-primary-dark/5 outline-link ${
              isOpen && "text-link dark:text-link-dark"
            }`}
          >
            {isOpen ? <IconClose /> : <IconHamburger />}
          </button>
          <Link to="/">
            <button
              type="button"
              aria-label="Home"
              className="active:scale-95 scale-90 transition-transform flex w-12 h-12 rounded-full items-center justify-center hover:bg-primary/5 hover:dark:bg-primary-dark/5 outline-link"
            >
              <Logo />
            </button>
          </Link>
        </div>
        <div className="flex items-center justify-evenly">
          <div className="hidden items-center justify-evenly md:flex text-base">
            {routes.map((route: Route) => (
              <Link
                key={route.to}
                to={route.to}
                className="mx-2 w-full py-1.5 px-1.5 xs:px-3 sm:px-4 hover:bg-secondary hover:rounded-full hover:text-secondary-dark"
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
              <IconDarkTheme />
            </button>
          </div>
          <div className="hidden dark:flex">
            <button
              type="button"
              aria-label="Use Light Mode"
              onClick={() => toggleTheme()}
              className="transition-transform flex w-12 h-12 rounded-full items-center justify-center hover:bg-primary/5 hover:dark:bg-primary-dark/5 outline-link"
            >
              <IconLightTheme />
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="flex md:hidden justify-between align-center text-base pt-2 text-center fixed below-nav w-full backdrop-filter backdrop-blur-lg backdrop-saturate-200 transition-shadow bg-opacity-90 bg-wash dark:bg-wash-dark dark:bg-opacity-95 px-1.5 lg:pr-5 lg:pl-4 z-50 dark:shadow-nav-dark shadow-nav py-1">
          {routes.map((route: Route) => (
            <Link
              key={route.to}
              to={route.to}
              className="mx-2 w-full py-1.5 px-1.5 xs:px-3 sm:px-4 hover:bg-secondary hover:rounded-full hover:text-secondary-dark"
              activeClassName="transition-transform w-full text-center outline-link py-1.5 px-1.5 xs:px-3 sm:px-4 rounded-full capitalize bg-highlight dark:bg-highlight-dark text-link dark:text-link-dark"
            >
              {route.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default NavBar;
