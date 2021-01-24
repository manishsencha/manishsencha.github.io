import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import '../CSS/Bar.css';

export default function Bar({height}) {
    const useStyles = makeStyles({
        bar:{
            fontSize:10,
            height:height,
            width:20,
            backgroundColor:"red",
            color:"white"
        }
    });
    const classes = useStyles();
    return (
        <>
            <div className={classes.bar} >
                {height}
            </div>
        </>
    )
}
