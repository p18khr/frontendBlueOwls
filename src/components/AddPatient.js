import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

export default function AddPatient() {
  const [appointment, setAppointment] = useState({
    id: Math.floor(Math.random() * 10001),
    name: "",
    email: "",
    phone: "",
    age: "",
    date: new Date(),
    time: "",
  });

  const [showForm, setShowForm] = useState(false);
  const [showPay, setShowPay] = useState(true);

 
  const handleForm = () => setShowForm(true);
  const handlePay = () => setShowPay(false);


  function timePassed(time) {
    let [hours, mins] = time.split(":");

    setAppointment((obj) => ({
      ...obj,
      time: hours + ":" + mins,
    }));

  }


  function handleSubmit(event){
    if(appointment.date !== "" && appointment.name !== "" && appointment.email !== ""  && appointment.time !== ""  && appointment.phone !== "" && appointment.age !== ""){
      handleForm();
      handlePay();
      event.preventDefault();
    }
    
  }

  const submitAppointment = async (id, name, email, phone, age, date, time) => {
    await fetch(`http://localhost:8081/patient`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, email, phone, age, date, time }),
    });
  };


  const [amount, setAmount] = useState(400);

  const navigate = useNavigate();

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const initiatePayment = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline!... Failed to load Razorpay gateway");
    }

    const options = {
      key: "rzp_test_JjfSzaMNrb19Ek",
      currency: "INR",
      amount: amount * 100,
      name: "Prakhar Punj Shrivastava",
      description: "Payment for GoJunglee.com",
      image:
        "https://mern-blog-akky.herokuapp.com/static/media/logo.8c649bfa.png",

      handler: function (response) {
        alert(
          "Payment Successful! Payment id: " + response.razorpay_payment_id
        );

        submitAppointment(appointment.id, appointment.name, appointment.email, appointment.phone, appointment.age, appointment.date, appointment.time);
        navigate("/");
      },
      prefill: {
        name: "Prakhar",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };


  useEffect(()=>{
    
  },[appointment])

  return (

    <div className="container my-5">
      <div hidden={showForm}>
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
      
      <div className=" my-5" hidden={showPay}>
      <div style={{ fontWeight: "bold" }}>Kindly make payment to book an appointment:</div>
      <br />
      <br />
      <input
        type="number"
        onChange={(e) => {
          setAmount(e.target.value);
        }}
        disabled
        value={400}
      />
      <br />
      <br />
      <button
        disabled={amount < 1 || amount === null}
        className="btn btn-primary"
        onClick={initiatePayment}
      >
        Pay {amount}
      </button>
    </div>
    </div>


  );

  
}
