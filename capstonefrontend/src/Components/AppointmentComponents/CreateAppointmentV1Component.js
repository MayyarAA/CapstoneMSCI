import React, { useState } from "react";
import Calendar from "react-calendar";
import { Container, Row, Col } from 'react-bootstrap';
import { Modal, Button, ListGroup } from "react-bootstrap";

function CreateAppointmentV1Component() {
  const [value, onChange] = useState(new Date());
  const [showModal, setShow] = useState(false);
  const [time, setTime] = useState(" ");
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

 

  return (
  
      
    
    <div className='section'>
    <div className='section-content'>
      <Container>
        <Row className='align-items-center'>
          <Col
            xs={{ span: 12, order: 2 }}
            md={{ span: 6, order: 1 }}
            lg={{ span: 8, order: 1 }}>
            
            <Calendar style={{ width: '200%' }} onChange={onChange} value={value}/>
          
          </Col>
          <Col
            className='text-center'
            xs={{ span: 12, order: 1 }}
            md={{ span: 6, order: 2 }}
            lg={{ span: 3, order: 1 }}>
            <div style={{ maxWidth: 250 }}>
            <ListGroup class="list-group">
            <h4>{(value.toDateString())}</h4>
            <ListGroup.Item action variant="primary" onClick={() => {handleShow(); setTime("8AM - 9AM")}} class="list-group-item">8AM - 9AM Price: ${Math.floor(Math.random() * (40 - 30 + 1)) + 30}</ListGroup.Item>
            <ListGroup.Item action variant="primary" onClick={() => {handleShow(); setTime("11AM - 12PM")}} class="list-group-item">11AM - 12PM  Price: ${Math.floor(Math.random() * (40 - 30 + 1)) + 30}</ListGroup.Item>
            <ListGroup.Item action variant="primary" onClick={() => {handleShow(); setTime("1PM - 2PM")}} class="list-group-item">1PM - 2PM  Price: ${Math.floor(Math.random() * (40 - 30 + 1)) + 30} </ListGroup.Item>
            <ListGroup.Item action variant="primary" onClick={() => {handleShow(); setTime("3PM - 5PM ")}} class="list-group-item">3PM - 5PM Price: ${Math.floor(Math.random() * (40 - 30 + 1)) + 30} </ListGroup.Item>
            <ListGroup.Item action variant="primary" onClick={() => {handleShow(); setTime("6PM - 7PM")}} class="list-group-item">6PM - 7PM Price: ${Math.floor(Math.random() * (40 - 30 + 1)) + 30} </ListGroup.Item>


            
        </ListGroup>
        <div style={{opacity: '0.5'}}>
        <p> please note: prices are determined dynamically based on demand</p>

        </div>
       
       
        </div>
          </Col>
        </Row>
      </Container>
    </div>
    
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body> Would you like to book: {(value.toDateString())} </Modal.Body>
        <Modal.Body>  {time}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
  </div>
  
      
      


  );
}

export { CreateAppointmentV1Component };
