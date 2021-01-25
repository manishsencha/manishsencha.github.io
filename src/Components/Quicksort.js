import { Button, Checkbox, FormControlLabel } from "@material-ui/core";
import React, { useState, useEffect } from "react";

import "../CSS/Quicksort.css";
import Bar from "./Bar";

export default function Quicksort() {
  const [arr, setArr] = useState(
    [...Array(10)].map(() => Math.floor(Math.random() * Math.floor(400)))
  );
  const [st, changeSt] = useState(false);
  return (
    <>
    <FormControlLabel
      control={<Checkbox onChange={()=> changeSt(!st)} />} label="Sort"/>
      <Button
        variant="contained"
        onClick={() =>
          setArr(
            [...Array(10)].map(() =>
              Math.floor(Math.random() * Math.floor(400))
            )
          )
        }
      >
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
