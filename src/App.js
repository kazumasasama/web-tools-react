import * as React from 'react'
import { Container } from 'react-bootstrap';
import Home from './Home';
import Header from './Header';
import { Routes, Route } from "react-router-dom";
import Counter from './Counter';
import Timer from './Timer';
import Calculator from './Calculator';

export default function App() {
  return (
    <Container fluid>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/timer' element={<Timer />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/calculator' element={<Calculator />} />
      </Routes>
    </Container>
  );
}