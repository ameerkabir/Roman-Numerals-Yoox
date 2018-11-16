import React from "react";
const Result = ({ toShow, roman, integer }) => {
  return (
    <div className="result">
      {toShow ? <div> {roman}</div> : <div>{integer}</div>}
    </div>
  );
};
export default Result;
