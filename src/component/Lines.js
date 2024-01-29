/** @format */

import React from "react";

export default function Lines({ lines }) {
  let liness = [];
  for (let i = 0; i < lines; i++) {
    liness.push(i);
  }
  return (
    <>
      {liness.map((r, index) => {return <span className="lines" key={index}>_</span>;
      })}
    </>
  );
}
