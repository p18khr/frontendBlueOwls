import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Payment(props) {
  const {appt} = props;
  const [amount, setAmount] = useState(400);

  const navigate = useNavigate();

  const submit = async () => {
    
      await fetch(`http://localhost:8081/patient`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appt),
      });
    
  };

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
        submit();
        navigate("/");
      },
      prefill: {
        name: "Prakhar",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className=" my-5">
      <div style={{ fontWeight: "bold" }}>Enter Amount to pay:</div>
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
  );
}
