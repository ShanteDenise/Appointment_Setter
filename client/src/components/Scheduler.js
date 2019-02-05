import React, { Component } from 'react';
import axios from 'axios';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

var timeStyle = {
    background: "red",
    color: "white"
   
    }
var modalLogo = {
    height: 50,
    width: 200
}

var modalHeader = {
    background: "#004e8d,#059, teal ,hsl(206,100,27)rgb(0,78,141)"
}

 class Scheduler extends Component {
    state = {
        appointments: [],
        modalIsOpen: false
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

    openTime = () => {
        this.setState({
            modalIsOpen: true
        })
    }
    toggle = () => {
        this.setState(prevState => ({
            modalIsOpen: !prevState.modalIsOpen, 
        }))
    }
 
  render() {
    return (      
      <div className="appointment_card">  
          {this.state.appointments.map((appointment,i) => (
               <div className="time_list"
               onClick={() => this.openTime()}
               key={i}>{appointment.isAvailable === true ? appointment.time : <div style={timeStyle}>{appointment.time}</div> }
               </div>
          ))}
          <Modal isOpen={this.state.modalIsOpen}>
          <ModalHeader toggle={this.toggle}>
          <p>Book An Appointment</p>
          </ModalHeader>
          <ModalBody>
              <p>Im working</p>
          </ModalBody>



          </Modal>
      </div>
    )
  }
}

export default Scheduler;