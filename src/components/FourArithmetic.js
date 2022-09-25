import * as React from 'react'
import {Card, Button, ButtonGroup, Form, FloatingLabel} from 'react-bootstrap';

function FourArithmetic() {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>Addition</Card.Title>
          <Form>
            <FloatingLabel>
              <Form.Control
                as="input"
                placeholder="Leave a comment here"
                className='mb-3'
                type='number'
              />
            </FloatingLabel>
            <FloatingLabel>
              <Form.Control
                as="input"
                placeholder="Leave a comment here"
                className='mb-3'
                type='number'
              />
            </FloatingLabel>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default FourArithmetic;