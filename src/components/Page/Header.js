import React from 'react';
import Nav from './Nav';

const Header = () => (
    <header>
        <div className="container">
            <a className="navbar-brand" href="/">
                <img src="https://picsum.photos/200/200" width="30" height="30" className="d-inline-block align-top" alt="" />
                Bootstrap
            </a>
            <Nav />
        </div>
    </header>
);

export default Header;
