import * as React from 'react'
import { Row, Col } from 'react-bootstrap';
import DictEng from './components/DictEng';

function Dictionary() {
  return (
    <Row>
      <Col sm={6}>
        <DictEng/>
      </Col>
    </Row>
  )
}

export default Dictionary;