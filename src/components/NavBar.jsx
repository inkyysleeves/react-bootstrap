import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import '../css/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="logo">
        <FontAwesomeIcon icon={faHome} />
        <span>
       Surreal Estate
        </span>
      </div>
      <ul className="Nav">
        <Link className="item" to="/">
          Home
        </Link>
        <Link className="item" to="/AddProperty">
            Add Property
        </Link>
        <Link className="item" to="/properties">
            Properties
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
