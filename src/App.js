// import * as React from 'react'
import { Container } from 'react-bootstrap';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Header from './Header';
import Counter from './Counter';
import Timer from './Timer';
import Calculator from './Calculator';
import Generator from './Generator';
import Dictionary from './Dictionary';
import WorldClock from './WorldClock';

export default function App() {
  return (
    <Container fluid>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/timer' element={<Timer />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/generator' element={<Generator />} />
        <Route path='/dictionary' element={<Dictionary />} />
        <Route path='/world-clock' element={<WorldClock />} />
      </Routes>
    </Container>
  );
}