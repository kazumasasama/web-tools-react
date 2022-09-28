import * as React from 'react'
import { Card, Button, Row, Col, Form, FloatingLabel } from 'react-bootstrap';

function PasswordGenerator() {
  const [password, setPassword] = React.useState('');
  const [digits, setDigits] = React.useState(10);
  const [alphabets, setAlphabets] = React.useState(true);
  const [spCharacter, setSpCharacter] = React.useState(true);
  const [number, setNumber] = React.useState(true);

  function handleChange(pick, event) {
    if (pick === 'alphabets') {
      if (event.target.value === 'true') {
        setAlphabets(false)
        event.target.checked = false
      } else {
        setAlphabets(true)
        event.target.checked = true
      }
    } else if (pick === 'spCharacter') {
      if (event.target.value === 'true') {
        setSpCharacter(false)
        event.target.checked = false
      } else {
        setSpCharacter(true)
        event.target.checked = true
      }
    } else if (pick === 'number') {
      if (event.target.value === 'true') {
        setNumber(false)
        event.target.checked = false
      } else {
        setNumber(true)
        event.target.checked = true
      }
    }
  }

  function createPassword() {
    let aTOz = Array.apply(null, new Array(26)).map((v, i) => {
      return String.fromCharCode('a'.charCodeAt(0) + i);
    });
    let AtoZ = Array.apply(null, new Array(26)).map((v, i) => {
      return String.fromCharCode('a'.charCodeAt(0) + i);
    });
    let nums = [...Array(10)].map((_, i)=> i)
    let spCha = "!#$%&()*+,-./:;<=>?@[]^-{|}~".split('')
    let letters = [];
    if (alphabets) {
      letters.push(...aTOz);
      letters.push(...AtoZ);
    }
    if (spCharacter) {
      letters.push(...spCha);
    }
    if (number) {
      letters.push(...nums)
    }
    let index
    let psw = []
    for (let i = 0; i < digits; i++) {
      index = Math.floor(Math.random() * (letters.length - 1));
      psw.push(letters[index]);
    }
    setPassword(psw.join(''))
  }

  return (
    <Card>
      <Card.Header>
        <Card.Title><h1>Password Generator</h1></Card.Title>
      </Card.Header>
      <Card.Body>
        <Form>
          <Row>
            <Col>
              <FloatingLabel label="Digits">
                <Form.Control
                  id="digits-input"
                  as="input"
                  value={digits}
                  onChange={event => setDigits(event.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col>
              <Form.Check
                id="alphabets-switch"
                type="switch"
                label="Alphabets"
                checked={alphabets}
                value={alphabets}
                onChange={event => {handleChange('alphabets', event)}}
              />
              <Form.Check
                id="sp-character-switch"
                type="switch"
                label="Special Character"
                checked={spCharacter}
                value={spCharacter}
                onChange={event => {handleChange('spCharacter', event)}}
              />
              <Form.Check
                id="number-switch"
                type="switch"
                label="Number"
                checked={number}
                value={number}
                onChange={event => {handleChange('number', event)}}
              />
            </Col>
            <Col xxl={12}>
              <Button
                variant="dark"
                onClick={createPassword}
              >
                Create Password
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
      <Card.Footer>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <FloatingLabel label="Password">
                <Form.Control type="text" value={password} readOnly />
              </FloatingLabel>
            </Form.Group>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  )
}

export default PasswordGenerator;