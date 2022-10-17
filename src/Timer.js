import * as React from 'react'
import Stopwatch from './components/timer/Stopwatch.js';
import { Row, Col } from 'react-bootstrap';

function Timer() {
  return (
    <Row>
      <Col sm={6} lg={4}>
        <Stopwatch/>
      </Col>
    </Row>
  )
}

export default Timer;