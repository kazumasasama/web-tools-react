import { useState } from 'react'
import {Card, Form, FloatingLabel, Button} from 'react-bootstrap';
import decapitalize from '../../functions/decapitalize';

function TextDecapitalize() {
  const [text, setText] = useState("HI THERE! ENTER YOUR TEXT HERE. I'LL CAPITALIZE IT FOR YOU!");

  function clearText() {
    setText('');
  }

  return(
    <Card className='shadow-lg'>
      <Card.Header>
        <Card.Title><h4>Text Decapitalizer</h4></Card.Title>
        <Card.Subtitle>Convert all letters to lower case</Card.Subtitle>
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
            <p className='white-text'>{decapitalize(text)}</p>
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

export default TextDecapitalize;