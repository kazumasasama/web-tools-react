import * as React from 'react'
import { Row, Col } from 'react-bootstrap';
import PasswordGenerator from './components/PasswordGenerator';

function Generator() {

  return (
    <Row>
      <Col sm={6}>
        <PasswordGenerator/>
      </Col>
    </Row>
  )
}

export default Generator;