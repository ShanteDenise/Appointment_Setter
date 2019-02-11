import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import BackgroundImg from './components/BackgroundImg';
import Scheduler from './components/Scheduler';
import Jumbo from './components/Jumbo';

class App extends Component {
 
  render() {
    return (
      <div className="app">
      <NavBar/>
      <BackgroundImg/>
      <Jumbo/>

      <div className="schedule">
      <h2 className="appointmentText">Select An Appointment Time</h2>
      <Scheduler/>
      </div>
     
   
      </div>
    );
  }
}

export default App;
