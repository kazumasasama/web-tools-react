import * as React from 'react'
import axios from 'axios'
import {Card, Button, Row, Col, Form, FloatingLabel} from 'react-bootstrap';

function DictEng() {
  const [keyword, setKeyword] = React.useState()
  const [definitions, setDefinitions] = React.useState([])

  function getWords() {
    const options = {
      method: 'GET',
      url: `https://wordsapiv1.p.rapidapi.com/words/${keyword}`,
      headers: {
        'X-RapidAPI-Key': '939a480754msh6480463041fa01bp12759djsn186aabf26458',
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
      }
    };

    axios.request(options)
    .then((res)=> {
      console.log(res.data.results)
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

  // function createEmail() {

  //   let aTOz = Array.apply(null, new Array(26)).map((v, i) => {
  //     return String.fromCharCode('a'.charCodeAt(0) + i);
  //   });
  //   let nums = [...Array(10)].map((_, i)=> i)
  //   let letters = [];
  //     letters.push(...aTOz);
  //   if (number) {
  //     letters.push(...nums)
  //   }
  //   let index
  //   let psw = []
  //   for (let i = 0; i < digits; i++) {
  //     index = Math.floor(Math.random() * (letters.length - 1));
  //     psw.push(letters[index]);
  //   }
  //   setPassword(psw.join(''))
  // }

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
        <Card.Text className="mb-3">
        <ol className='dictionary-ol'>
          {definitions.map((definition)=> {
            return (
              <li key={definition}>
                {capitalize(definition.definition)}
              </li>
            )
          })}
        </ol>
        </Card.Text>
      </Card.Footer>
    </Card>
  )
}

export default DictEng;