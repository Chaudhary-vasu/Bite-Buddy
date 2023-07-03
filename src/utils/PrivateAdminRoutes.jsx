import { Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../store/AuthContext";

const PrivateAdminRoute = ({ children, ...rest }) => {
  console.log("Private Route Works.");
  let {user,role} = useContext(AuthContext);  
  return (
    <>{user && role === 'Admin' ? children : <Navigate to="/login" />}</>
  );
};

export default PrivateAdminRoute;
