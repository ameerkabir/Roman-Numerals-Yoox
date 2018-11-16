import React from "react";
const Result = ({ ToShow, roman, integer }) => {
  return (
    <div className="result">
      {ToShow ? <div> {roman}</div> : <div>{integer}</div>}
    </div>
  );
};
export default Result;
