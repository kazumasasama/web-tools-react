import * as React from 'react'
import {Card, Form, FloatingLabel} from 'react-bootstrap';
// import InputGroup from 'react-bootstrap/InputGroup';

function TextCounter() {
  const [text, setText] = React.useState('')

  // function textLength(input) {
  //   setText(text = input)
  // }
  return (
    
    <Card className="function-container">
      <Card.Header>
        <Card.Title><h1>Text Counter</h1></Card.Title>
      </Card.Header>
      <Card.Body>
        <Form>
          <FloatingLabel controlId="floatingTextarea2" label="Write something here">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: '100px' }}
              onChange={event => setText(event.target.value)}
            />
          </FloatingLabel>
        </Form>
      </Card.Body>
      <Card.Footer>
        <Card.Text className='text-center result-number'>{text.length}</Card.Text>
      </Card.Footer>
    </Card>
  )
}

export default TextCounter;