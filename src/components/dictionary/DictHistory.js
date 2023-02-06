import React from 'react'
import {Card, Accordion} from 'react-bootstrap';

function DictHistory(props) {
  // if (props.history.map((word)=> word.definitions)[0]) {
  //   var definitions = props.history.map((word)=> word.definitions)[0].map((def, index)=> {return(
  //     <li key={`def${index}`}>{props.capitalize(def.definition)}</li>
  //   )})
  // }

  return (
    <Card className='shadow-lg'>
      <Card.Header>
        <Card.Title><h4>History</h4></Card.Title>
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
                <ul>{word.definitions ? word.definitions.map((def, index)=> {
                  return (
                    <li key={`def-${index}`}>{def.definition}</li>
                  )
                }) : <></>}</ul>
                <h5>Synonyms</h5>
                <ul>{word.synonyms ? word.synonyms.map((syn, index)=> {
                  return (
                    <li key={`syn-${index}`}>{syn}</li>
                  )
                }) : <></>}</ul>
                <h5>Pronunciation</h5>
                <ul>
                  <li key='pronunciation'>{word.pronunciation}</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          )}) : <span key="def-1" className='white-text'>Nothing to show</span>}
        </Accordion>
      </Card.Body>
    </Card>
  )
}

export default DictHistory;