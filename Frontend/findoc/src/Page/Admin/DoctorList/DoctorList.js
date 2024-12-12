import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const DoctorList = () => {
  const [allDoctors, setAllDoctors] = useState([]); // Full list of doctors
  const [doctors, setDoctors] = useState([]); // Filtered list of doctors
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/doctorDetailGet")
      .then((response) => {
        setAllDoctors(response.data);
        setDoctors(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = () => {
    const filteredDoctors = allDoctors.filter((doctor) => {
      const matchesLocation = doctor.location
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory = filterCategory
        ? doctor.speciality?.toLowerCase() === filterCategory.toLowerCase()
        : true;
  
      return matchesLocation && matchesCategory;
    });
    setDoctors(filteredDoctors);
  };
  

  return (
    <Container>
      <h1 className="mt-4">Find Your Doctor</h1>
      <Row className="my-3">
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder="Search by location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
        <Col md={4}>
          <Form.Select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="">All Specialities</option>
            <option value="Dermatology">Dermatology</option>
            <option value="ENT">ENT</option>
            <option value="Cardiology">Cardiology</option>
          </Form.Select>
        </Col>
        <Col md={4}>
          <Button onClick={handleSearch}>Search</Button>
        </Col>
      </Row>
      <Row>
        {doctors.map((doctor) => (
          <Col md={4} key={doctor.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={doctor.dimg} />
              <Card.Body>
                <Card.Title>{doctor.dname}</Card.Title>
                <Card.Text>
                  <strong>Speciality:</strong> {doctor.speciality}
                  <br />
                  <strong>Location:</strong> {doctor.location}
                  <br />
                  <strong>Fees:</strong> {doctor.fees}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DoctorList;
