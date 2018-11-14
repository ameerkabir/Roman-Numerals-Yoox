import React from "react";
const Result = ({ Toshow, roman, integer }) => {
  console.log(Toshow, roman)
  return <div className="result">{ roman ?<div> {roman}</div> : <div>{integer}</div>}</div>;
};
export default Result;
