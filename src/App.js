import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

//component import for sign up and login
import Private from "./Components/Routes/Private"
import {Login} from "./Components/Login/Login"
import {Register} from "./Components/Register/Register"
// style imports
import Header from "./Components/Header/home-header"
import Calendar from './Components/calendar/Calendar'
import Groups from "./Components/Interviews/GroupCards"
import SideBar from "./Components/Header/sideBar"
import userDashboard from "./Components/UserDashboard"

import Profile from './Components/Profile/Profile'


function App() {
  return (
   <Router>
     <div className='App'>
       <Header />
       {/* <Route exact path='/' component ={Register} /> */}
       <Route exact path='/login' component ={Login} />
       <Route exact path='/profile' component ={Profile} />
       <SideBar />
    
       <Route exact path='/userDashboard' component={userDashboard} />

       {/* <Route exact path='/' component ={SignUp} />
       <Route exact path='/login' component ={Login} /> */}
       
      
     </div>

   </Router>
  );
}

export default App;
