import React from "react";
import "./UserCard.css";

export default function UserCard({ user }) {
  return (
    <div className="user-card">
      <img src={user.picture.medium} alt={user.name.first} />
      <h4>{user.name.first} {user.name.last}</h4>
      <p className="email">Email: {user.email}</p>
      <p>Gender: {user.gender}</p>
    </div>
  );
}
