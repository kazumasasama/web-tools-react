import * as React from 'react'
import { Row, Col } from 'react-bootstrap';
import Header from './Header';

function Home() {
  return(
    <Row>
      <Col xxl={12} className='d-flex justify-content-center'>
        <h1 className='text-gradation page-title'>Web Tools App</h1>
      </Col>
      <Col xxl={12} className="d-flex justify-content-center">
        <p className='text-white'>Web Tools app provide useful tools.</p>
      </Col>
      <Col xxl={12} className="d-flex justify-content-center">
        <p className='text-white'><span style={{fontWeight: 'bold'}}>NO COST, 24 hours 365days!</span></p>
      </Col>
      <Col xxl={12} className="d-flex justify-content-center">
        <Header/>
      </Col>
    </Row>
  )
}

export default Home;