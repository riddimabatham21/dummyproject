import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const userState = useSelector((state) => state.userState);

  if (!userState || !userState.user) return <p>Loading user...</p>;

  const { user } = userState;

  <p>:{user?.firstname + " " + user?.lastname} </p>;

  function getInitials() {
    const f = user?.firstname?.[0]?.toUpperCase() || "";
    const l = user?.lastname?.[0]?.toUpperCase() || "";
    return f + l;
  }

  function getFullName() {
    const fname =
      user?.firstname?.charAt(0).toUpperCase() +
      user?.firstname?.slice(1).toLowerCase();
    const lname =
      user?.lastname?.charAt(0).toUpperCase() +
      user?.lastname?.slice(1).toLowerCase();
    return `${fname} ${lname}`;
  }

  return (
    <div className="header">
      <div className="left-icon">
        <img
          src="https://img.icons8.com/ios-filled/50/home.png"
          alt="Home Icon"
        />
        <span>Quick Chat</span>
      </div>
      <div className="user-info">
        <div className="user-avatar">{getInitials()}</div>
        <span>{getFullName()}</span>
      </div>
    </div>
  );
};

export default Home;
