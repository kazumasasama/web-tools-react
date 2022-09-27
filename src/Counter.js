import * as React from 'react'
import TextCounter from './components/TextCounter';
import TapCounter from './components/TapCounter';
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