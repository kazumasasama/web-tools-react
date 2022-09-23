import * as React from 'react'
import { Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import LiveClock from './LiveClock';

function BasicExample() {
  return (
    <Nav
      activeKey="/"
    >
      <LiveClock/>
    </Nav>
  );
}


function Header() {

  return (
    <Nav
      activeKey={'/'}
    >
        <Nav.Item>
          <Link to='/'>Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to='/tap-counter'>Tap Counter</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to='/text-counter'>Text Counter</Link>
        </Nav.Item>
        <li className="nav-item">
        </li>
      <BasicExample/>
    </Nav>
  )
}

export default Header;