import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import BASE_URL from "../../api/api";
import "./Contactus.css";

const ContactUs = () => {
  document.title = "Bite-Buddy | Contact Us";

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [mobile, setMobile] = useState("");
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    const authTokens = JSON.parse(localStorage.getItem("authTokens"));
    if (!authTokens || !authTokens.access) {
      // User is not logged in, set shouldRedirect to true
      setShouldRedirect(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const authTokens = JSON.parse(localStorage.getItem("authTokens"));
    const accessToken = authTokens.access;

    const requestData = {
      name: name,
      message: message,
      mobile: mobile,
    };

    fetch(`${BASE_URL}/contact-us/`, {
      method: "POST",
      body: JSON.stringify(requestData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error occurred while submitting the form.");
        }
      })
      .then((data) => {
        alert("Your feedback is shared with us. Thanks!");
        setName("");
        setMessage("");
        setMobile("");
      })
      .catch((error) => {
        alert(error.message);
        setName("");
        setMessage("");
        setMobile("");
      });
  };

  if (shouldRedirect) {
    // Redirect to login page
    return <Navigate to="/login" />;
  }

  return (
    <div className="contact-container">
      <h2>Your Feedback Matters.</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Message:
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <label>
          Mobile:
          <textarea
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
