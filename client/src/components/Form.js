import React, { Component } from 'react'
import  { Form, FormGroup, Label, Input, Button, Col, Row} from 'reactstrap'




 class FormApp extends Component {
  render() {
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
                      id="exampleName"
                      placeholder="Enter First Name"
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
                      id="exampleName"
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
                  id="examplePhone"
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
        
      </div>
    )
  }
}

export default FormApp
