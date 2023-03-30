import * as React from "react";
import { AuthorizationContext } from "../context";

interface UserProviderProps {
  children: JSX.Element;
}
const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [theme, setTheme] = React.useState(
    localStorage.getItem("app-theme") || "ligth"
  );

  React.useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  const toggleTheme = (): void => {
    setTheme((prev: string) => (prev === "ligth" ? "dark" : "ligth"));
  };

  return (
    <AuthorizationContext.Provider
      value={{
        user,
        setUser,
        toggleTheme,
        theme,
      }}
    >
      {children}
    </AuthorizationContext.Provider>
  );
};

export default UserProvider;
