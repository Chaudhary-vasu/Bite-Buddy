import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../api/api";
import classes from "./RegisterPassword.module.css";
const RegisterPage = () => {
  document.title = "Bite-Buddy | Register";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password and Confirm Password must match.");
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/signup/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        // Registration successful
        alert("Registeration Successfull. You can login now.");
        navigate("/login");
      } else {
        // Registration failed
        const errorData = await response.json();
        console.log("Registration failed:", errorData);
        // Handle the error as needed
      }
    } catch (error) {
      console.error("Error registering user:", error);
      // Handle the error as needed
    }
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Register</h2>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            className={classes.input}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className={classes.input}
            required
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className={classes.input}
            required
          />
        </div>
        <button type="submit" className={classes.button}>Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
