import * as React from 'react'
import { Row, Col } from 'react-bootstrap';
import CapitalizeAll from './components/format/CapitalizeAll';
import TextDecapitalize from './components/format/TextDecapitalize';
import Capitalize from './components/format/Capitalize';

function Format() {

  return (
    <Row>
      <Col md={6} sm={12}>
        <Capitalize/>
      </Col>
      <Col md={6} sm={12}>
        <CapitalizeAll/>
      </Col>
      <Col md={6} sm={12}>
        <TextDecapitalize/>
      </Col>
    </Row>
  )
}

export default Format;