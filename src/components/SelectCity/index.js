import React, { Component } from "react";
import { Form, Row, Col, Container, Button } from 'bootstrap-4-react';

class SelectPage extends Component {
  
	render() {
    	return (
			<Form onSubmit={this.props.getWeather}>
				<Form.Group className='mx-5'>
					<label htmlFor="exampleControlsInput1">Type the name of city</label>
					<Form.Input type="text" id="exampleControlsInput1" name='city' placeholder="City"  />
					<Button className='btn btn-info btn-block mt-2' >Recieve</Button>
				</Form.Group>
			</Form>
    	);
  	}
}

export default SelectPage;