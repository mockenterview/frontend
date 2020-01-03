import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

//component import for sign up and login
import Private from "./Components/Routes/Private"
import {Login} from "./Components/Login/Login"
import {Register} from "./Components/Register/Register"
// style imports
import Header from "./Components/Header/home-header"
import About from "./Components/About/About"
import userDashboard from "./Components/User/UserDashboard"
import Profile from './Components/Profile/Profile'


function App() {
  return (
   <Router>
     <div className='App'>
       <Header />
       <Route exact path='/' component={About} />
       <Route exact path='/login' component ={Login} />
       {/* <Groups />
       <SideBar /> */}
       {/* <Route exact path='/' component ={SignUp} />
       <Route exact path='/login' component ={Login} /> */}
      
       <Route exact path='/register' component ={Register} />
       
       <Route exact path='/profile' component ={Profile} />
       <Route exact path='/userDashboard' component={userDashboard} />

       
      
     </div>

   </Router>
  );
}

export default App;
