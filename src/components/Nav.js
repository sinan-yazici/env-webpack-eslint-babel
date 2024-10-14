import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
    <>
        <ul className="navList">
            <li><Link className="linkNav" to="/">Mercedes</Link></li>
            <li><Link className="linkNav" to="/">Bmw</Link></li>
            <li><Link className="linkNav" to="/">Audi</Link></li>
            <li><Link className="linkNav" to="/">Aston Martin</Link></li>
            <li><Link className="linkNav" to="/">Porsche</Link></li>
        </ul>
  </>
);

export default Nav;
