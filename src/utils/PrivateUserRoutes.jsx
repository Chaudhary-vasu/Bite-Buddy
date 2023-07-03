import { Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../store/AuthContext";

const PrivateUserRoute = ({ children, ...rest }) => {
  console.log("Private Route Works.");
  let {user} = useContext(AuthContext);  
  return (
    <>{user ? children : <Navigate to="/" />}</>
  );
};

export default PrivateUserRoute;
