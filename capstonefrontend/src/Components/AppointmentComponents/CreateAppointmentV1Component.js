import React, { useState } from "react";
import Calendar from "react-calendar";
import { Container, Row, Col } from 'react-bootstrap';

function CreateAppointmentV1Component() {
  const [value, onChange] = useState(new Date());

  return (
  
      
    
    <div className='section'>
    <div className='section-content'>
      <Container>
        <Row className='align-items-center'>
          <Col
            xs={{ span: 12, order: 2 }}
            md={{ span: 6, order: 1 }}
            lg={{ span: 8, order: 1 }}>
            <Calendar onChange={onChange} value={value} />
          </Col>
          <Col
            className='text-center'
            xs={{ span: 12, order: 1 }}
            md={{ span: 6, order: 2 }}
            lg={{ span: 3, order: 1 }}>
            <div style={{ maxWidth: 250 }}>
            <ul class="list-group">
            <li class="list-group-item">8AM - 9PM Price: $34</li>
            <li class="list-group-item">11AM - 12PM  Price: $24</li>
            <li class="list-group-item">1PM - 2PM  Price: $44 </li>
            <li class="list-group-item">3PM - 5PM Price: $31 </li>
            <li class="list-group-item">6PM - 7PM Price: $25 </li>
            
        </ul>
        </div>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
      
      


  );
}

export { CreateAppointmentV1Component };
