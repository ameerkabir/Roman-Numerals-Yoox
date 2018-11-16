import React from "react";
const NumberToRoman = ({ hanleSubmit, toShow, handleChang, roman, integer }) => {
  return (
    <div className="container">
      <h4 className="header">{toShow ? "Number to Roman" : "Roman to Number"}</h4>
      <form onSubmit={hanleSubmit} className="form-inline">
        <label className="label" htmlFor="number">
          {" "}
          {toShow ? "Number to roman" : "Roman To Number"}
        </label>
        <input
          type={toShow ? "number" : "text"}
          id="number"
          value={toShow ? integer : roman}
          name={toShow ? "integer" : "roman"}
          onChange={handleChang}
          placeholder={toShow ? "0-9" : "IV" }
        />
        <button className="convert" type="submit">
          Convert
        </button>
      </form>
    </div>
  );
};
export default NumberToRoman;
