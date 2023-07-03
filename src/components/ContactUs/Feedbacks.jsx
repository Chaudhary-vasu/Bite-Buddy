import React, { useEffect, useState } from "react";
import Card from "../../UI/Card";
import ContactItem from "./ContactItem";
import BASE_URL from "../../api/api";
import classes from "../ContactUs/Feedbacks.module.css";

const Feedbacks = () => {
  document.title = "Bite-Buddy | Feedbacks";

  const [contacts, setContacts] = useState([]);
  const [httpError, setHttpError] = useState(false);

  useEffect(() => {
    const fetchContacts = async () => {
      const accessToken = localStorage.getItem("authTokens")
        ? JSON.parse(localStorage.getItem("authTokens")).access
        : null;

      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };

      const response = await fetch(`${BASE_URL}/contact-us/`, { headers });
      let responseData = await response.json();

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const loadedContacts = [];
      for (const i in responseData) {
        loadedContacts.push({
          id: responseData[i].id,
          name: responseData[i].name,
          message: responseData[i].message,
          mobile: responseData[i].mobile,
        });
      }
      setContacts(loadedContacts);
    };
    fetchContacts().catch((error) => {
      setHttpError(error.message);
    });
  }, []);

  if (httpError) {
    return (
      <section>
        <p>{httpError}</p>
      </section>
    );
  }

  const feedbacksList = contacts.map((contact) => (
    <ContactItem
      key={contact.id}
      name={contact.name}
      message={contact.message}
      mobile={contact.mobile}
    />
  ));
    console.log("feedbacksList=", feedbacksList);
  return (
    <>
    <div className={classes.container}>
      <h2 className={classes.title}>Feedbacks</h2>
      {feedbacksList.length === 0 ? (
        <p className={classes.noFeedback}>No feedbacks found.</p>
      ) : (
        <ul className={classes.feedbackList}>
          {feedbacksList.map((feedback) => (
            <li className={classes.feedbackItem}>
              <div className={classes.name}>{feedback.props.name}</div>
              <div className={classes.email}>{feedback.props.mobile}</div>
              <div className={classes.message}>{feedback.props.message}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  );
};

export default Feedbacks;
