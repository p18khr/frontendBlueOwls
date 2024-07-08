import React, { useEffect, useState } from "react";
import { Row, Col, Button, Modal } from "react-bootstrap";

export default function PatientList() {
  const [show, setShow] = useState(false);
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleClose = () => setShow(false);

  const handleShow = (patient) => {
    setSelectedPatient(patient);
    setShow(true);
  };

  const getPatientsList = async () => {
    try {
      const response = await fetch(`http://localhost:8081/patient`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      setPatients(json);
      setFilteredPatients(json);
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  const filterPatientsByName = (event) => {
    const filter = patients.filter((patient) =>
      patient.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredPatients(filter);
  };

  useEffect(() => {
    getPatientsList();
  }, []);

  return (
    <div className="container my-5">
      <div className="container my-5">
        <input type="text" onChange={filterPatientsByName} placeholder="Search by name" />
      </div>
      <div style={{ fontWeight: "bold", fontSize: "30px", textAlign: "center" }}>
        Patient List
      </div>
      <Row xs={1} md={1}>
        {filteredPatients.map((patient) => (
          <Col key={patient.id}>
            <div className="card text-center my-5">
              <div
                className="btn btn-primary"
                style={{
                  borderBottomLeftRadius: "0",
                  borderBottomRightRadius: "0",
                }}
              >
                Patient Name: {patient.name}
                <br />
                id:&nbsp;{patient.id}
              </div>
              <div className="card-body" style={{ height: "120px", overflow: "hidden" }}>
                <div>Age : {patient.age} </div>
                <div>Mobile Number : {patient.phone}</div>
              </div>
              <Button
                variant="primary"
                style={{ color: "black" }}
                className="card-footer"
                onClick={() => handleShow(patient)}
              >
                See Appointments
              </Button>
            </div>
          </Col>
        ))}
        <div hidden={patients.length !== 0}>No Patients to show</div>
      </Row>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Appointment Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedPatient && selectedPatient.appointments && selectedPatient.appointments.length > 0 ? (
            selectedPatient.appointments.map((app) => (
              <div key={app.id}>
                <div>Appointment Id:&nbsp;{app.id}</div>
                <div>Appointment Date:&nbsp;{app.date.slice(0, 10)}</div>
                <div>Appointment Time:&nbsp;{app.time}</div>
                <div>Fee (paid):&nbsp;&#8377;{app.fee}</div>
              </div>
            ))
          ) : (
            <div>No appointments available.</div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
