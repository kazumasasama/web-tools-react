import * as React from 'react'
import MinTimer from './components/timer/MinTimer.js';
import SecTimer from './components/timer/SecTimer.js'
import { Row, Col } from 'react-bootstrap';

function Timer() {
  return (
    <Row>
      <Col sm={6} lg={4}>
        <SecTimer/>
      </Col>
      <Col sm={6} lg={4}>
        <MinTimer/>
      </Col>
    </Row>
  )
}

export default Timer;