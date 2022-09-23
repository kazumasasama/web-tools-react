import * as React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import TapCounter from './TapCounter';
import Home from './Home';
import Header from './Header';
import {Routes, Route} from "react-router-dom";
import TextCounter from './TextCounter';

export default function App() {
  return (
    <Container fluid>
      <Header/>
        <Row>
          <Col>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/tap-counter' element={<TapCounter />} />
              <Route path='/text-counter' element={<TextCounter />} />
            </Routes>
          </Col>
        </Row>
      </Container>
  );
}