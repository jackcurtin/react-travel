import React, {useState} from 'react';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <React.Fragment>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        TRVL <i className="fab fa-typo3"></i>
                    </Link>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default Navbar;
