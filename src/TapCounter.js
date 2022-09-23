import * as React from 'react'
import {Card, Button} from 'react-bootstrap';

function TapCounter() {
  const [count, setCount] = React.useState(0)

  function handlePlus() {
    setCount(count + 1)
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>Tap Counter</Card.Title>
        <div className='d-flex justify-content-evenly'>
          <Button variant='primary' onClick={handlePlus}>Count++</Button>
          <Card.Title>{count}</Card.Title>
        </div>
      </Card.Body>
    </Card>
  )
}

export default TapCounter