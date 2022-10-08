import * as React from 'react'
import {Card, Form, FloatingLabel} from 'react-bootstrap';

function TextCounter() {
  const [text, setText] = React.useState('')

  return (
    
    <Card className="function-container shadow-lg">
      <Card.Header>
        <Card.Title><h4>Text Counter</h4></Card.Title>
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
        <Card.Text className='text-center white-text result-number'>{text.length}</Card.Text>
      </Card.Footer>
    </Card>
  )
}

export default TextCounter;