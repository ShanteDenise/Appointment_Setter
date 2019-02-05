import React, { Component } from 'react';
import './App.css';
import Scheduler from './components/Scheduler';



class App extends Component {
 
  render() {
    return (
      <div className="App">
      <h1>Appointment Setter</h1>
      <Scheduler/>

 
      </div>
    );
  }
}

export default App;
