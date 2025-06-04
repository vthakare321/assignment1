import React from 'react';
import { Container, Card, Image } from 'react-bootstrap';
import '../App.css';

import logo from '../images/logo2.png'
import ceo from '../images/ceo.jpg'

export default function TestimonialCard() {
  return (
    <Container className="my-5">
      <Card className="shadow-sm border-0 rounded-4 p-4 bg-light text-center testimonial-card">
        <Card.Body>
          <div className="mb-3">
            <img src={logo} alt="Lookscout" height="24" />
            
          </div>
          <Card.Text className="fs-5 fw-medium text-dark">
            Thank you for making it painless, pleasant and most of all hassle <br/> free! I love LookScout.
            I can't say enough about LookScout.<br/> Great job, I will definitely be ordering again!
          </Card.Text>
          <div className="d-flex justify-content-center align-items-center gap-2 mt-4">
            <Image src={ceo} roundedCircle width="40" height="40" alt="Lisa Smith" />
            <div className="text-start">
              <div className="fw-semibold text-dark">Lisa Smith</div>
              <small className="text-muted">CEO Company</small>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
