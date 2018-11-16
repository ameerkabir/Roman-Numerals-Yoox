import React, { Component } from "react";
import Input from "./Input";
import Result from "./Result";
import axios from "axios";
import "../App.css";

class Converter extends Component {
  state = {
    integer: "",
    toShow: true,
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
    const {toShow} = this.state
    this.setState({ toShow: toShow ? false : true });
  };
  handleChang = e => {

    this.setState({ [e.target.name]: e.target.value });
  };

  hanleSubmit = async e => {
    e.preventDefault();
    try {
      const { roman, integer, toShow } = this.state;
      let api = "";
      if (toShow) {
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
    const { integer, roman, hasError, toShow } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Input
              handleChang={this.handleChang}
              hanleSubmit={this.hanleSubmit}
              toShow={toShow}
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
        <Result roman={roman} toShow={toShow} integer={integer} />
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
