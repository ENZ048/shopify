import React, { useEffect, useState } from "react";
import axios from "axios";
import { HashLoader } from "react-spinners";
import UserCard from "../../components/UserCard/UserCard"
import './UsersPage.css'

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [filteredGender, setFilteredGender] = useState("all");
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    setLoading(true);

    try {
      const res = await axios.get("https://randomuser.me/api/?results=20");
      console.log(res.data.results)
      setUsers(res.data.results);
    } catch (error) {
      console.log("Error in fetching users", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) => {
    if (filteredGender === "all") {
      return true;
    } else {
      return user.gender === filteredGender;
    }
  });

  return (
    <div className="users-page">
      <h1>Users</h1>

      <div className="gender-filters">
        <label>
          {" "}
          <input
            type="radio"
            name="gender"
            value="all"
            checked={filteredGender === "all"}
            onChange={(e) => setFilteredGender(e.target.value)}
          />
          All
        </label>
        <label>
          {" "}
          <input
            type="radio"
            name="gender"
            value="male"
            checked={filteredGender === "male"}
            onChange={(e) => setFilteredGender(e.target.value)}
          />
          Male
        </label>
        <label>
          {" "}
          <input
            type="radio"
            name="gender"
            value="female"
            checked={filteredGender === "female"}
            onChange={(e) => setFilteredGender(e.target.value)}
          />
          Female
        </label>
      </div>

      <div className="users-container">
        {loading ? (
          <HashLoader
            color={"#1e3c72"}
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : filteredUsers.length ? (
          filteredUsers.map((user, index) => (
            <UserCard key={index} user={user} />
          ))
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
}
