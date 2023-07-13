import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import './team.css';
import Aos from "aos";
import "aos/dist/aos.css";
import backgroundImage from '../assests/teambg.png';
import teamMember1 from '../assests/about2.png';

function Barber({ member }) {

  function choised() {
   window.location.href =  "/book/" + member.id;
  } 


  return (
    <Card
      data-aos="fade-right"
      className="border-0 shadow-sm mb-4"
      onClick={choised}
    >
      <div className="img-container">
        <Image src={"http://127.0.0.1:8000/api/" + member.img} alt={`Team Member ${member.id}`} fluid />
      </div>
      <Card.Body className="text-center">
        <Card.Title className="mb-0">{member.nom}</Card.Title>
        <Card.Text className="text-muted">{member.prenom}</Card.Text>
      </Card.Body>
    </Card>
  );
}

function Barbers() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/TeamBarber');
      const data = await response.json();
      setTeamMembers(data.data);
      console.log(data.data);
    } catch (error) {
      console.error('Error fetching team members:', error);
    }
  };

  return (
    <div id="team">
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <section
        data-aos="fade-up"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className="py-5 fade-out"
      >
        <Container>
          <h1 className="o">Welcome to our professional barber booking experience</h1>
          <h2 className="w">Please select your preferred barber from the list below</h2>
          <br />
          <br />
          <Row>
            {teamMembers.map((member) => (
              <Col md={3} key={member.id}>
                <Barber member={member} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Barbers;
