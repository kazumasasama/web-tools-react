import * as React from 'react'
import {Card, Row, Col, Form, FloatingLabel} from 'react-bootstrap';

function FourArithmetic() {
  const [add1, setAdd1] = React.useState(0);
  const [add2, setAdd2] = React.useState(0);
  const [sub1, setSub1] = React.useState(0);
  const [sub2, setSub2] = React.useState(0);
  const [pro1, setPro1] = React.useState(0);
  const [pro2, setPro2] = React.useState(0);
  const [div1, setDiv1] = React.useState(0);
  const [div2, setDiv2] = React.useState(0);

  return (
    <div>
      <Row>
        <Col sm={6}>
          <Card className="function-container shadow-lg">
            <Card.Header>
              <Card.Title><h4>Addition</h4></Card.Title>
            </Card.Header>
            <Card.Body>
              <Form className="d-flex justify-content-evenly">
                <FloatingLabel>
                  <Form.Control
                    as="input"
                    placeholder="Leave a comment here"
                    className='mb-3'
                    type='number'
                    value={add1}
                    onChange={(event)=> setAdd1(event.target.value)}
                  />
                </FloatingLabel>
                <Card.Text className="plus-icon">+</Card.Text>
                <FloatingLabel>
                  <Form.Control
                    as="input"
                    placeholder="Leave a comment here"
                    className='mb-3'
                    type='number'
                    value={add2}
                    onChange={(event)=> setAdd2(event.target.value)}
                  />
                </FloatingLabel>
              </Form>
            </Card.Body>
            <Card.Footer className="text-center">
              <Card.Text className="result-number white-text">{Number(add1) + Number(add2)}</Card.Text>
            </Card.Footer>
          </Card>
          <Card className="function-container shadow-lg">
            <Card.Header>
              <Card.Title><h4>Subtraction</h4></Card.Title>
            </Card.Header>
            <Card.Body>
              <Form className="d-flex justify-content-evenly">
                <FloatingLabel>
                  <Form.Control
                    as="input"
                    placeholder="Leave a comment here"
                    className='mb-3'
                    type='number'
                    value={sub1}
                    onChange={(event)=> setSub1(event.target.value)}
                  />
                </FloatingLabel>
                <Card.Text className="plus-icon">-</Card.Text>
                <FloatingLabel>
                  <Form.Control
                    as="input"
                    placeholder="Leave a comment here"
                    className='mb-3'
                    type='number'
                    value={sub2}
                    onChange={(event)=> setSub2(event.target.value)}
                  />
                </FloatingLabel>
              </Form>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-evenly">
              <Card.Text className="result-number white-text">{Number(sub1) - Number(sub2)}</Card.Text>
            </Card.Footer>
          </Card>
        </Col>
        <Col sm={6}>
          <Card className="function-container shadow-lg">
            <Card.Header>
              <Card.Title><h4>Multiplication</h4></Card.Title>
            </Card.Header>
            <Card.Body>
              <Form className="d-flex justify-content-evenly">
                <FloatingLabel>
                  <Form.Control
                    as="input"
                    placeholder="Leave a comment here"
                    className='mb-3'
                    type='number'
                    value={pro1}
                    onChange={(event)=> setPro1(event.target.value)}
                  />
                </FloatingLabel>
                <Card.Text className="plus-icon">{'×'}</Card.Text>
                <FloatingLabel>
                  <Form.Control
                    as="input"
                    placeholder="Leave a comment here"
                    className='mb-3'
                    type='number'
                    value={pro2}
                    onChange={(event)=> setPro2(event.target.value)}
                  />
                </FloatingLabel>
              </Form>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-evenly">
              <Card.Text className="result-number white-text">{Number(pro1) * Number(pro2)}</Card.Text>
            </Card.Footer>
          </Card>
          <Card className="function-container shadow-lg">
            <Card.Header>
              <Card.Title><h4>Division</h4></Card.Title>
            </Card.Header>
            <Card.Body>
              <Form className="d-flex justify-content-evenly">
                <FloatingLabel>
                  <Form.Control
                    as="input"
                    placeholder="Leave a comment here"
                    className='mb-3'
                    type='number'
                    value={div1}
                    onChange={(event)=> setDiv1(event.target.value)}
                  />
                </FloatingLabel>
                <Card.Text className="plus-icon">{'÷'}</Card.Text>
                <FloatingLabel>
                  <Form.Control
                    as="input"
                    placeholder="Leave a comment here"
                    className='mb-3'
                    type='number'
                    value={div2}
                    onChange={(event)=> setDiv2(event.target.value)}
                  />
                </FloatingLabel>
              </Form>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-evenly">
              <Card.Text className="result-number white-text">{Number(div1) / Number(div2) || 0}</Card.Text>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default FourArithmetic;