import React, { Component } from "react";
import Input from "./Input";
import Result from "./Result";
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
    const {ToShow} = this.state
    this.setState({ ToShow: ToShow ? false : true });
  };
  handleChang = e => {

    this.setState({ [e.target.name]: e.target.value });
  };

  hanleSubmit = async e => {
    e.preventDefault();
    try {
      const { roman, integer, ToShow } = this.state;
      let api = "";
      if (ToShow) {
        api = await axios.post(`api/roman/?number=${integer}`);
        const response = await api;
        const romanValue = response.data.roman;
        this.setState({ roman: romanValue });
      } else {
        api = axios.post(`api/number?roman=${roman}`);
        const response = await api;
        const integerValue = response.data.number;
        
        this.setState({ integer: integerValue });
      }
    } catch (err) {
      this.logError(err);
    }
  };
  render() {
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
        <Result roman={roman} ToShow={ToShow} integer={integer} />
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
