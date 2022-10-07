import React from 'react'
import {Card, Accordion} from 'react-bootstrap';

function DictHistory(props) {
  if (props.history.map((word)=> word.definitions)[0]) {
    var definitions = props.history.map((word)=> word.definitions)[0].map((def, index)=> {return(
      <li key={`def${index}`}>{props.capitalize(def.definition)}</li>
    )})
  }

  return (
    <Card className='shadow-lg'>
      <Card.Header>
        <Card.Title><h2>History</h2></Card.Title>
      </Card.Header>
      <Card.Body>
        <Accordion>
          {props.history.length > 0 ? props.history.map((word, index) => {return (
            <Accordion.Item eventKey={`container${index}`}>
              <Accordion.Header>
                <h5 key={`title${index}`}>{word.title}</h5>
              </Accordion.Header>
              <Accordion.Body>
                <h5>Definition</h5>
                <ul>{definitions}</ul>
              </Accordion.Body>
            </Accordion.Item>
          )}) : <span key="def-1">Nothing to show</span>}
        </Accordion>
      </Card.Body>
    </Card>
  )
}

export default DictHistory;