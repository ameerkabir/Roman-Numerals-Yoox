import React from "react";
import RomanResult from "./RomanResult";
import "../App.css"

const RomanToNumber = ({ renderNumber, setRomanNUmber, showNumber, roman }) => {
  return (
    <div className="container"> 
      <h4 className="header">Roman to number</h4>
      <form  onSubmit={renderNumber}>
        <label className="label" htmlFor="roman">Roman Conveter</label>
        <input
          type="text"
          value={roman}
          id="roman"
          onChange={setRomanNUmber}
          placeholder="Type roman to convert"
        />
        <button className="convert" type="submit">Convert</button>
      </form>
      {showNumber ? <RomanResult showNumber={showNumber} /> : null}
    </div>
  );
};
export default RomanToNumber;
