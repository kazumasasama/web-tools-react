import * as React from 'react'
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import LiveClock from './LiveClock';



function Header() {

  return (
    <Navbar expand='lg'>
      <Container>
        <Navbar.Brand href="#home">
          Web-Tools
        </Navbar.Brand>
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
              </LinkContainer>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
        <LiveClock/>
    </Navbar>
  )
}

export default Header;