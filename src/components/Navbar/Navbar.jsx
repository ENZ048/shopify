import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import "./Navbar.css";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        toast.success("Logged out successfully!");
        navigate("/auth");
      })
      .catch((err) => {
        toast.error("Error in Log out");
        console.log(err);
      });
  };

  if (!user) {
    return null;
  }
  return (
    <nav>
      <div className="logo">Shopify</div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </div>

      <div className={`links ${menuOpen ? "show" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Users
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Contact Us
        </NavLink>

        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}
