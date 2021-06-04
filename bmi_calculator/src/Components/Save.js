import React, { Component } from "react";

class Save extends Component {
//componentDidMount() {
//let data = JSON.parse(localStorage.getItem("arr"));
//if (data) this.setState({ arr: data });
// }

  render() {
    return (
      <div>
        {this.props.bmiArr.map((item, index) => (
          <ul>
            <li>BMI = {item.bmi}</li>
            <li>WEIGHT = {item.weight}</li>
            <li>HEIGHT = {item.height}</li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Save;
