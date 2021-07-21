import React from "react";
import Button from "../Button/Button.jsx";
import { Display } from "../Display/Display.jsx";
import Input from "../Input/Input.jsx";
import "./calculator.css";

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clickCount: 0,
      maxCount: 10,
      minCount: 0,
      step: 1,
    };
  }
  componentDidMount() {
    if (localStorage.count) {
      this.setState((prevState) => ({
        clickCount: JSON.parse(localStorage.count),
      }));
    }
    if (localStorage.max) {
      this.setState((prevState) => ({
        maxCount: JSON.parse(localStorage.max),
      }));
    }
    if (localStorage.min) {
      this.setState((prevState) => ({
        minCount: JSON.parse(localStorage.max),
      }));
    }
    if (localStorage.step) {
      this.setState((prevState) => ({
        step: JSON.parse(localStorage.step),
      }));
    }
  }

  handleInc = () => {
    localStorage.count = JSON.stringify(
      +this.state.clickCount + this.state.step
    );
    this.setState((prevState) => ({
      clickCount: prevState.clickCount + parseInt(this.state.step),
    }));
  };
  handleDec = () => {
    localStorage.count = JSON.stringify(
      +this.state.clickCount - this.state.step
    );
    this.setState((prevState) => ({
      clickCunt: parseInt(prevState.clickCount) - parseInt(this.state.step),
    }));
  };
  handleReset = () => {
    localStorage.count = JSON.stringify(0);
    this.setState((prevState) => ({
      clickCount: 0,
    }));
  };
  handleMax = (value) => {
    localStorage.max = JSON.stringify(+value);
    this.setState((prevState) => ({
      maxCount: value,
    }));
  };
  handleMin = (value) => {
    localStorage.min = JSON.stringify(+value);
    this.setState((prevState) => ({
      minCount: value,
      clickCount:
        prevState.clickCount < value ? parseInt(value) : prevState.clickCount,
    }));
  };
  handleStep = (value) => {
    localStorage.step = JSON.stringify(+value);
    this.setState((prevState) => ({
      step: value,
    }));
  };
  render() {
    const disableDec =
      this.state.clickCount <= 0 || this.state.clickCount <= this.state.minCount
        ? true
        : false;
    const disableInc =
      this.state.clickCount >= this.state.maxCount ? true : false;
    const disableReset = this.state.clickCount === 0 ? true : false;

    return (
      <div className="calculator">
        <div className="displayBar">
          <Display text={this.state.clickCount} color="red" />
        </div>
        <div className="btnsBar">
          <Button
            text="Inc"
            type="primary"
            metod={this.handleInc}
            disable={disableInc}
          />
          <Button
            text="Dec"
            type="secondary"
            metod={this.handleDec}
            disable={disableDec}
          />
          <Button
            text="Reset"
            type="secondary2"
            metod={this.handleReset}
            disable={disableReset}
          />
        </div>
        <div className="inputBar">
          <Input
            text="Max"
            type="primaryInput"
            metod={this.handleMax}
            value={this.state.maxCount}
          />
          <Input
            text="Min"
            type="secondaryInput"
            metod={this.handleMin}
            value={this.state.minCount}
          />
          <Input
            text="Step"
            type="secondaryInput2"
            metod={this.handleStep}
            value={this.state.step}
          />
        </div>
      </div>
    );
  }
}
