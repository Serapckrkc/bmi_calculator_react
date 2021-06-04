import React, { Component } from 'react'

class Output extends Component {
  // convert cm into ft 
  toFeet = (num) => {
    let realFeet = ((num * 0.393700) / 12); 
    let feet = Math.floor(realFeet); 
    let inches = Math.round((realFeet - feet) * 12); 
    return `${feet}'${inches}`; 
  }
  // convert kg to lbs
  toLbs = (num) => {
    let nearExact = num/0.45359237; 
    let lbs = Math.floor(nearExact); 
    return lbs; 
  }

  render() {
    let height = this.props.data.height; 
    let weight = this.props.data.weight; 
    let bmi = this.props.data.bmi; 
    let bmiClass = this.props.data.bmiClass; 
    // conversions
    let heightFeet = this.toFeet(height); 
    let pounds = this.toLbs(weight); 

    return (
      <div className="output">
        <h3>
          {height}cm
          <span className="imperial"> {heightFeet}</span>
        </h3>
        <h3>
          {weight}kg
          <span className="imperial"> {pounds}lbs</span>  
        </h3>
        <h3>{bmi}</h3>
        <h3>{bmiClass}</h3>
      </div>
    );
  }
}

export default Output
