import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
    <>
        <ul className="navList">
            <li><Link className="linkNav" to="/personnes">Personnes</Link></li>
            <li><Link className="linkNav" to="/formulaire">Formulaire</Link></li>
            <li><Link className="linkNav" to="/">Audi</Link></li>
            <li><Link className="linkNav" to="/">Aston Martin</Link></li>
            <li><Link className="linkNav" to="/">Porsche</Link></li>
        </ul>
  </>
);

export default Nav;
