import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(
    JSON.parse(localStorage.getItem("admin")) || null
  );

  const login = (admin, token) => {
    localStorage.setItem("admin", JSON.stringify(admin));
    localStorage.setItem("token", token);
    setAdmin(admin);
  };

  const logout = () => {
    localStorage.removeItem("admin");
    localStorage.removeItem("token");
    setAdmin(null);
  };

  return (
    <AuthContext.Provider value={{ admin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}