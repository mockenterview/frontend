import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

//component import for sign up and login
import Private from "./Components/Routes/Private"
function App() {
  return (
   <Router>
     <div className='App'>
       <Route exact path='/' component ={SignUp} />
       <Route exact path='/login' component ={Login} />
     </div>
   </Router>
  );
}

export default App;
