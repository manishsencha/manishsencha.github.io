import React, { ReactNode } from "react";
import NavBar from "../sections/NavBar";
import ThemeProvider from "../../utils/themeProvider";
import Switch from "../atomic-components/Switch";
type LayoutProp = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProp> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <NavBar />
        <main className="main-content bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light-primary">
          <div className="container mx-auto">{children}</div>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
