import * as React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import Home from './Home';
import Header from './Header';
import {Routes, Route} from "react-router-dom";
import Counter from './Counter';
import Timer from './Timer';
import Calculator from './Calculator';

export default function App() {
  return (
    <Container fluid id="base-container">
      <Header/>
        <Row>
          <Col>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/timer' element={<Timer />} />
              <Route path='/counter' element={<Counter />} />
              <Route path='/calculator' element={<Calculator />} />
              <Route path='/generator' element={<Generator />} />
              <Route path='/dictionary' element={<Dictionary />} />
              <Route path='/world-clock' element={<WorldClock />} />
            </Routes>
          </Col>
        </Row>
      </Container>
  );
}