import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <div className="home-content">
        <h1>
          Welcome to <span className="brand-name">Shopify</span>
        </h1>
        <p className="subtitle">
          Discover quality fashion, top electronics, and exclusive deals—all in
          one place.
        </p>
        <button onClick={() => navigate("/products")} className="explore-btn">
          Explore Products
        </button>
      </div>
      <div className="home-illustration">
        <DotLottieReact
          src="https://lottie.host/1e74b3ba-710b-4086-bd3a-2579a46a2550/A4Gh0WI0GB.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default Home;
