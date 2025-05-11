import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from "../../firebase";
// import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "./AuthPage.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    if(!email || !password){
      toast.error('Please fill in all fields');
      return;
    }

    try{
      if(isLogin){
        await signInWithEmailAndPassword(auth, email, password);
        toast.success('Login Successfull!');
      }
      else{
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success('Signup Sucessfull!');
      }
    }
    catch(err){
      toast.error(err.message);
    }
  }

  return (
    <div className="auth-container">
      <h1>{isLogin ? "Login" : "SignUp"}</h1>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter Email"
            id="email"
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter Password"
            id="password"
          />
          <button type="submit">{isLogin ? "Login" : "Signup"}</button>
        </form>

        <div className="img-div">
          <DotLottieReact
            src="https://lottie.host/6bc08f14-f6c8-4dae-970c-771e64a71988/2xiyvb3DBc.lottie"
            loop
            autoplay
          />
        </div>
      </div>

      <button className="toggle-btn" onClick={() => setIsLogin(!isLogin)}>
        {isLogin
          ? "Don't have an account? Sign up"
          : "Already have an account? Login"}
      </button>
    </div>
  );
};

export default AuthPage;
