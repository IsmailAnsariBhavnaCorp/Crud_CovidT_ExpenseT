import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
  // import Home component
import CovidTracker from './CovidTracker';

import ManageEmployeeForm from './ManageEmployeeForm';


function App(){
  
  return(
  <>
<div style={{padding:'10px'}}>
<nav className="navbar navbar-expand-lg navbar-light bg-light" >
  <a className="navbar-brand" href="#">React App</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" id='ManageEmployeeForm' href="/ManageEmployeeForm">Employee Management</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" id='CovidTracker' href="/CovidTracker">Covid Tracker</a>
      </li>
     
    </ul>
  </div>
  </nav>


   {/* This is the alias of BrowserRouter i.e. Router */}
   <Router>
        <Routes>
     
        <Route path="/CovidTracker" element={<CovidTracker />} />
        <Route path="/ManageEmployeeForm" element={<ManageEmployeeForm />} />
    
        {/* <Route path="/" element={<Navigate replace to="/home" />} /> */}
        </Routes>
      </Router>

     </div>
  </>



  )
}


export default App;
