import React from 'react';
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius:20,
        '& > *': {
            width: '25ch',
        },
    },
    displaybox: {
        position:'relative',
        borderRadius: 20,
    },
  }));
const DisplaynameBox = () => {
    const classes = useStyles;
    return(
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField  
                    classes={{displaybox:classes.displaybox}}
                    label="Display name"
                    defaultValue="Hello World"
                    variant="outlined" />
            </div>
        </form>
    )
}

export default DisplaynameBox;