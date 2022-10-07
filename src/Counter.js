import * as React from 'react'
import TextCounter from './components/counter/TextCounter';
import TapCounter from './components/counter/TapCounter';
import { Row, Col } from 'react-bootstrap';

function Counter() {
  return (
    <Row>
      <Col sm={6}>
        <TapCounter/>
      </Col>
      <Col sm={6}>
        <TextCounter/>
      </Col>
    </Row>
  )
}

export default Counter;