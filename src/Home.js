import * as React from 'react'
import { Row, Col, Card } from 'react-bootstrap';

function Home() {
  return(
    <Row>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title><h1>Welcome to Web Tools</h1></Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default Home;