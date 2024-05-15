import React from "react";
import { Row, Col } from "react-bootstrap";

export default function PatientList() {
  return (
    <div className="container my-5">
      <div
        style={{ fontWeight: "bold", fontSize: "30px", textAlign: "center" }}
      >
        Patient List
      </div>
      <Row xs={1} md={1}>
        <Col>
          <div className="card text-center my-5">
            <div
              className="btn btn-primary"
              style={{
                borderBottomLeftRadius: "0",
                borderBottomRightRadius: "0",
              }}
            >
              Patient Name
            </div>
            <div
              className="card-body"
              style={{ height: "120px", overflow: "hidden" }}
            >
              <div>Age : 42 </div><div>Mobile Number : 98878987239</div>
            </div>
            <div className="card-footer">See Appointments</div>
          </div>
        </Col>
      </Row>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Blog Edit Form
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {/* <div className="modal-body"><BlogEdit blog={blog}></BlogEdit></div> */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              {/* <button type="button" className="btn btn-primary">
              Save changes
            </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
