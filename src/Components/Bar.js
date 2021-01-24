import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import '../CSS/Bar.css';

export default function Bar({height}) {
    const useStyles = makeStyles({
        root:{
            height:height,
            width:10,
            backgroundColor:"red",
        }
    });
    const classes = useStyles();
    return (
        <>
            <div className={classes.root} >
                {height}
            </div>
        </>
    )
}
