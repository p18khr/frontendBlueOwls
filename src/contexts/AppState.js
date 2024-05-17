import { useState } from "react";
import AppContext from "./AppContext";

const AppState = (props) => {

  const [patients, setPatients] = useState([]);
  const [appt,setAppt] = useState({});
  const getPatientsList = async (id) => {
    {
      const response = await fetch(`http://localhost:8081/patient`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      setPatients(json);
    }
  };

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

  return (
    <AppContext.Provider
      value={{
        patients,
        getPatientsList,
        submitAppointment,
        appt,
        setAppt
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
