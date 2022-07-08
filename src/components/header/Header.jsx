import React from 'react';
import { Link } from "react-router-dom";

import { BsBehance } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { MdMenu } from 'react-icons/md';
import "./Header.css";

const Header = () => {
  return (
    <div className='header'>

        <div className="container">

        <div className='logo'>
            <Link to="/"><h4>The Name Of Company <span>|</span> BLA BLA BLA</h4></ Link>
        </div>

        <nav>
            <ul>
                <li><Link to="/works">Work</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
                <li>
                    <a href="#"><BsInstagram /></a>
                    <a href="#"><BsBehance /></a>
                </li>
            </ul>
        </nav>

        <MdMenu />

        </div>

    </div>
  )
}

export default Header;