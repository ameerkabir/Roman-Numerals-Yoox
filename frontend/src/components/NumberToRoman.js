import React from "react";
import NumberResult from "./NumberResult"
 
const NumberToRoman = ({ renderRomanValue, setIneger, integer, showRoman }) => {
  console.log({showRoman})
  return (
      <div className="container">
        <h4 className="header">Number to Roman</h4>
        <form onSubmit={renderRomanValue} className="form-inline">
          <label className="label" htmlFor="number">Integer Converter</label>
          <input
            type="text"
            value={integer}
            id="number"
            onChange={setIneger}
            placeholder="Type integer to convert"
          />
          <button className="convert" type="submit">Convert</button>
        </form>
       {showRoman ? <NumberResult showRoman={showRoman}/> :null}
      </div>
  );
};
export default NumberToRoman;
