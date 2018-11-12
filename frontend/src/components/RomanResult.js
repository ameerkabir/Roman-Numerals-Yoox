import React from "react";
const RomanResult = ({ showNumber }) => {
  return <div className="result">{showNumber ? <div>{showNumber}</div> : null} </div>;
};
export default RomanResult;
