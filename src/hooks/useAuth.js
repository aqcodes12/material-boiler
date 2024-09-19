import { useContext } from "react";
import AuthContext from "../Context/AuthProvider";


// Custom hook to use AuthContext
const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;
