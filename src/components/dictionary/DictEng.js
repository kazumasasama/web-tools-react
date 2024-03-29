import React from 'react'
import {Card, Button, Form, FloatingLabel} from 'react-bootstrap';

function DictEng(props) {
  return(
    <Card>
      <Card.Header>
        <Card.Title><h4>Dictionary (ENG)</h4></Card.Title>
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
      {props.definitions.length ? (
        <Card.Footer>
          <h5 className='white-text'>Definition</h5>
          <ol className='white-text'>
            {props.definitions.map((definition, index)=> {
              return (
                <li key={`definition-${index}`}>
                  {props.capitalize(definition.definition)}
                </li>
              )
            })}
          </ol>
        </Card.Footer>
      ) : <></>}
      {props.synonyms.length ? (
        <Card.Footer>
          <h5 className='white-text'>Synonyms</h5>
          <ol className='white-text'>
            {props.synonyms.map((synonym, index)=> {
              return (
                <li key={`synonym-${index}`}>
                  {synonym}
                </li>
              )
            })}
          </ol>
        </Card.Footer>
      ) : <></>}
      {props.pronunciation ? (
        <Card.Footer>
          <h5 className='white-text'>Pronunciation</h5>
          <p className='white-text'>{props.pronunciation}</p>
        </Card.Footer>
      ) : <></>}
    </Card>
  )
}

export default DictEng;