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
const ThemeProvider: React.FC<ChildrenReactNode> = ({ children }) => {
  let localStorageTheme = localStorage.getItem("currentTheme");

  const [isDark, setIsDark] = React.useState<boolean>(
    localStorageTheme == "dark" ? true : false
  );
  const toggleTheme = () => {
    setIsDark((isDark) => !isDark);
    console.log("THEME CHANGED");
  };
  useEffect(() => {
    if (isDark) {
      console.log("DARK CLASS ADDED");
      document.querySelector("html")?.classList.add("dark");
      localStorage.setItem("currentTheme", "dark");
      console.log("DARK SET");
      console.log(
        "SETTED THEME : ",
        localStorage.getItem("currentTheme")
      );
    } else {
      console.log("DARK CLASS REMOVED");
      document.querySelector("html")?.classList.remove("dark");
      localStorage.setItem("currentTheme", "light");
      console.log("LIGHT SET");
      console.log(
        "SETTED THEME : ",
        localStorage.getItem("currentTheme")
      );
    }
  }, [isDark]);
  return (
    <themeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;