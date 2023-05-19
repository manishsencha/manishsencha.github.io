import React, { ReactNode } from "react";
import NavBar from "../NavBar";
import ThemeProvider from "../../utils/themeProvider";
type LayoutProp = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProp> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <NavBar />
        <main className="main-content bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light-primary">
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
