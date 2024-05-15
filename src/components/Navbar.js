import React from 'react';
import {Link} from 'react-router-dom';


export default function Navbar() {



  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary" style={{width:'100%'}}>
  <a className="navbar-brand" to="/"></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li >
        <Link className="nav-link active" to="/" >Home</Link>
      </li>
      <li>
        <Link className="nav-link active" to="/add">Create Appointment</Link>
      </li>
      <li>
        <Link className="nav-link active" to="/">Patient List</Link>
      </li>
      </ul>
  </div>
</nav>
    </div>
  )
}
