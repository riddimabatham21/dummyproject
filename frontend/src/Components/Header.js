import React from "react";

const Header = () => {
  return (
    <>
      <div className="app-header">
        <div className="app-logo">
          <i className="fa fa-comments" aria-hidden="true"></i>
          Quick Chat
        </div>
        <div className="app-user-profile">
          <div className="logged-user-name">John Smith</div>
          <div className="logged-user-profile-pic"> Js</div>
        </div>
      </div>
    </>
  );
};

export default Header;
