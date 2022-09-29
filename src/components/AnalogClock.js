import { Card } from 'react-bootstrap';
import Clock from 'react-clock';

function AnalogClock(props) {
  return (
    <Card>
      <Card.Header className='text-center'>
        <Card.Title><h2>{props.title}</h2></Card.Title>
      </Card.Header>
      <Card.Body className='d-flex justify-content-center'>
        <div id={props.id}>
          <Card.Title className='text-center'>{props.value.slice(0, -3)}</Card.Title>
          <Clock
            value={props.value}
            renderNumbers
          />
        </div>
      </Card.Body>
    </Card>
  )
}

export default AnalogClock;