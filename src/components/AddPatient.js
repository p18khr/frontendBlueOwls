import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import Payment from "./Payment";

export default function AddPatient() {
  const [appointment, setAppointment] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    date: new Date(),
    time: "",
  });

  function timePassed(time) {
    let [hours, mins] = time.split(":");

    setAppointment((obj) => ({
      ...obj,
      time: hours + ":" + mins,
    }));

    //todo: get the hours and minutes from the input value and store them in separate variables
  }

  const navigate = useNavigate();
  function handleSubmit(){
    if(appointment.date !== "" && appointment.name !== "" && appointment.email !== ""  && appointment.time !== ""  && appointment.phone !== "" && appointment.age !== "" ){
      <Payment appt={appointment}/>
      navigate("/pay");
      
    }
    
  }

  useEffect(()=>{
    
  },[appointment])

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
            
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              required
              onChange={(e) => {
                setAppointment((obj) => ({
                  ...obj,
                  name: e.target.value,
                }));
              }}
            />
          </div>
          <div className="col-md-6 mb-3">
           
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                aria-describedby="inputGroupPrepend2"
                onChange={(e) => {
                  setAppointment((obj) => ({
                    ...obj,
                    email: e.target.value,
                  }));
                }}
                required
              />
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            
            <input
              type="number"
              className="form-control"
              placeholder="Mobile number"
              maxLength={10}
              onChange={(e) => {
                setAppointment((obj) => ({
                  ...obj,
                  phone: e.target.value,
                }));
              }}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            
            <input
              type="number"
              className="form-control"
              placeholder="Age"
              max={150}
              min={1}
              onChange={(e) => {
                setAppointment((obj) => ({
                  ...obj,
                  age: e.target.value,
                }));
              }}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            
            <span>Select Appointment Date:&nbsp;&nbsp;</span>
            <DatePicker
              selected={appointment.date}
              minDate={new Date()}
              onChange={(e) => {
                setAppointment((obj) => ({
                  ...obj,
                  date: e,
                }));
                
              }}
              
            />
          </div>
          <div className="col-md-6 mb-3">
            <span>Select Appointment Time:&nbsp;&nbsp;</span>
            <input
              type="time"
              id="timepicker"
              onChange={(e) => {
                timePassed(e.target.value);
              }}
              required
            />
          </div>
        </div>

        <div className="my-4" style={{ textAlign: "center" }}>
          <br />
          <br />
          {/* <span>Total Estimate: &#8377; {(adult * 2000 + kids * 900)*days} for {days} nights</span>
            <br />
            <br /> */}
          <button className="btn btn-primary" type="submit" onClick={handleSubmit}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
