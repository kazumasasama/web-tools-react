import * as React from 'react'
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { useLocation } from "react-router-dom";
import LiveClock from './LiveClock';



function Header() {
  let brand

  const location = useLocation();
  if (location.pathname !== '/') {
    brand = (
      <Navbar.Brand href="#home">
        Web-Tools
      </Navbar.Brand>
    )
  }

  return (
    <Navbar expand='lg'>
      <Container>
        {brand}
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
              </LinkContainer>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        <LiveClock/>
      </Container>
    </Navbar>
  )
}

export default Header;