import React from "react";

const ContactItem = (props) => {
  return (
    <li >
      <div>
        <h3 >{props.name}</h3>
        <p >{props.message}</p>
        <p >{props.mobile}</p>
        <p >{props.email}</p>
        <br/>
      </div>
    </li>
  );
};

export default ContactItem;