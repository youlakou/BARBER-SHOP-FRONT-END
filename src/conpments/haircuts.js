import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link, useParams } from "react-router-dom";

const Hair = () => {
  const { id } = useParams();
  const [haircuts, setHaircuts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHaircuts = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/coup/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch haircuts");
        }
        const data = await response.json();
        setHaircuts(data.data);
      } catch (error) {
        console.error("Error fetching haircuts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHaircuts();
  }, [id]);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <br />
      <br />
      <br />
      <h1 className="o">Thank you for choosing me</h1>
      <h2 className="w">Here is a list of hair styles that I can provide.</h2>
      <br />
      <br />
      <Row>
        {haircuts.map((haircut) => (
          <Col data-aos="fade-right" md={3} key={haircut.id}>
            <Link to={`/reservation/${haircut.id}`} style={{ textDecoration: "none" }}>
              <Card className="mb-4">
                <Card.Img variant="top" src={`http://127.0.0.1:8000/api/${haircut.img}`} />
                <Card.Body>
                  <Card.Title className="text-black">{haircut.nom}</Card.Title>
                  <Card.Text className="text-black">{haircut.prix} DH</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Hair;
