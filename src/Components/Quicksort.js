import React from "react";

import "../CSS/Quicksort.css";
import Bar from "./Bar";



export default function Quicksort() {
  var arr = new Array(50);
  for (var i = 0; i < 50; ++i) {
    arr[i] = Math.floor(Math.random() * Math.floor(400));
  }
  
  console.log(arr);
  arr.sort(function(a, b) {
    return a - b;
  });
  console.log(arr);
  const mp = arr.map((num, idx) => {return(<Bar key={idx} height={num} />)})
  return (
    <>
      <div className="layout">
          {mp}
      </div>
    </>
  );
}
