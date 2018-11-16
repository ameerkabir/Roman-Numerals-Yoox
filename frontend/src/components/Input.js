import React from "react";
const NumberToRoman = ({ hanleSubmit, ToShow, handleChang, roman, integer }) => {
  return (
    <div className="container">
      <h4 className="header">{ToShow ? "Number to Roman" : "Roman to Number"}</h4>
      <form onSubmit={hanleSubmit} className="form-inline">
        <label className="label" htmlFor="number">
          {" "}
          {ToShow ? "Number to roman" : "Roman To Number"}
        </label>
        <input
          type={ToShow ? "number" : "text"}
          id="number"
          value={ToShow ? integer : roman}
          name={ToShow ? "integer" : "roman"}
          onChange={handleChang}
          placeholder={ToShow ? "0-9" : "IV" }
        />
        <button className="convert" type="submit">
          Convert
        </button>
      </form>
    </div>
  );
};
export default NumberToRoman;
