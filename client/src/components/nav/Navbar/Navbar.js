import React from "react";
import "./Navbar.css";
import navbarItems from "../NavbarItems";
import { Link } from "react-router-dom";
import { FaBeer } from 'react-icons/fa';
import Logo from "../../Logo";


const Navbar = ({ toggle }) => {
  return (
    <nav>

        <Logo className='bar-logo' width='2rem' />
      <div className="menu-items">
        {navbarItems.map((item, index) => (
          <Link className="link" to={item.link} key={index}>
            {item.title}
          </Link>
        ))}
      </div>
      <div className="icons">

        <div className="mobile-menu-icon">
          <FaBeer onClick={toggle} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
