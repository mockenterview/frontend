import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

//component import for sign up and login
import Private from "./Components/Routes/Private"
// style imports
import Header from "./Components/Header/home-header"
import Calendar from './Components/calendar/Calendar'



function App() {
  return (
   <Router>
     <div className='App'>
       <Header />
       
       {/* <Route exact path='/' component ={SignUp} />
       <Route exact path='/login' component ={Login} /> */}
     </div>

   </Router>
  );
}

export default App;
