import React, { useState } from "react";
import "./UserProfile.css"; // Import CSS file for UserProfile

const UserProfile = ({ user }) => {
  // State to hold editable profile fields
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({
      ...editedUser,
      [name]: value
    });
  };

  const handleSave = () => {
    // Implement save functionality (e.g., update user profile in backend)
    // Example: You may use an API call here to update the user's profile
    console.log("Save button clicked with updated user:", editedUser);
    // Assuming you have an API or backend update method
    // updateUserInfo(editedUser); // Uncomment and implement as per your backend

    // For demonstration purposes, just log the updated user data
    console.log("Updated user:", editedUser);
    // You may also want to update the user in your app state or context if needed
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={editedUser.username}
          onChange={handleInputChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={editedUser.email}
          onChange={handleInputChange}
        />

        {/* Add more fields as per your user profile structure */}
        
        <div className="form-buttons">
          <button type="button" onClick={handleSave}>Save</button>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
