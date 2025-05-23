import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signUpUser } from "../apiCalls/auth";
import { toast, Toaster } from "react-hot-toast";

const Signup = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  async function onFormSubmit(event) {
    event.preventDefault();
    let response = null;
    try {
      response = await signUpUser(user);
      if (response.success) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (e) {
      alert(response.message);
    }
  }
  return (
    <div className="container">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="container-back-img"></div>
      <div className="container-back-color"></div>
      <div className="card">
        <div className="card_title">
          <h1>Create Account</h1>
        </div>
        <div className="form">
          <form onSubmit={onFormSubmit}>
            <div className="column">
              <input
                type="text"
                placeholder="First Name"
                value={user.firstname}
                onChange={(e) =>
                  setUser({ ...user, firstname: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Last Name"
                value={user.lastname}
                onChange={(e) => setUser({ ...user, lastname: e.target.value })}
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="card_terms">
          <span>
            Already have an account?
            <Link to="/login">Login Here</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
