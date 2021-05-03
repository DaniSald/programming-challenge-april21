import "./header.css";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/filter">Filter movies</Link>
      </li>

      <li>
        <Link to="/rank">Top rank</Link>
      </li>
    </ul>

    <hr />
  </div>
);

export default Header;
