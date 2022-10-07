import * as React from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { useLocation } from "react-router-dom";
import LiveClock from './components/clock/LiveClock';



function Header() {
  let brand
  const location = useLocation();
  if (location.pathname !== '/') {
    brand = (
      <Navbar.Brand>
        <LinkContainer to='/'>
          <h1>
            Web-Tools
          </h1>
        </LinkContainer>
      </Navbar.Brand>
    )
  }

  return (
    <>
      <Navbar expand='xl'>
        {brand}
        <LiveClock className="justify-content-end"/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant='pills' className='me-auto'>
            <Nav.Item as='ul'>
              <LinkContainer to='/'>
                <Button variant="dark">Home</Button>
              </LinkContainer>{' '}
              <LinkContainer to='/counter'>
                <Button variant="dark">Counter</Button>
              </LinkContainer>{' '}
              <LinkContainer to='/timer'>
                <Button variant="dark">Timer</Button>
              </LinkContainer>{' '}
              <LinkContainer to='/calculator'>
                <Button variant="dark">Calculator</Button>
              </LinkContainer>{' '}
              <LinkContainer to='/generator'>
                <Button variant="dark">Generator</Button>
              </LinkContainer>{' '}
              <LinkContainer to='/dictionary'>
                <Button variant="dark">Dictionary</Button>
              </LinkContainer>{' '}
              <LinkContainer to='/world-clock'>
                <Button variant="dark">World Clock</Button>
              </LinkContainer>{' '}
              <LinkContainer to='/format'>
                <Button variant="dark">Format</Button>
              </LinkContainer>{' '}
              <LinkContainer to='/sort'>
                <Button variant="dark">Sort</Button>
              </LinkContainer>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header;