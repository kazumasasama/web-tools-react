import * as React from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import Header from './Header';

function Home() {
  return(
    <Row>
      <Col className='home-card-container'>
        <Card className='home-card'>
          <Card.Body>
            <Card.Title><h1>Welcome to Web Tools</h1></Card.Title>
            <Header/>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default Home;