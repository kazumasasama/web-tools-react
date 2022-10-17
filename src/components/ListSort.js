import { useState, useRef } from 'react'
import {Row, Col, Card, Form, FloatingLabel, Button, Dropdown, Overlay, Tooltip} from 'react-bootstrap';

function ListSort() {
  const [text, setText] = useState('banana, apple, mango, apple')
  const [sorted, setSorted] = useState('apple, banana, mango')
  const [divider, setDivider] = useState({divider: ', ', element: null})
  const [prevDivider, setPrevDivider] = useState(null)
  const [asc, setAsc] = useState(Boolean(true))
  const [duplicated, setDuplicated] = useState(Boolean(true))
  const [show, setShow] = useState(Boolean(false));
  const [count, setCount] = useState(0)
  const target = useRef(null);

  function setCurrentDivider(join, element) {
    setPrevDivider(prevDivider)
    const promise = new Promise((resolve, reject)=> {
      setPrevDivider(
        {
          divider: divider.divider,
          element: divider.element
        }
      );
      resolve(divider.element)
    });
    promise
    .then((prevEl)=> {
      if (count === 0) {
        const el = document.getElementById('active-btn')
        el.classList.remove('active')
      } else {
        prevEl.classList.remove('active')
      }
    })
    .then(()=> {
      setDivider(
        {
          divider: join,
          element: element
        }
      )
      element.classList.add('active')
      setCount(count + 1)
    })
  }


  function sort() {
    if (text.length > 0) {
      let splitted;
      if (text.includes(', ')) {
        splitted = text.split(', ').sort()
      } else if (text.includes('/')) {
        splitted = text.split('/').sort()
      } else if (text.includes(',')) {
        splitted = text.split(',').sort()
      } else if (text.includes(' ')) {
        splitted = text.split(' ').sort()
      } else if (text.includes('-')) {
        splitted = text.split('-').sort()
      } else {
        setSorted('ERROR')
        return
      }
      if (!asc) {
        splitted= splitted.reverse()
      }
      if (duplicated) {
        const unique = [...new Set(splitted)]
        setSorted(unique.join(divider.divider))
      } else {
        setSorted(splitted.join(divider.divider))
      }
    }
  }

  function clearInput() {
    setSorted('')
    setText('')
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(sorted).then(() => {
      setShow(Boolean(true))
      setInterval(()=> {
        setShow(Boolean(false))
      }, 2500)
    });
  }

  function createCSV() {
    let fileName = 'sorted.csv'
    let csvArray = [];
    if (sorted.includes(', ')) {
      csvArray.push(',value\r\n,' + sorted.split(', ').join('\r\n,'))
    } else if (sorted.includes('/')) {
      csvArray.push(',value\r\n,' + sorted.split('/').join('\r\n,'))
    } else if (sorted.includes(',')) {
      csvArray.push(',value\r\n,' + sorted.split(',').join('\r\n,'))
    } else if (sorted.includes(' ')) {
      csvArray.push(',value\r\n,' + sorted.split(' ').join('\r\n,'))
    } else if (sorted.includes('-')) {
      csvArray.push(',value\r\n,' + sorted.split('-').join('\r\n,'))
    }
    for (let i in csvArray) {
      csvArray[i] += "\r\n"
    }
    
    let blob = new Blob(csvArray, {type: 'text/csv'});
    let uri = URL.createObjectURL(blob);
    let link = document.createElement('a');
    link.download = fileName;
    link.href = uri;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  }

  return (
    <Card>
      <Card.Header className='text-white'><h2>List Sort</h2></Card.Header>
      <Card.Body>
        <small className='mb-3 white-text'>
          space( ) comma(,) comma & space(, ) slash(/) separated required
        </small>
        <Form>
          <Row>
            <Col xs={12} className='mb-3'>
              <FloatingLabel label="Paste your text here">
                <Form.Control
                  as="textarea"
                  id="list-sort-input"
                  style={{ height: '100px' }}
                  value={text}
                  onChange={event => setText(event.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col xs={12} className='mb-3'>
                <Form.Check
                  id="alphabets-switch"
                  type="switch"
                  label="Remove duplicate"
                  className='white-text'
                  onChange={() => setDuplicated(Boolean(!duplicated))}
                  checked={duplicated}
                  value={duplicated}
                />
            </Col>
            <Col className='mb-3 text-end'>
              <Button
                variant='link'
                className='white-text'
                style={{ textDecoration: 'none' }}
              >
                OUTPUT
              </Button>
              <Button
                variant='outline-light'
                onClick={(event)=> setCurrentDivider(' ', event.target)}
                className='btn-margin-right-5'
              >
                ( )
              </Button>
              <Button
                variant='outline-light'
                onClick={(event)=> setCurrentDivider(',', event.target)}
                className='btn-margin-right-5'
              >
                ,
              </Button>
              <Button
                id="active-btn"
                variant='outline-light'
                onClick={(event)=> setCurrentDivider(', ', event.target)}
                className='btn-margin-right-5'
                active
              >
                (, )
              </Button>
              <Button
                variant='outline-light'
                onClick={(event)=> setCurrentDivider('/', event.target)}
                className='btn-margin-right-5'
              >
                /
              </Button>
              <Button
                variant='outline-light'
                onClick={(event)=> setCurrentDivider('-', event.target)}
                className='btn-margin-right-5'
              >
                -
              </Button>
              <Button
                variant='link'
                className='white-text'
                style={{ textDecoration: 'none' }}
              >
                Order
              </Button>
              <Button
                variant='outline-light'
                active={asc}
                onClick={()=> setAsc(Boolean(true))}
                className='btn-margin-right-5'
              >
                ASC
              </Button>
              <Button
                variant='outline-light'
                onClick={()=> setAsc(Boolean(false))}
                active={!asc}
              >
                DESC
              </Button>
            </Col>
            <Col xs={12} className='d-flex justify-content-end'>
              <Dropdown ref={target}>
                <Dropdown.Toggle variant="dark" className='btn-margin-right-5'>
                  Download
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={copyToClipboard}
                  >
                    Copy to clipboard
                  </Dropdown.Item>
                  <Dropdown.Item onClick={createCSV}>csv</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Overlay
                target={target.current}
                show={show}
                placement="top"
              >
                {(props) => (
                  <Tooltip varient='light' id="copied-overlay" {...props}>
                    Copied!
                  </Tooltip>
                )}
              </Overlay>
              <Button
                variant='dark'
                onClick={()=> clearInput()}
                className='btn-margin-right-5'
              >
                Clear Form
              </Button>
              <Button
                variant='dark'
                onClick={sort}
              >
                Sort
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
      { sorted.length ? (
        <Card.Footer><p className='white-text'>{sorted}</p></Card.Footer>
      ) : <></> }
    </Card>
  )
}

export default ListSort;