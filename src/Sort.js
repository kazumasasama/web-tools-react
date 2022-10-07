import React from 'react'
import { Row, Col } from 'react-bootstrap';
import ListSort from './components/ListSort';

function Sort() {
  return (
    <Row>
      <Col lg={6} md={12}>
        <ListSort/>
      </Col>
    </Row>
  )
}

export default Sort;