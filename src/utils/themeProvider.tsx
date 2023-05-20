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
  const [isDark, setIsDark] = React.useState<boolean>(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  useEffect(() => {
    if (isDark) {
      document.querySelector("html")?.classList.add("dark");
    }
    else {
      document.querySelector("html")?.classList.remove("dark");
      
    }
  }, [isDark]);
  return (
    <themeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
