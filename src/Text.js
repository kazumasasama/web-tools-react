import * as React from 'react'
import { Row, Col } from 'react-bootstrap';
import TextCapitalize from './components/TextCapitalize';
import TextDecapitalize from './components/TextDecapitalize';

function Text() {
  return (
    <Row>
      <Col>
        <TextCapitalize/>
      </Col>
      <Col>
        <TextDecapitalize/>
      </Col>
    </Row>
  )
}

export default Text;