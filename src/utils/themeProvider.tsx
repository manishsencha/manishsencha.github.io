import React, { ReactNode, useEffect } from "react";

export const themeContext = React.createContext({
  isDark: true,
  toggleTheme: () => {},
});
type ChildrenReactNode = {
  children: ReactNode;
};
const ThemeProvider: React.FC<ChildrenReactNode> = ({ children }) => {
  const [isDark, setIsDark] = React.useState<boolean>(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  useEffect(() => {
    if (isDark) {
      setTimeout(
        () => document.querySelector("html")?.classList.add("dark"),
        1000
      );
    } else {
      setTimeout(
        () => document.querySelector("html")?.classList.remove("dark"),
        1000
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
