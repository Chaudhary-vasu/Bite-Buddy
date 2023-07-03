import { useContext } from "react";
import AuthContext from "../store/AuthContext";
import { Navigate } from "react-router-dom";
import classes from "./LoginPage.module.css";

const LoginPage = () => {
  document.title = "Bite-Buddy | Login";
  let { loginUser, user } = useContext(AuthContext);
  //   const navigate = useNavigate();
  console.log("user = ", user);
  const loginPage = (
    <div className={classes.container}>
      <h2 className={classes.title}>Login</h2>
      <form onSubmit={loginUser} className={classes.form}>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className={classes.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className={classes.input}
        />
        <button type="submit" className={classes.button}>
          Submit
        </button>
      </form>
    </div>
  );
  return (
    <>
      {!user && loginPage}
      {user && <Navigate to="/" />}
    </>
  );
};

export default LoginPage;
