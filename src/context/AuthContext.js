"use client";
import { useRouter } from "next/navigation";
import { useState, useContext, createContext } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  return (
    <AuthContext.Provider value={{ user, setUser, loading, setLoading, router}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
