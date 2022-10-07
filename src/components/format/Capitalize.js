import { useState } from 'react'
import {Card, Form, FloatingLabel, Button} from 'react-bootstrap';

function Capitalize() {
  const [text, setText] = useState("hi there! enter your text here. i'll capitalize it for you!");

  function clearText() {
    setText('');
  }

  function capitalize(str) {
    if (typeof str !== 'string' || !str) return str;

    let strArray = str.concat().split('');
    let indices = [];
    const elements = ['.', '!', '?', '...'];
    for (let i in elements) {
      let idx = strArray.indexOf(elements[i]);
      while (idx !== -1) {
        indices.push(idx);
        idx = strArray.indexOf(elements[i], idx + 1);
      }
    }
    console.log(strArray)
    console.log(indices)

    strArray[0] = strArray[0].toUpperCase();
    for (let i in indices) {
      if (strArray[indices[i] + 2]) {
        strArray[indices[i] + 2] = strArray[indices[i] + 2].toUpperCase()
      }
    }
    return strArray.join('')
  }

  return(
    <Card className='shadow-lg'>
      <Card.Header>
        <Card.Title><h4>Text Capitalizer</h4></Card.Title>
        <Card.Subtitle>Convert each first letters of sentences to upper case</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Form>
          <FloatingLabel controlId="floatingTextarea2" label="Paste your text here">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: '100px' }}
              value={text}
              onChange={event => setText(event.target.value)}
            />
          </FloatingLabel>
        </Form>
      </Card.Body>
      {text !== '' ? (
        <>
          <Card.Footer>
            <p className='white-text'>{capitalize(text)}</p>
          </Card.Footer>
          <Card.Footer className='d-flex justify-content-end'>
            <Button
              variant='dark'
              onClick={clearText}
            >
              Clear Text
            </Button>
          </Card.Footer>
        </>
      ) : <></>}
    </Card>
  )
}

export default Capitalize;