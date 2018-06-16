import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => (
  <header className="top-bar">
    <div className="top-bar-left">
      <ul className="dropdown menu" data-dropdown-menu>
        <li>
          <Link to={'/frontpage'} className='menu-text'>talk2AM</Link>
        </li>
        <li><Link to={`/profile/${props.id}`}>Account</Link></li>
        <li><Link to={`/calendar/${props.id}`}>Calendar</Link></li>
        <li><Link to={`/projects`}>Projects</Link></li>
      </ul>
    </div>
  </header>
)

export default Navbar
