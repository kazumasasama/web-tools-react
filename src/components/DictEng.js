import React from 'react'
import {Card, Button, Form, FloatingLabel} from 'react-bootstrap';

function DictEng(props) {
  return(
    <Card className='shadow-lg'>
      <Card.Header>
        <Card.Title><h1>Dictionary (ENG)</h1></Card.Title>
      </Card.Header>
      <Card.Body>
        <Form.Group className="mb-3">
          <FloatingLabel label="Enter a keyword">
            <Form.Control
              type="text"
              value={props.keyword}
              onChange={event => props.setKeyword(event.target.value)}
            />
          </FloatingLabel>
        </Form.Group>
        <Button variant="dark" onClick={props.getWords}>Look up</Button>
      </Card.Body>
      <Card.Footer>
        <ol className='dictionary-ol'>
          {props.definitions.map((definition)=> {
            return (
              <li key={props.definitions.indexOf(definition)}>
                {props.capitalize(definition.definition)}
              </li>
            )
          })}
        </ol>
      </Card.Footer>
    </Card>
  )
}

export default DictEng;