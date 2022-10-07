import { useState } from 'react'
import {Card, Form, FloatingLabel, Button} from 'react-bootstrap';
import {capitalizeAll} from '../../functions/capitalizers';

function CapitalizeAll() {
  const [text, setText] = useState('');

  return(
    <Card className='shadow-lg'>
      <Card.Header>
        <Card.Title><h2>Text Capitalizer</h2></Card.Title>
        <Card.Subtitle>Convert all letters to upper case</Card.Subtitle>
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
            <p className='white-text'>{capitalizeAll(text)}</p>
          </Card.Footer>
          <Card.Footer className='d-flex justify-content-end'>
            <Button
              variant='dark'
              onClick={()=> setText('')}
            >
              Clear Text
            </Button>
          </Card.Footer>
        </>
      ) : <></>}
    </Card>
  )
}

export default CapitalizeAll;