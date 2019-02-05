import React, { Component } from "react";
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


class ModalUp extends Component {
  render() {
    return (
      <div>
        <Modal isOpen={this.props.modalIsOpen}>
          <ModalHeader toggle={this.toggle}>
            <p>Book Your Appointment</p>
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

export default ModalUp;
