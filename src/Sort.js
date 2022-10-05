import React from 'react'
import { Row, Col } from 'react-bootstrap';
import ListSort from './components/ListSort';

function Sort() {
  return (
    <Row>
      <Col sm={6}>
        <ListSort/>
      </Col>
    </Row>
  )
}

export default Sort;