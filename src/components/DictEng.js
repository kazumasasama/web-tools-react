import * as React from 'react'
import axios from 'axios'
import {Card, Button, Row, Col, Form, FloatingLabel} from 'react-bootstrap';

function DictEng() {
  const [keyword, setKeyword] = React.useState('')
  const [definitions, setDefinitions] = React.useState([])

  function getWords() {
    const options = {
      method: 'GET',
      url: `https://wordsapiv1.p.rapidapi.com/words/${keyword}`,
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_WORDS_API,
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
      }
    };

    axios.request(options)
    .then((res)=> {
      setDefinitions(res.data.results)
    })
    .catch(function (error) {
      console.error(error);
    });
  }

  function capitalize(str) {
    if (typeof str !== 'string' || !str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return(
    <Card>
      <Card.Header>
        <Card.Title><h1>Dictionary (ENG)</h1></Card.Title>
      </Card.Header>
      <Card.Body>
        <Form.Group className="mb-3">
          <FloatingLabel label="Enter a keyword">
            <Form.Control
              type="text"
              value={keyword}
              onChange={event => setKeyword(event.target.value)}
            />
          </FloatingLabel>
        </Form.Group>
        <Button variant="dark" onClick={getWords}>Look up</Button>
      </Card.Body>
      <Card.Footer>
        <ol className='dictionary-ol'>
          {definitions.map((definition)=> {
            return (
              <li key={definitions.indexOf(definition)}>
                {capitalize(definition.definition)}
              </li>
            )
          })}
        </ol>
      </Card.Footer>
    </Card>
  )
}

export default DictEng;