import * as React from 'react'
// import moment from 'moment'
import {Card, Button, ButtonGroup, Form, FloatingLabel} from 'react-bootstrap';

function SecTimer() {
  const [seconds, setSeconds] = React.useState(0);
  const [timerId, setTimerId] = React.useState();
  
  function countDown() {
    let count = seconds;
    let timerId = setInterval(()=> {
      count--;
      setSeconds(count);
      setTimerId(timerId);
      if (count === 0) {
        clearInterval(timerId);
      }
    }, 1000)
  }

  function stop() {
    clearInterval(timerId);
  }

  function reset() {
    clearInterval(timerId);
    setSeconds(0);
  }

  return (
    <div>
      <Card className="function-container shadow-lg">
        <Card.Header>
          <Card.Title><h1>Sec Timer</h1></Card.Title>
        </Card.Header>
        <Card.Body>
            <Form className='mb-4'>
              <FloatingLabel controlId="floatingTextarea2" label="How many seconds?">
                <Form.Control
                  as="input"
                  placeholder="Leave a comment here"
                  onChange={event => setSeconds(event.target.value)}
                  value={seconds}
                />
              </FloatingLabel>
            </Form>
            <ButtonGroup className='mb-2'>
              <Button variant="outline-secondary" onClick={countDown}>Start</Button>
              <Button variant="secondary" onClick={stop} >Stop</Button>
              <Button variant="dark" onClick={reset} >Reset</Button>
            </ButtonGroup>
        </Card.Body>
        <Card.Footer>
          <Card.Text className='result-number'>{ seconds }</Card.Text>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default SecTimer;