import * as React from 'react'
import {Card, Button, ButtonGroup, Form, FloatingLabel} from 'react-bootstrap';

function MinTimer() {
  const [seconds, setSeconds] = React.useState('00');
  const [minutes, setMinutes] = React.useState('00');
  const [timerId, setTimerId] = React.useState();
  
  function countDown() {
    let count = Number(seconds) + (Number(minutes) * 60);
    // if (seconds < 10) {
    //   setSeconds(('00' + seconds).slice(-2))
    // }
    let timerId = setInterval(()=> {
      count--;
      console.log(count);
      if (count % 60 < 10) {
        setSeconds(('00' + (count % 60)).slice(-2));
      } else {
        setSeconds(count % 60)
      }
      console.log((count % 60))
      setMinutes(Math.floor(count / 60));
      console.log(Math.floor(count / 60))
      console.log('======')
      setTimerId(timerId);
      if (count === 0) {
        clearInterval(timerId);
      } else if (count % 60 === 59) {
        setMinutes(minutes - 1);
      }
    }, 1000)
  }

  function stop() {
    clearInterval(timerId);
  }

  function reset() {
    clearInterval(timerId);
    setMinutes('00');
    setSeconds('00');
  }

  return (
    <div>
      <Card className="function-container">
        <Card.Header>
          <Card.Title><h1>Min Timer</h1></Card.Title>
        </Card.Header>
        <Card.Body>
            <Form>
                <FloatingLabel controlId="floatingTextarea1" label="Minutes">
                  <Form.Control
                    as="input"
                    placeholder="Leave a comment here"
                    onChange={event => setMinutes(event.target.value)}
                    className='mb-3'
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingTextarea2" label="Seconds">
                  <Form.Control
                    as="input"
                    placeholder="Leave a comment here"
                    onChange={event => setSeconds(event.target.value)}
                    className='mb-3'
                    type='number'
                  />
                </FloatingLabel>
            </Form>
            <ButtonGroup>
              <Button onClick={countDown} variant="outline-secondary">Start</Button>
              <Button onClick={stop} variant="secondary">Stop</Button>
              <Button onClick={reset} variant="dark">Reset</Button>
            </ButtonGroup>
        </Card.Body>
        <Card.Footer>
          <Card.Text className='result-number'>{ minutes }:{ seconds }</Card.Text>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default MinTimer;