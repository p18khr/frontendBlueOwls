import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddPatient() {

    function timePassed(time) {                
        let[hours, mins] = time.split(":");
        console.log(hours);
        console.log(mins);
     //todo: get the hours and minutes from the input value and store them in separate variables
   }

  return (
    <div className="container my-5">
      <div
        style={{ fontWeight: "bold", fontSize: "30px", textAlign: "center" }}
      >
        Create Appointment
      </div>
      <form className="mx-3 my-5">
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label style={{ color: "white" }}>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label style={{ color: "white" }}>Mobile Number</label>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                aria-describedby="inputGroupPrepend2"
                required
              />
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label style={{ color: "white" }}>City</label>
            <input
              type="number"
              className="form-control"
              placeholder="Mobile number"
              maxLength={10}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label style={{ color: "white" }}>Age</label>
            <input
              type="number"
              className="form-control"
              placeholder="Age"
              max={150}
              min={1}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <span>Select Appointment Date:</span>
            <DatePicker
              selected={new Date()}
              minDate={new Date()}
              onChange={(e) => {
                console.log(e);
              }}
            />
          </div>
          <div className="col-md-6 mb-3">
            <span>Select Appointment Time:</span>
            <input type="time" id="timepicker" onChange={(e)=>{timePassed(e.target.value)}}/>
          </div>
        </div>

        <div className="my-4" style={{ textAlign: "center" }}>
          <br />
          <br />
          {/* <span>Total Estimate: &#8377; {(adult * 2000 + kids * 900)*days} for {days} nights</span>
            <br />
            <br /> */}
          <button className="btn btn-primary" type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
