import React, { Component } from 'react'
import  { Form, FormGroup, Label, Input, Button, Col, Row} from 'reactstrap'




 class FormApp extends Component {
  render() {
    const currentAppoinment = this.props.newAppointment;

    return (
      <div>
        <Form onSubmit={this.props.handleSubmit}>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="first_name">First Name</Label>
                    <Input
                      onChange={this.props.handleChange}
                      type="text"
                      name="first_name"
                      id={currentAppoinment._id}
                      placeholder="Enter First Name"
                      value={currentAppoinment.user ? currentAppoinment.user.first_name : ''}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="last_name">Last Name</Label>
                    <Input
                      onChange={this.props.handleChange}
                      type="text"
                      name="last_name"
                      value={currentAppoinment.user ? currentAppoinment.user.last_name : ''}
                      id={currentAppoinment._id}
                      placeholder="Enter Last Name"
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>

              <FormGroup>
                <Label for="examplePhone">Phone</Label>
                <Input
                  onChange={this.props.handleChange}
                  type="tel"
                  pattern="^[0-9-+s()]*$"
                  name="phone"
                  id={currentAppoinment._id}
                  value={currentAppoinment.user ? currentAppoinment.user.phone : ''}
                  placeholder="Enter Phone Number"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  onChange={this.props.handleChange}
                  type="email"
                  name="email"
                  id={currentAppoinment._id}
                  // value={newAppointment.user.email}
                  placeholder="Email is Optional"
                />
              </FormGroup>
              <Button color="primary">Submit</Button>
            </Form>
        
      </div>
    )
  }
}

export default FormApp
