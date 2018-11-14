import React, { Component } from "react";
import Input from "./Input";
import axios from "axios";
import "../App.css";

class Converter extends Component {
  state = {
    integer: "",
    ToShow: true,
    roman: "",
    hasError: false
  };

  componentDidCatch(error, info) {
    this.logError(error, info);
  }
  logError = err => {
    console.error(err);
    this.setState(
      {
        hasError: true
      },
      //clear the error
      () =>
        setTimeout(() => {
          this.setState({
            hasError: false
          });
        }, 3000)
    );
  };

  onClickHandler = () => {
    this.setState({ ToShow: !this.state.ToShow });
  };
  handleChang = e => {
    console.log(e.target.valu);
    this.setState({ [e.target.name]: e.target.value });
  };

  hanleSubmit = async e => {
    e.preventDefault();
    try {
      const { roman, integer } = this.state;
      let api = "";
      if (integer !== "") {
        api = await axios.post(`api/roman/?number=${integer}`);
        const response = await api;
        const romanValue = response.data.roman;
        console.log({ romanValue });
        this.setState({ roman: romanValue });
      } else {
        api = axios.post(`api/number?roman=${roman}`);
        const response = await api;
        const integerValue = response.data.number;
        this.setState({ number: integerValue });
        console.log(response);
      }
    } catch (err) {
      this.logError(err);
    }
  };
  render() {
    console.log(this.state.endpoint);
    const { integer, roman, hasError, ToShow } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Input
              handleChang={this.handleChang}
              hanleSubmit={this.hanleSubmit}
              ToShow={ToShow}
              integer={integer}
              roman={roman}
            />
          </div>
        </div>

        <div className="row">
          <button className="swap-button" onClick={this.onClickHandler}>
            {" "}
            Swap conversion
          </button>
        </div>
        {hasError ? (
          <span className="error-msg">
            There was an error performing your requst, make sure you have a
            valid entry.
          </span>
        ) : null}
      </div>
    );
  }
}
export default Converter;
