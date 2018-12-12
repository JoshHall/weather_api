import React, { Component } from 'react';
import './index.css';

class Weather extends Component {
// function to convert Kelvin to Fahrenheit
convertDeg = temp => {
  // F = 9/5 (K - 273) + 32
  return ((9/5) * (temp - 273) + 32).toFixed(2);
}

  render() {

    return (
      <div className="Weather">
        <div className="row">
          <div className="col-md-12">
            {this.props.data.name &&
              <div>
                <h3>City: {this.props.data.name}</h3>
                <h3>Country: {this.props.data.sys.country}</h3>
                <h3>Temperature: {this.convertDeg(this.props.data.main.temp)}&deg;</h3>
                <h3>Humidity: {this.props.data.main.humidity}%</h3>
                <h3>Description: {this.props.data.weather[0].description}</h3>
              </div>
            }
            {/*Error section should only appear if an error occurs*/}
            {this.props.data.cod === "404" && <h3>Error: {this.props.data.message}</h3>}
          </div>
        </div>
      </div>
    );
  }
}
export default Weather;
