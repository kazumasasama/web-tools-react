import React from 'react';
import { Card } from 'react-bootstrap';
import Clock from 'react-clock';

function AnalogClock(props) {
  return (
    <Card className='shadow'>
      <Card.Header className='text-center'>
        <Card.Title><h4>{props.title}</h4></Card.Title>
      </Card.Header>
      <Card.Body className='d-flex justify-content-center'>
        <div id={props.id}>
          <Card.Title className='text-center'>{props.value.time.slice(0, -3)}</Card.Title>
          <Clock
            value={props.value.time}
            renderNumbers
          />
        </div>
      </Card.Body>
      <Card.Footer className='d-flex justify-content-around sunset-sunrise'>
        <div className='text-center'>
          <small>Sunrise</small>
          <p>{props.value.sunriseSTR}</p>
        </div>
        <div className='text-center'>
          <small>Sunset</small>
          <p>{props.value.sunsetSTR}</p>
        </div>
      </Card.Footer>
    </Card>
  )
}

export default AnalogClock;