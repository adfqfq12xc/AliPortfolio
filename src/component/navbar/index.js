import React, { useState } from 'react';
import { FaReact } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import './styles.scss';

export default function Navbar() {
  const data = [
    { label: 'Home', to: 'home' },
    { label: 'AboutMe', to: 'AboutMe' },
    { label: 'Skills', to: 'skills' },
    { label: 'Project', to: 'portfolio' },
    { label: 'Contact', to: 'contact' },
  ];

  const [toggle, setToggle] = useState(false);

  return (
    <nav className='navbar'>
      <div className='navbarcontainer'>
        <Link to={'home'} className='navbarlogo'   smooth={false} duration={5000} offset={-100} >
          <FaReact size={40} />
        </Link>
      </div>
      <ul className={`containerMenu${toggle ? ' active' : ''}`}>
        {data.map((item, key) => (
          <li key={key} className='menuitems'>
            <Link
              to={item.to}
              className='menuitem'
              offset={-60}
              smooth={true}
              duration={50}
              onClick={() => {
                setToggle(false);
              }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className='nav-icon' onClick={() => setToggle(!toggle)}>
        {toggle ? <HiX size={30} /> : <FaBars size={30} />}
      </div>
    </nav>
  );
}