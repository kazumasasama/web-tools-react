import * as React from 'react'
import { Nav, Navbar, Button, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { useLocation } from "react-router-dom";

function Header() {
  let home
  const location = useLocation();
  if (location.pathname === '/') {
    home = (
      <Container fluid>
        <Navbar>
          <Nav variant='pills' className='me-auto'>
            <Nav.Item as='ul' className='nav-btn-container'>
              <LinkContainer to='/counter'>
                <Button variant="outline-light">Counter</Button>
              </LinkContainer>{' '}
              <LinkContainer to='/timer'>
                <Button variant="outline-light">Timer</Button>
              </LinkContainer>{' '}
              <LinkContainer to='/calculator'>
                <Button variant="outline-light">Calculator</Button>
              </LinkContainer>{' '}
              <LinkContainer to='/generator'>
                <Button variant="outline-light">Generator</Button>
              </LinkContainer>{' '}
              <LinkContainer to='/dictionary'>
                <Button variant="outline-light">Dictionary</Button>
              </LinkContainer>{' '}
              <LinkContainer to='/world-clock'>
                <Button variant="outline-light">World Clock</Button>
              </LinkContainer>{' '}
              <LinkContainer to='/format'>
                <Button variant="outline-light">Format</Button>
              </LinkContainer>{' '}
              <LinkContainer to='/sort'>
                <Button variant="outline-light">Sort</Button>
              </LinkContainer>{' '}
              <LinkContainer to='/api'>
                <Button variant="outline-light">Api</Button>
              </LinkContainer>
            </Nav.Item>
          </Nav>
        </Navbar>
      </Container>
    )
  } else {
    home = (
      <Container fluid>
        <Navbar.Brand>
          <LinkContainer to='/'>
            <h1 className='text-gradation'>
              Web-Tools
            </h1>
          </LinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant='pills' className='me-auto'>
            <Nav.Item as='ul' className='nav-btn-container'>
              <LinkContainer to='/'>
                <Button variant="outline-light">Home</Button>
              </LinkContainer>{' '}
              <LinkContainer to='/counter'>
                <Button variant="outline-light">Counter</Button>
              </LinkContainer>{' '}
              <LinkContainer to='/timer'>
                <Button variant="outline-light">Timer</Button>
              </LinkContainer>{' '}
              <LinkContainer to='/calculator'>
                <Button variant="outline-light">Calculator</Button>
              </LinkContainer>{' '}
              <LinkContainer to='/generator'>
                <Button variant="outline-light">Generator</Button>
              </LinkContainer>{' '}
              <LinkContainer to='/dictionary'>
                <Button variant="outline-light">Dictionary</Button>
              </LinkContainer>{' '}
              <LinkContainer to='/world-clock'>
                <Button variant="outline-light">World Clock</Button>
              </LinkContainer>{' '}
              <LinkContainer to='/format'>
                <Button variant="outline-light">Format</Button>
              </LinkContainer>{' '}
              <LinkContainer to='/sort'>
                <Button variant="outline-light">Sort</Button>
              </LinkContainer>{' '}
              <LinkContainer to='/api'>
                <Button variant="outline-light">Api</Button>
              </LinkContainer>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    )
  }

  return (
    <>
      <Navbar expand='xl'>
        {home}
      </Navbar>
    </>
  )
}

export default Header;