import "./App.css";
import AddPatient from "./components/AddPatient";
import Navbar from "./components/Navbar";
import PatientList from "./components/PatientList";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<PatientList />}></Route>
          <Route exact path="/add" element={<AddPatient />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
