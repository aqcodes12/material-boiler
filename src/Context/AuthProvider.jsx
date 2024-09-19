import { createContext, useState } from "react";

// Create the context with default values
const AuthContext = createContext({});

// Define the AuthProvider component
export const AuthProvider = ({ children }) => {
  // State to hold authentication information
  const [auth, setAuth] = useState({
    token: "jwt token",
    user_id: "userId",
    username: "MOIN DAA",
    role: "ROLE_ADMIN",
  });

  // Provide the auth context to children components
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

// Export AuthContext for use in custom hooks
export default AuthContext;
