import React, { useState } from 'react';
import BASE_URL from '../api/api';

const ResetPassword = () => {
  document.title = "Bite-Buddy | Reset Password";

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const authtoken = JSON.parse(localStorage.getItem('authTokens')); // Assuming you have stored the access token in local storage
      console.log("authToken=",authtoken)
      const accessToken = authtoken.access;
      console.log("accessToken=",accessToken)
      const response = await fetch(`${BASE_URL}/reset-password/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          old_password: oldPassword,
          new_password: newPassword,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Password Changes Succesfully.")
        setOldPassword('');
        setNewPassword('');
      } else {
        alert("Some error occured.Please try again.")
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="old-password">Old Password</label>
          <input
            type="password"
            id="old-password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="new-password">New Password</label>
          <input
            type="password"
            id="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
