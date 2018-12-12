import React, { Component } from 'react';
import './index.css';

class Form extends Component {
  render() {
    return (
      <div className="Form">
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={this.props.getWeather}>
              <input type="text" name="city" placeholder="What City..."/>
              <input type="text" name="country" placeholder="Now Country..."/>
              <input type="submit" value="Get Yo Weather"/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Form;
