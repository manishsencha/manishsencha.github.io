import { Button, makeStyles, Slider, Typography } from "@material-ui/core";
import React, { useState } from "react";

import "../CSS/Quicksort.css";
import Bar from "./Bar";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}`;
}
export default function Quicksort() {
  const classes = useStyles();
  const [val, changeVal] = useState(10);
  const [arr, setArr] = useState(
    [...Array(val)].map(() => Math.floor(Math.random() * Math.floor(400)))
  );

  const changevalue = (val) => {
    changeVal(val);
    setArr(
      [...Array(val)].map(() => Math.floor(Math.random() * Math.floor(400)))
    );
  };
  const qsort = () => {
    for(var i=0; i<arr.length; ++i) {
      for (let j = 0; j < arr.length; j++) {
        if(arr[i]-arr[j] < 0){
          var temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          setArr(() => arr.map((num)=> num ))
        } 
      }
    }
  }
  return (
    <>
      <div className="controls-layout">
        <Button variant="contained" onClick={qsort}>
          SORT
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            setArr(
              [...Array(val)].map(() =>
                Math.floor(Math.random() * Math.floor(400))
              )
            )
          }
        >
          Reset
        </Button>
        <div className={classes.root}>
          <Typography id="discrete-slider-small-steps" gutterBottom>
            Set array length
          </Typography>
          <Slider
            defaultValue={val}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-small-steps"
            step={1}
            marks
            min={1}
            max={50}
            valueLabelDisplay="auto"
            onChange={(event, value) => changevalue(value)}
          />
        </div>
      </div>
      <div className="layout">
        {arr.map((num, idx) => {
          return <Bar key={idx} height={num} />;
        })}
      </div>
    </>
  );
}
