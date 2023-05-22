import React, { ReactNode } from "react";
import NavBar from "../NavBar";
import ThemeProvider from "../../utils/themeProvider";
import { ToastContainer } from "react-toastify";
type LayoutProp = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProp> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen h-full font-text font-medium antialiased text-lg bg-wash dark:bg-wash-dark text-secondary dark:text-secondary-dark leading-base">
        <NavBar />
        <main className="min-vh h-full">{children}</main>
        <ToastContainer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
