import React from 'react';
import logo from './logo.svg';
import './App.css';
import SelectCity from './components/SelectCity/index';
import WeatherShow from './components/WeatherShow/index';
import { Row, Col, Container, Card, Alert } from 'bootstrap-4-react';

const API_KEY = '142aaceb6530cb2440f2c82088cc0211';

class App extends React.Component {
	
	state = {
		weatherData: {},
		iconUrl: null,
		city: null, 
		className: 'clear',
		img: document.getElementById("background-image"),
		err: null
	}



	getWeather = async (e) => {
		try {
			e.preventDefault();
			const city = e.target.elements.city.value.split("").map((a, i) => i == 0 ? a.toUpperCase() : a.toLowerCase()).join("");
			const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
			const data = await response.json();

			const weatherData = await {
				humidity: data.main.humidity,
				temp: Math.round(data.main.temp),
				press: data.main.pressure ,
				feelsLike: Math.round(data.main.feels_like),
				condition: data.weather[0].main,
				description: data.weather[0].description,
				wind: Math.round(data.wind.speed)
			};
			const iconName = await data.weather[0].icon;
			const iconUrl = `http://openweathermap.org/img/wn/${iconName}@2x.png`;
			this.setState({weatherData, iconUrl, city, className: weatherData.condition.toLowerCase(), err: null});
		}
		catch(err) {
			this.setState({err});
		}
	}
	
	render(){
		return (
			<div >
				<div id='background-image' className={this.state.className}></div>
				<Container fluid className='h-100' id='container'>
					<Row alignItems="center" justifyContent='center' className='h-100'>
						<Col className='col-lg-8'>
							<Card id='card' className='text-white'>
								<Card.Title className='mx-auto my-3'>This will show you the weather</Card.Title>
								<SelectCity getWeather={this.getWeather} />
								{this.state.err != null && 
								<Alert danger mx='5'>Wrong city</Alert>
								}
								<WeatherShow  city={this.state.city} icon={this.state.iconUrl} data={this.state.weatherData} />
							</Card>
						</Col>
					</Row>	
				</Container>
			</div>
			
		  );
	}
	
}

export default App;
