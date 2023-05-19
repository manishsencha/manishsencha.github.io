import React, { ReactNode } from "react";
import NavBar from "../NavBar";
import ThemeProvider from "../../utils/themeProvider";
type LayoutProp = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProp> = ({ children }) => {
  return (
    <ThemeProvider>
      <NavBar />
      <main className="main-content bg-white dark:bg-black">{children}</main>
    </ThemeProvider>
  );
};

export default Layout;
