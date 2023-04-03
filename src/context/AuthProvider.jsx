import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    // email: "",
    // password: "",
    // accessToken: "",
    // userId: "",
    email: "amanVar06",
    password: "aman1234",
    role: "GeneralUser",
    // role: "Recruiter",
    accessToken: "fhahfhawoeasofh",
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
