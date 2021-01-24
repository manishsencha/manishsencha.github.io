import { Button } from "@material-ui/core";
import React, { useState } from "react";

import "../CSS/Quicksort.css";
import Bar from "./Bar";

export default function Quicksort() {
  const [arr] = useState(
    [...Array(50)].map(() => Math.floor(Math.random() * Math.floor(400)))
  );

  const [st, changeSt] = useState(false);

  return (
    <>
      <Button variant="contained" onClick={() => changeSt(true)}>
        Sort
      </Button>
      <Button variant="contained" onCanPlay={() => changeSt(false)}>
        Reset
      </Button>
      <div className="layout">
        {st
          ? arr
              .sort((a, b) => a - b)
              .map((num, idx) => {
                return <Bar key={idx} height={num} />;
              })
          : arr.map((num, idx) => {
              return <Bar key={idx} height={num} />;
            })}
      </div>
    </>
  );
}
