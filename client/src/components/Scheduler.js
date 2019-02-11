import React, { Component } from "react";
import axios from "axios";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import FormApp from "./Form";
import { getAllUsers, handleChange, changeAppointStatus } from "../actions/index";
import { connect } from "react-redux";

var timeStyle = {
  background: "red",
  color: "white"
};

var modalFont = {
  color: 'red',
  textAlign: 'center'
}
var headModalFont = {
  textAlign: 'center'
}

class Scheduler extends Component {
  state = {
    modalIsOpen: false,
    newAppointment: {
      first_name: "",
      last_name: "",
      phone: Number
    }
  };

  componentDidMount() {
    this.props.getAllUsers();
  }

  openTime = (app) => {    
    this.setState({
      modalIsOpen: true,
      id: app
    });
  }


  toggle = () => {
    this.setState(prevState => ({
      modalIsOpen: !prevState.modalIsOpen
    }));
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    const id = e.target.id;
    
    this.props.handleChange(name, value, id);

    // Also updating the state with the id
    this.setState({
      id
    });
  };


  handleSubmit = e => {
    e.preventDefault();
    const id = this.state.id;
    const currentAppointment = this.currentAppoint(id);
    const payload = {
      first_name: currentAppointment.user.first_name,
      last_name: currentAppointment.user.last_name,
      phone: currentAppointment.user.phone,
      // email: currentAppointment.user.email
    };

    axios.post("/api/users", payload).then(res => {
      const payloadApp = {
        user: res.data._id,
        isAvailable: false
      };
      axios
        .patch(`/api/appointments/${this.state.id}`, payloadApp)
        .then(res => {
          console.log(res.data);
          this.props.changeAppointStatus(false, id);
        });
    });
    this.toggle();
  };

  currentAppoint = id => {
    const appointments = this.props.appointments// all appointments from redux
    let current = { };
    for (let i = 0; i < appointments.length; i++) {
      if (id === appointments[i]._id) {
        current = appointments[i];
      }
    }// current appointment

    return current;
  }

  render() {
    const id = this.state.id || null;
    return (
      <div className="appointment_card">
        {this.props.appointments.map((appointment, i) => (
          <div
            className="time_list"
            onClick={() => this.openTime(appointment._id)}
            key={i}
          >
            {appointment.isAvailable === true ? (
              appointment.time
            ) : (
              <div style={timeStyle}>{appointment.time}</div>
            )}
          </div>
        ))}

        <Modal isOpen={this.state.modalIsOpen}>
          <ModalHeader toggle={this.toggle}>
            <h5 style={headModalFont}>Book Your Appointment</h5>
            <p style={modalFont}> Note: Once Appointment is booked time slot will turn Red</p>
          </ModalHeader>
          <ModalBody>
            <FormApp
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              id={this.state.id}
              newAppointment={this.currentAppoint(id)}
            />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    getAllUsers: () => dispatch(getAllUsers()),
    handleChange: (name, value, id) => dispatch(handleChange(name, value, id)),
    changeAppointStatus: (isAvailable, id) => dispatch(changeAppointStatus(isAvailable, id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Scheduler);
