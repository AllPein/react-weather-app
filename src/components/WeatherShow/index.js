import React, { Component } from "react";
import { Row, Col, Container } from 'bootstrap-4-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind, faTint, faCompass } from '@fortawesome/free-solid-svg-icons'

class WeatherShow extends Component {
	
	render() {
		const iconStyle = {
			height: "25px",
			width: "25px"
		}
    	return (
    		<Container className='my-3 px-2'>
				{ this.props.city &&
				<div>
					<Row justifyContent='center'>
						<h2 className="font-weight-light ">Current weather in {this.props.city}</h2> 
					</Row>
					<Row justifyContent='center' className='px-3'>
						<Col className='col-lg-2 col-md-3 col-6 mt-3'>
							<h1>{this.props.data.temp > 0 ? '+' : ''}{this.props.data.temp}&#176;С</h1>
							<p className="text-muted">feels like {this.props.data.feelsLike > 0 ? '+' : ''}{this.props.data.feelsLike}&#176;С</p>	
						</Col>
						<Col className='col-lg-2 col-md-3' display='none sm-block' >
							<img src={this.props.icon} alt=""/>
						</Col>
						<Col className='col-lg-2 col-md-3 col-6' >
							<h2 className='mt-3'>{this.props.data.wind} m/s</h2>
							<FontAwesomeIcon icon={faWind} style={iconStyle} className='ml-3' />
						</Col>
						<Col className='col-lg-2 col-md-3 col-6' >
							<h2 className='mt-3'>{this.props.data.humidity}%</h2>
							<FontAwesomeIcon icon={faTint} style={iconStyle} className='ml-3' />
						</Col>
						<Col className='col-lg-2 col-md-3 col-6' >
							<h2 className='mt-3'>{this.props.data.press} mb</h2>
							<FontAwesomeIcon icon={faCompass} style={iconStyle} className='ml-5' />
						</Col>
					</Row>
				</div>
				}
            </Container>
    	);
  	}
}

export default WeatherShow;