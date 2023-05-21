import React, { ReactNode } from "react";
import NavBar from "../sections/NavBar";
import ThemeProvider from "../../utils/themeProvider";
type LayoutProp = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProp> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen font-text font-medium antialiased text-lg bg-wash dark:bg-wash-dark text-secondary dark:text-secondary-dark leading-base">
        <NavBar />
        <main>
          <div className="container mx-auto">{children}</div>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
