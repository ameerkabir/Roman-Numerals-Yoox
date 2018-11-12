import React from "react";

const NumberResult = ({ showRoman }) => {
  console.log(showRoman);
  return <div className="result">{showRoman ? <p>{showRoman}</p> : null} </div>;
};
export default NumberResult;
