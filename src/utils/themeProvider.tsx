import React, { ReactNode, useContext, useEffect } from "react";

export const themeContext = React.createContext({
  isDark: true,
  toggleTheme: () => {},
});
export const useTheme = () => {
  return useContext(themeContext);
};
type ChildrenReactNode = {
  children: ReactNode;
};

const isBrowser = typeof window !== "undefined";
const ThemeProvider: React.FC<ChildrenReactNode> = ({ children }) => {
  let localStorageTheme;
  if (isBrowser) {
    localStorageTheme = window.localStorage.getItem("currentTheme");
  }

  const [isDark, setIsDark] = React.useState<boolean>(
    localStorageTheme == "dark" ? true : false
  );
  const toggleTheme = () => {
    setIsDark((isDark) => !isDark);
    console.log("THEME CHANGED");
  };
  useEffect(() => {
    if (isDark) {
      document.querySelector("html")?.classList.add("dark");
      window.localStorage.setItem("currentTheme", "dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
      window.localStorage.setItem("currentTheme", "light");
    }
  }, [isDark]);
  return (
    <themeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
