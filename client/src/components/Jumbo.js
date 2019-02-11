import { Jumbotron, Button } from 'reactstrap';

import React, { Component } from 'react'


export default class Jumbo extends Component {
    render() {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Schedule Your Appointment</h1>
        <p className="lead">We focus on continually improving our products to create faster vehicle transactions, enabling consumers to have a seamless online-to-offline experience. </p>
        <hr className="my-2" />
        <p>Click on a Time below to Book an Appointment or Click the Button to Learn more about how Cox Automotive solutions can take every aspect of your business further, faster. </p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

}