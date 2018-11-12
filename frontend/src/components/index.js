import React, { Component } from "react";
import NumberToRoman from "./NumberToRoman";
import axios from "axios";
import RomanToNumber from "./RomanToNumber";
import "../App.css";

class Converter extends Component {
  state = {
    integer: "",
    showRoman: "",
    roman: "",
    showNumber: 0,
    hasError: false,
    showConvert: true,
    endpoint: "NumberToRoman/"
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
  //toggle conversion
  toggleConversion = async e => {
    this.setState({ showConvert: !this.state.showConvert });
  };
  //@ Handles return Roman from hanleNumber
  renderRomanValue = async e => {
    try {
      const convertedNumber = await this.handleNumberToRoman(e);
      const RomanNumber = convertedNumber.data.roman;
      this.setState({ showRoman: RomanNumber });
    } catch (err) {
      this.logError(err);
    }
  };
  //@ This function get the return number from the api and setState to the returend number
  renderNumber = async e => {
    try {
      const convertedRoman = await this.handleRomanToNumber(e);
      const receivedNumber = convertedRoman.data.number;
      this.setState({ showNumber: receivedNumber });
    } catch (err) {
      this.logError(err);
    }
  };
  setIneger = e => {
    this.setState({ integer: e.target.value });
  };
  handleNumberToRoman = async e => {
    e.preventDefault();
    try {
      const { integer } = this.state;
      const Api = await axios.post(`numerial-to-roman/?number=${integer}`);
      const response = await Api;
      return response;
    } catch (err) {
      console.error(err);
      this.logError(err);
    }
  };
  setRomanNUmber = e => {
    this.setState({ roman: e.target.value });
  };

  handleRomanToNumber = async e => {
    e.preventDefault();
    try {
      const { roman } = this.state;
      const Api = await axios.post(`roman-to-numerial/?roman=${roman}`);
      const response = await Api;
      return response;
    } catch (err) {
      this.logError(err);
    }
  };

  render() {
    const {
      integer,
      showConvert,
      showRoman,
      roman,
      hasError,
      showNumber
    } = this.state;
    return (
      <div className="container">
        <div className="row">
          {showConvert ? (
            <div className="col">
              <NumberToRoman
                setIneger={this.setIneger}
                integer={integer}
                renderRomanValue={this.renderRomanValue}
                showRoman={showRoman}
              />
            </div>
          ) : (
            <div className="col">
              <RomanToNumber
                renderNumber={this.renderNumber}
                roman={roman}
                setRomanNUmber={this.setRomanNUmber}
                showNumber={showNumber}
                showRoman={showRoman}
              />
            </div>
          )}
        </div>

        <div className="row">
          <button className="swap-button" onClick={this.toggleConversion}>
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
