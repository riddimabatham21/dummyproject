import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUpUser } from "../apiCalls/auth";
import { toast, Toaster } from "react-hot-toast";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  async function onFormSubmit(event) {
    event.preventDefault();
    let response = null;
    try {
      response = await loginUpUser(user);
      if (response.success) {
        toast.success(response.message);
        localStorage.setItem("token", response.token);
        // window.location.href = "/buy";
        window.location.href = "/Home";
      } else {
        toast.error(response.message);
      }
    } catch (e) {
      toast.error(response.message);
    }
  }

  return (
    <div>
      {/* Add this line to enable toast notifications */}
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container">
        <div className="container-back-img"></div>
        <div className="container-back-color"></div>
        <div className="card">
          <div className="card_title">
            <h1>Login Here</h1>
          </div>
          <div className="form">
            <form onSubmit={onFormSubmit}>
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
              <button>Login</button>
            </form>
          </div>
          <div className="card_terms">
            <span>
              Don't have an account yet?
              <Link to="/signup">Signup Here</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
