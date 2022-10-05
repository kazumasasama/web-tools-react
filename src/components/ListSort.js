import { useState } from 'react'
import {Row, Col, Card, Form, FloatingLabel, Button} from 'react-bootstrap';

function ListSort() {
  const [text, setText] = useState('mango, banana, apple')
  const [sorted, setSorted] = useState('apple, banana, mango')

  function sort(join) {
    if (text.length > 0) {
      let splitted;
      if (text.includes(', ')) {
        splitted = text.split(', ').sort().join(join)
      } else if (text.includes('/')) {
        splitted = text.split('/').sort().join(join)
      } else if (text.includes(',')) {
        splitted = text.split(',').sort().join(join)
      } else if (text.includes(' ')) {
        splitted = text.split(' ').sort().join(join)
      }
      setSorted(splitted)
    }
    const btn = document.getElementById('active-btn')
    btn.classList.remove('active')
  }

  return (
    <Card>
      <Card.Header><h2>List Sort</h2></Card.Header>
      <Card.Header>
            <Button
              variant='dark'
            >
              [ space( ) comma(,) comma & space(, ) slash(/) ] separated required
            </Button>
      </Card.Header>
      <Card.Body>
        <Form>
          <Row>
            <Col xs={12} className='mb-3'>
              <FloatingLabel controlId="floatingTextarea2" label="Paste your text here">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                  value={text}
                  onChange={event => setText(event.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col className='text-end'>
              
              <Button
                variant='link'
                className='white-text'
                style={{ textDecoration: 'none' }}
              >
                OUTPUT
              </Button>
              {' '}
              <Button
                variant='outline-light'
                onClick={()=> sort(' ')}
              >
                space( )
              </Button>
              {' '}
              <Button
                variant='outline-light'
                onClick={()=> sort(',')}
              >
                comma(,)
              </Button>
              {' '}
              <Button
                id="active-btn"
                variant='outline-light'
                onClick={()=> sort(', ')}
                active
              >
                comma & space(, )
              </Button>
              {' '}
              <Button
                variant='outline-light'
                onClick={()=> sort('/')}
              >
                slash(/)
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