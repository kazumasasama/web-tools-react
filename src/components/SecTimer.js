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
      <Card className="function-container">
        <Card.Body>
          <Card.Title><h1>Sec Timer</h1></Card.Title>
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
            <ButtonGroup size='lg' className='mb-2'>
              <Button onClick={countDown}>Start</Button>
              <Button className='btn-outline-secondary' onClick={stop} >Stop</Button>
              <Button className='btn-danger' onClick={reset} >Reset</Button>
            </ButtonGroup>
          <Card.Text className='result-number'>{ seconds }</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SecTimer;