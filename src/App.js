import * as React from 'react'
import { Container } from 'react-bootstrap';
import { Routes, Route, useLocation } from "react-router-dom";
import Home from './Home';
import Header from './Header';
import Counter from './Counter';
import Timer from './Timer';
import Calculator from './Calculator';
import Generator from './Generator';
import Dictionary from './Dictionary';
import WorldClock from './WorldClock';
import Format from './Format';
import Sort from './Sort';

export default function App() {

  let header
  const location = useLocation();
  if (location.pathname !== '/') {
    header = (
      <Header/>
    )
  }

  return (
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
  );
}