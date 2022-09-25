import * as React from 'react'
import {Card, Form, FloatingLabel} from 'react-bootstrap';
// import InputGroup from 'react-bootstrap/InputGroup';

function TextCounter() {
  const [text, setText] = React.useState('')

  // function textLength(input) {
  //   setText(text = input)
  // }
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>
            <h1>Text Counter</h1>
          </Card.Title>
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
          <Card.Text className='result-number'>{text.length}</Card.Text>
          {/* <TextField
            className='text-counter'
            value={input1}
            onChange={event => setInput1(event.target.value)}
            placeholder='Enter text here'
            multiline890-=
            rows={3}
            color='info'
          /> */}
          {/* <Card.Text>{input1.length} letters in your text.</Card.Text> */}
        </Card.Body>
      </Card>
      
    </div>
  )
}

export default TextCounter;