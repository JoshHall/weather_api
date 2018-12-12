import React, { Component } from 'react';
import './index.css';
import Title from '../../components/title';
import Form from '../../components/form';
import Weather from '../../components/weather';
import API_KEY from '../../config.js';

class Home extends Component {
  constructor() {
    super();

    // state will hold data from API call, and API key
    this.state = {
      data: [],
      API_KEY: ''
    }
  }

  componentWillMount() {
    this.setState({
      API_KEY: API_KEY
    });
  }

  // creat function for FORM that will call API with values from fields
  getWeather = async(event) => {
    // prevent the form from refreshing the page
    event.preventDefault();

    let city = event.target.elements.city.value;
    let country = event.target.elements.country.value;

    // create a variable that holds the url for the api call
    const URL =`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${this.state.API_KEY}`

    // create a variable to call the api and store the response
    let api_call = await fetch(URL);

    // convert response from api_call variable into json format
    let data = await api_call.json();

    // set new data to the state
    this.setState({
      data: data
    });

  }


  render() {
    return (
      <div className="Home">
        <div className="row">
        <div className="col-md-4">
          <Title />
        </div>
        <div className="col-md-8">
          <Form getWeather={this.getWeather} />
          <Weather data={this.state.data} />
        </div>
        </div>
      </div>
    );
  }
}
export default Home;
