import * as React from 'react'
import {Card, Button} from 'react-bootstrap';

function TapCounter() {
  const [count, setCount] = React.useState(0)

  function handlePlus() {
    setCount(count + 1)
  }

  return (
    <Card className="function-container shadow-lg"  sm={6}>
      <Card.Header>
        <Card.Title><h1>Tap Counter</h1></Card.Title>
      </Card.Header>
      <Card.Body>
        <div className='text-center'>
          <Button variant='dark' onClick={handlePlus}>Tap Me</Button>
        </div>
      </Card.Body>
      <Card.Footer>
        <Card.Text className='text-center result-number'>{count}</Card.Text>
      </Card.Footer>
    </Card>
  )
}

export default TapCounter