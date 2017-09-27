import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#testapp-navbar" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link to='/' className="navbar-brand">Movie Collection</Link>
                </div>

                <div className="collapse navbar-collapse" id="testapp-navbar">
                    <ul className="nav navbar-nav">
                        <li><Link to="/movieCollection">Collection</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;