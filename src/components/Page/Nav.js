import React from 'react';
import { Link } from 'react-router-dom';

const data = [
  {
    id: 1,
    name: 'Home',
    url: '/'
  },
  {
    id: 2,
    name: 'About',
    url: '/about'
  },
  {
    id: 3,
    name: 'Services',
    url: '/services'
  },
  {
    id: 4,
    name: 'Contact',
    url: '/contact'
  }
];

const Nav = () => (
    <nav>
        <ul className="navList">
            {data.map((item) => (
            <li key={item.id}>
                <Link className="linkNav" to={item.url}>{item.name}</Link>
            </li>
            ))}
        </ul>
    </nav>
);

export default Nav;
