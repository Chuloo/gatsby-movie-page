import React from 'react';
import Link from 'gatsby-link';

const NavBar = () => (
<nav className="top-nav">
        <ul className="top-nav-list">
            <li className="top-nav-list-item">
                <Link to="#" className="nav-item">WATCH TRAILER</Link>
            </li>
            <li className="top-nav-list-item">
                <Link to="#" className="nav-item">CAST & CREW</Link>
            </li>
            <li className="top-nav-list-item">
                <Link to="#" className="nav-item">STORY</Link>
            </li>
        </ul>
        {/* <div className="mobile">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className="mobile-menu">
            <ul>
                <li className="top-nav-list-item">
                    <Link to="#" className="active">WATCH TRAILER</Link>
                </li>
                <li className="top-nav-list-item">
                    <Link to="#">CAST & CREW</Link>
                </li>
                <li className="top-nav-list-item">
                    <Link to="#">STORY</Link>
                </li>
            </ul>
        </div> */}
    </nav>
)
export default NavBar
