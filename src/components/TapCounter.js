import * as React from 'react'
import {Card, Button} from 'react-bootstrap';

function TapCounter() {
  const [count, setCount] = React.useState(0)

  function handlePlus() {
    setCount(count + 1)
  }

  return (
    <Card className="function-container"  sm={6}>
      <Card.Body>
        <Card.Title><h1>Tap Counter</h1></Card.Title>
        <div className='d-flex justify-content-evenly'>
          <Button variant='primary' onClick={handlePlus}>Tap Me</Button>
          <Card.Text className='result-number'>{count}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  )
}

export default TapCounter