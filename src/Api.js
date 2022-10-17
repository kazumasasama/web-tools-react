import React, {useState} from 'react'
import axios from 'axios'
import {Card, Form, FloatingLabel, Dropdown} from 'react-bootstrap';

function Api() {
  const [url, setUrl] = useState("https://wordsapiv1.p.rapidapi.com/words/banana");
  const [headers, setHeader] = useState(
    `{"X-RapidAPI-Key": "<YOUR API KEY>", "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com"}`
  );
  const [res, setRes] = useState(null);
  const [error, setError] = useState(null);

  function sendRequest(method) {
    const options = {
      method: method,
      url: url,
      headers: JSON.parse(headers)
    };

    axios.request(options)
    .then((response)=> {
      setError();
      setRes(response);
    })
    .catch((err)=> {
      setError(err.message)
    })
  }

  return (
    <Card>
      <Card.Header>
        <Card.Title className='text-white'><h4>API Tester</h4></Card.Title>
      </Card.Header>
      <Card.Body>
        {error
          ? <p className='text-pink'>ERROR: {error}</p>
          : <></>
        }
        <Form>
          <FloatingLabel
            controlId="floatingTextarea2"
            label="URL"
            className='mb-3'
          >
            <Form.Control
              as="input"
              value={url}
              onChange={event => setUrl(event.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTextarea2"
            label="Header"
            className='mb-3'
          >
            <Form.Control
              as="input"
              value={headers}
              onChange={event => setHeader(event.target.value)}
            />
          </FloatingLabel>
          <div className='text-end'>
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                Send Request
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={()=> sendRequest('GET')}>GET</Dropdown.Item>
                <Dropdown.Item onClick={()=> sendRequest('POST')}>POST</Dropdown.Item>
                <Dropdown.Item onClick={()=> sendRequest('PATCH')}>PATCH</Dropdown.Item>
                <Dropdown.Item onClick={()=> sendRequest('DELETE')}>DELETE</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Form>
      </Card.Body>
      {res
        ? <Card.Footer className='text-end text-white'>
            <p>{JSON.stringify(res)}</p>
          </Card.Footer>
        : <></>
      }
    </Card>
  );
}

export default Api;