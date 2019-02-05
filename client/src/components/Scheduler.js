import React, { Component } from 'react';
import axios from 'axios'


var timeStyle = {
    background: "red",
    color: "white"
   
    }

 class Scheduler extends Component {
    state = {
        appointments: []
    }

    componentDidMount(){
        this.getAllUsers()

    }
    
 getAllUsers = () => {
        axios.get('/api/appointments').then(res => {
            this.setState({
                appointments: res.data
               })
               console.log(this.state)
        })  
    }
 
  render() {
    return (
        
      <div className="appointment_card">  

          {this.state.appointments.map((appointment,i) => (
               <div className="time_list" key={i}>{appointment.isAvailable === true ? appointment.time : <div style={timeStyle}>{appointment.time}</div> }
           
               </div>
          ))}
      </div>
    )
  }
}

export default Scheduler;