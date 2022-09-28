import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import * as moment from 'moment-timezone'
import { Row, Col, Card } from 'react-bootstrap';

function WorldClock() {
  const [local, setLocal] = useState(moment().format('HH:mm:ss'));
  const [newYork, setNewYork] = useState(moment().tz('America/New_York').format('HH:mm:ss'));
  const [los, setLos] = useState(moment().tz('America/Los_Angeles').format('HH:mm:ss'));
  const [london, setLondon] = useState(moment().tz('Europe/London').format('HH:mm:ss'));
  const [paris, setParis] = useState(moment().tz('Europe/Paris').format('HH:mm:ss'));
  const [tokyo, setTokyo] = useState(moment().tz('Asia/Tokyo').format('HH:mm:ss'));

  useEffect(() => {
    const Local = setInterval(() => setLocal(moment().format()), 1000);
    const NewYork = setInterval(() => setNewYork(moment().tz('America/New_York').format('HH:mm:ss')), 1000);
    const LosAngeles = setInterval(() => setNewYork(moment().tz('America/Los_Angeles').format('HH:mm:ss')), 1000);
    const London = setInterval(() => setLondon(moment().tz('Europe/London').format('HH:mm:ss')), 1000);
    const Paris = setInterval(() => setParis(moment().tz('Europe/Paris').format('HH:mm:ss')), 1000);
    const Tokyo = setInterval(() => setTokyo(moment().tz('Asia/Tokyo').format('HH:mm:ss')), 1000);

    return () => {
      clearInterval(Local);
      clearInterval(NewYork);
      clearInterval(LosAngeles);
      clearInterval(London);
      clearInterval(Paris);
      clearInterval(Tokyo);
    };
  }, []);

  return (
    <Row>
      <Col lg={3} md={4} sm={6}>
        <Card>
          <Card.Header className='text-center'>
            <Card.Title><h2>Local</h2></Card.Title>
          </Card.Header>
          <Card.Body className='d-flex justify-content-center'>
            <Clock
              value={local}
              renderNumbers
            />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={3} md={4} sm={6}>
        <Card>
          <Card.Header className='text-center'>
            <Card.Title><h2>New York</h2></Card.Title>
          </Card.Header>
          <Card.Body className='d-flex justify-content-center'>
            <Clock
              value={newYork}
              renderNumbers
            />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={3} md={4} sm={6}>
        <Card>
          <Card.Header className='text-center'>
            <Card.Title><h2>Los Angeles</h2></Card.Title>
          </Card.Header>
          <Card.Body className='d-flex justify-content-center'>
            <Clock
              value={los}
              renderNumbers
            />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={3} md={4} sm={6}>
        <Card>
          <Card.Header className='text-center'>
            <Card.Title><h2>London</h2></Card.Title>
          </Card.Header>
          <Card.Body className='d-flex justify-content-center'>
            <Clock
              value={london}
              renderNumbers
            />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={3} md={4} sm={6}>
        <Card>
          <Card.Header className='text-center'>
            <Card.Title><h2>Paris</h2></Card.Title>
          </Card.Header>
          <Card.Body className='d-flex justify-content-center'>
            <Clock
              value={paris}
              renderNumbers
            />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={3} md={4} sm={6}>
        <Card>
          <Card.Header className='text-center'>
            <Card.Title><h2>Tokyo</h2></Card.Title>
          </Card.Header>
          <Card.Body className='d-flex justify-content-center'>
            <Clock
              value={tokyo}
              renderNumbers
            />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default WorldClock;

// Wed Sep 28 2022 17:05:04 GMT-0400 (Eastern Daylight Time)