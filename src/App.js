import * as React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import Home from './Home';
import Header from './Header';
import {Routes, Route} from "react-router-dom";
import Counter from './Counter';
import Timer from './Timer';
import Calculator from './Calculator';
<<<<<<< HEAD
=======
import Generator from './Generator';
import Dictionary from './Dictionary';
import WorldClock from './WorldClock';
import Format from './Format';
import Sort from './Sort';
>>>>>>> dd8914d3f713931ef1a853f01cfb4cdb38a84398

export default function App() {
  return (
<<<<<<< HEAD
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
=======
    <Container fluid>
      {header}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/timer' element={<Timer />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/generator' element={<Generator />} />
        <Route path='/dictionary' element={<Dictionary />} />
        <Route path='/world-clock' element={<WorldClock />} />
        <Route path='/format' element={<Format />} />
        <Route path='/sort' element={<Sort />} />
      </Routes>
    </Container>
>>>>>>> dd8914d3f713931ef1a853f01cfb4cdb38a84398
  );
}