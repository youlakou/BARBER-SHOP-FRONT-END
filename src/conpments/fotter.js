import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-light py-5">
      <Container>
       
        
        <Row>
          <Col>
            <p className="text-muted mb-0 text-center">&copy; {new Date().getFullYear()} LA BARBIERE</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
