import {
  Button,
  Checkbox,
  FormControlLabel,
  makeStyles,
  Slider,
  Typography,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";

import "../CSS/Quicksort.css";
import Bar from "./Bar";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}C`
}
export default function Quicksort() {
  const classes = useStyles();
  const [val, changeVal ] = useState(10);
  const [arr, setArr] = useState(
    [...Array(10)].map(() => Math.floor(Math.random() * Math.floor(400)))
  );
  const [st, changeSt] = useState(false);
  return (
    <>
      <FormControlLabel
        control={<Checkbox onChange={() => changeSt(!st)} />}
        label="Sort"
      />
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
          Small steps
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
          onChange ={(event, value)=>changeVal(value)}
        />
      </div>
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
