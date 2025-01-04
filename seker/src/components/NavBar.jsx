
import React from "react";
import arrowIcon from "../assets/arrow.svg";

function NavBar() {
  return (
    <div className="nav">
      <div>
        <span className="logo">Seker</span>
      </div>
      <ul>
        <li>
          <a href="">Images</a>
        </li>
        <li>
          <a href="">Videos</a>
        </li>
        <li>
          <a href="">Maps</a>
        </li>
        <li>
          <a href="">News</a>
        </li>
        <li>
          <a href="">Product</a>
        </li>
      </ul>
      <div>
        <a className="signIn">
          Sign in
          <img className="arrowIcon" src={arrowIcon} alt="Arrow Icon" />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
