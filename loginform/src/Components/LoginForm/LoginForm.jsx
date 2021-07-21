import React from "react";
import "./loginForm.css";
import Input from "./../Input/Input";
import Button from "./../Button/Button";
import {
  nameCorrect,
  nameValidation,
  selectCountry,
  validateEmail,
  validatePhoneNumber,
  validatePassword,
} from "../helper/helper";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import { ShowUsers } from "../ShowUsers/ShowUsers";
import { Link } from "react-router-dom";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      nameError: "",
      surname: "",
      surnameError: "",
      phone: "",
      phoneError: "",
      countryFlagPath: "",
      email: "",
      emailError: "",
      password: "",
      passwordError: "",
      confirmPassword: "",
      confirmPasswordError: "",
    };
  }
  handleNameInput = (value, err) => {
    err = nameValidation(value);
    this.setState((prevState) => ({
      name: nameCorrect(value),
      nameError: err,
    }));
  };
  handleSurnameInput = (value, err) => {
    err = nameValidation(value);
    this.setState((prevState) => ({
      surname: nameCorrect(value),
      surnameError: err,
    }));
  };
  handleEmailInput = (value, err) => {
    err = validateEmail(value);

    this.setState((prevState) => ({
      email: value,
      emailError: err,
    }));
  };
  handlePhoneInput = (value, err = "", res) => {
    if (this.state.countryFlagPath === "") {
      res = selectCountry(value);
      if (res == "") {
        err = "your country code is not difined";
      } else {
        value = value[0] === "+" ? "(" + value + ") " : "(+" + value + ") ";
        err = "write number";

        this.setState((prevState) => ({
          countryFlagPath: res,
        }));
      }
    } else if (value.indexOf(") ") < 3) {
      res = "";
      value = "";
      this.setState((prevState) => ({
        countryFlagPath: res,
      }));
    } else {
      const rest = value.substr(value.indexOf(") ") + 2);
      const result = validatePhoneNumber(rest);
      if (rest != result) {
        err = "please insert only numbers";
      } else if (result.length < 8) {
        err = "too short";
      }
      value = value.substring(0, value.indexOf(") ") + 2) + result;
    }

    this.setState((prevState) => ({
      phone: value,
      phoneError: err,
    }));
  };
  handlePasswordInput = (value, err = "") => {
    err = validatePassword(value);
    this.setState((prevState) => ({
      password: value,
      passwordError: err,
    }));
  };
  handleConfirmPasswordInput = (value, err = "") => {
    if (this.state.password != "" && this.state.passwordError === "") {
      if (this.state.password === value) {
        err = "";
      } else {
        err = "password doesn't match";
      }
      this.setState((prevState) => ({
        confirmPassword: value,
        confirmPasswordError: err,
      }));
    } else if (this.state.passwordError != "") {
      err = "please write a valid password";
      this.setState((prevState) => ({
        confirmPasswordError: err,
      }));
    } else {
      err = "you need to inster password field at first";
      this.setState((prevState) => ({
        confirmPasswordError: err,
      }));
    }
  };
  saveDataInLocal = () => {
    {
      const user = {
        name: this.state.name,
        surname: this.state.surname,
        email: this.state.email,
        phone: this.state.phone,
      };
      if (localStorage.users) {
        const users = JSON.parse(localStorage.users);
        users.push(user);
        localStorage.users = JSON.stringify(users);
      } else {
        const users = [user];
        localStorage.users = JSON.stringify(users);
      }
      this.setState((prevState) => ({
        name: "",
        surname: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
      }));
    }
  };
  render() {
    const disableBtn =
      !this.state.nameError == "" ||
      this.state.name == "" ||
      !this.state.surnameError == "" ||
      this.state.surname == "" ||
      !this.state.emailError == "" ||
      this.state.email == "" ||
      !this.state.phoneError == "" ||
      this.state.phone === "" ||
      !this.state.passwordError == "" ||
      this.state.password == "" ||
      !this.state.confirmPasswordError == "" ||
      this.state.confirmPassword == "";
    const goToUsers = localStorage.users ? (
      <Link to="/users">See Users</Link>
    ) : (
      ""
    );
    return (
      <div className="loginForm">
        <h1>Registration</h1>
        <div className="hoc">
          <Input
            type="small"
            text="First Name"
            value={this.state.name}
            err={this.state.nameError}
            metod={this.handleNameInput}
          />
          <Input
            type="small"
            text="Last Name"
            value={this.state.surname}
            err={this.state.surnameError}
            metod={this.handleSurnameInput}
          />
        </div>
        <Input
          type="medium"
          text="Email"
          value={this.state.email}
          err={this.state.emailError}
          metod={this.handleEmailInput}
        />
        <Input
          type="medium"
          text="Phone Number"
          value={this.state.phone}
          err={this.state.phoneError}
          metod={this.handlePhoneInput}
          flagPath={this.state.countryFlagPath}
        />
        <Input
          type="medium"
          text="Password"
          value={this.state.password}
          err={this.state.passwordError}
          metod={this.handlePasswordInput}
          hidden={true}
        />
        <Input
          type="medium"
          text="Confirm Password"
          value={this.state.confirmPassword}
          err={this.state.confirmPasswordError}
          metod={this.handleConfirmPasswordInput}
          hidden={true}
        />
        <Button
          type="primaryBtn"
          text="Register Now"
          disabled={disableBtn}
          metod={this.saveDataInLocal}
        />
        {goToUsers}
      </div>
    );
  }
}
