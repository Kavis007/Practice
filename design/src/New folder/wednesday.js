import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, CardText } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
function Wednesday() {
    function Loginfn(){

    }
    return (
        <div>
            <Row>
                <Col sm={2} md={2} lg={2} xl={2}>

                </Col>
                <Col sm={4}  md={4} lg={4} xl={4}> 
                    <p className='p1'>facebook</p>
                    <p className='p2'>Facebook helps you connect and share<br></br> with the people in your life.</p>
                </Col>
                <Col sm={4} md={4} lg={4} xl={4}>
                    <Card style={{ width: '30rem',height:'42vh' }} className='c1'>
                        <Card.Body>
                            <Card.Title><input className='i1' type='text' placeholder='Enter email or phone number' style={{height:'50px'}}/></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                            <Card.Text>
                                <input type='text' className='i2' placeholder='password' style={{height:'50px'}}></input>
                            </Card.Text>
                            <Card.Text>

                            </Card.Text>
                            <CardText>
                            <Button className='b11' style={{backgroundColor:'blue',fontSize:'20px',fontWeight:'700px'}}>Log in</Button>
                            </CardText>
                            <a  className='l1' href='https://support.google.com/accounts/answer/41078?hl=en&co=GENIE.Platform%3DAndroid'>forgot password</a>
                            <hr/>
                            <CardText>
                            <Button  className='b2' style={{fontSize:'20px',fontWeight:'700px',backgroundColor:'green'}}>Create an account</Button>{' '}
                            </CardText>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={2} md={2} lg={2} xl={2}>

                </Col>

            </Row>
        </div>
    )
}

export default Wednesday;
