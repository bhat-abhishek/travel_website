import { createContext,useState } from "react";
import { decodeToken, isExpired } from "react-jwt";

export const authContext = createContext();

export const AuthState = ({ children }) => {
  const token = localStorage.getItem("token") || null;
  let isMyTokenExpired = isExpired(token);
  const [decodedToken, setDecodedToken] = useState(decodeToken(token));
  return (
    <authContext.Provider
      value={{ decodedToken, isMyTokenExpired, setDecodedToken }}
    >
      {children}
    </authContext.Provider>
  );
};
