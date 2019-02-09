import React, { Component } from "react";
import axios from "axios";
import {
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";
import FormApp from './Form'
import { getAllUsers} from '../actions/index';
import { connect } from 'react-redux'


var timeStyle = {
  background: "red",
  color: "white"
};


class Scheduler extends Component {
  state = {
    appointments: [],
    modalIsOpen: false,
    id: "",  

    newAppointment: {
      first_name: "",
      last_name: "",
      phone: Number
    }
  };

  componentDidMount() {
   this.props.getAllUsers();
  }

  // getAllUsers = () => {
  //   this.props.dispatch({
  //     type: 'GET_USERS'
  //     });

      
  //   }

  openTime = (app) => {
    this.setState({
      modalIsOpen: true,
      id: app
    });
  };

  toggle = () => {
    this.setState(prevState => ({
      modalIsOpen: !prevState.modalIsOpen
    }));
  };

  handleChange = e => {
    const appointment = { ...this.state.newAppointment };
    appointment[e.target.name] = e.target.value;
    this.setState({
      newAppointment: appointment
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    const payload = {
        first_name: this.state.newAppointment.first_name,
        last_name: this.state.newAppointment.last_name,
        phone: this.state.newAppointment.phone,
    }

    axios.post("/api/users", payload).then(res => {
      const payloadApp = {
        user: res.data._id,
        isAvailable: false
      }
      console.log(res.data)
      axios.patch(`/api/appointments/${this.state.id}`, payloadApp).then(res =>
        {console.log(res.data)})
    })
    this.toggle()
  };
 



  render() {
    return (
      <div className="appointment_card">
        {this.state.appointments.map((appointment, i) => (
          <div className="time_list" onClick={() => this.openTime(appointment._id)} key={i}>
            {appointment.isAvailable === true ? (
              appointment.time
            ) : (
              <div style={timeStyle}>{appointment.time}</div>
            )}
          </div>
        ))}
        
        <Modal isOpen={this.state.modalIsOpen}>
          <ModalHeader toggle={this.toggle}>
            <p>Book Your Appointment</p>
                          
          </ModalHeader>
          <ModalBody>

            <FormApp  handleSubmit={this.handleSubmit} 
                      handleChange={this.handleChange} 
                      id={this.state.id} 
                      newAppointment={this.state.newAppointment}
    />
            
          </ModalBody>
        </Modal>
        </div>

    );
  }
}
const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllUsers: () => dispatch(getAllUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scheduler);
