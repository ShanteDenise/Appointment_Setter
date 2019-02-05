import React, { Component } from "react";
import axios from "axios";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Col,
  Row
} from "reactstrap";

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
    this.getAllUsers();
  }

  getAllUsers = () => {
    axios.get("/api/appointments").then(res => {
      this.setState({
        appointments: res.data
      });
    });
  };

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
    e.preventDefault();
    const payload = {
        first_name: this.state.newAppointment.first_name,
        last_name: this.state.newAppointment.last_name,
        phone: this.state.newAppointment.phone,
    }

    axios.post("/api/users", payload).then(res => {
      console.log(res.data)
      const payloadApp = {
        user: res.data._id,
        isAvailable: false
      }
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

            {this.isAvailable === true ? "Book An Appointment" : "Appointment Slot is Taken. Please choose a different time"}
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="first_name">First Name</Label>
                    <Input
                      onChange={this.handleChange}
                      type="text"
                      name="first_name"
                      id="exampleName"
                      placeholder="Enter First Name"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="last_name">Last Name</Label>
                    <Input
                      onChange={this.handleChange}
                      type="text"
                      name="last_name"
                      id="exampleName"
                      placeholder="Enter Last Name"
                    />
                  </FormGroup>
                </Col>
              </Row>

              <FormGroup>
                <Label for="examplePhone">Phone</Label>
                <Input
                  onChange={this.handleChange}
                  type="Number"
                  name="phone"
                  id="examplePhone"
                  placeholder="Enter Phone Number"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="with a placeholder"
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" /> Check me out
                </Label>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </ModalBody>
        </Modal>
        </div>

    );
  }
}

export default Scheduler;
