import classes from "./HeaderBtns.module.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../store/AuthContext";

const HeaderBtns = () => {
  let { user, logoutUser, role } = useContext(AuthContext);
  return (
    <div>
      <span>
        <Link to="/" className={classes.headerbtn}>
          Home
        </Link>
        {user && role === "Admin" && (
          <>
            <Link to="/menu" className={classes.headerbtn}>
              Menu
            </Link>
            <Link to="/feedbacks" className={classes.headerbtn}>
              Feedbacks
            </Link>
          </>
        )}
        {user && role === "Customer" && (
          <Link to="/contact-us" className={classes.headerbtn}>
            Contact Us
          </Link>
        )}
        {user ? (
          <>
            <Link to="/" className={classes.headerbtn} onClick={logoutUser}>
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" className={classes.headerbtn}>
              Login
            </Link>
            <Link to="/signup" className={classes.headerbtn}>
              Signup
            </Link>
          </>
        )}
      </span>
    </div>
  );
};
export default HeaderBtns;
